import { useState, useEffect } from "react";

export function Contact() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Charger la liste des images depuis le dossier "img" (dans le dossier public)
    const importAll = (r) => r.keys().map(r);
    const imageFiles = importAll(require.context('/public/img', false, /\.(jpg)$/));

    setImages(imageFiles);
  }, []);

  const changeImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const retourImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <h1>Contact</h1>
          <img src={images[currentIndex]} alt="" />
          <button className="prev" onClick={retourImage}>
            Précédent
          </button>
          <button className="next" onClick={changeImage}>
            Suivant
          </button>
    </>
  );
}
