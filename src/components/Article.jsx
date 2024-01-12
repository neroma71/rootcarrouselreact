const Article = (props) => {

    return(
        <div>
            <h2 className="titre">{ props.title }</h2>
            { props.children }
        </div>
    );
};

export default Article;