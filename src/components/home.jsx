import { NavLink } from "react-router-dom"


export function Home (){
  
    const index = 1;
    return <>
    
       <h1>accueil</h1>
       <img src={`/img${index}.jpg`} alt="" />

       </>
}