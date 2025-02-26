// FruitArticle component
// containing
// - image of the article
// - name of the article
// - a counter component to adjust and show the counter

import './FruitArticle.css';

import Counter from "../counter/Counter.jsx";

function FruitArticle({title, img, counter, handleClick}) {
    return (
        <article className="fruit-article">
            {img && <img className="fruit-image" src={img} alt={title}/>}
            {title}
            <Counter counter={counter} handleClick={handleClick}/>
        </article>
    );
}

export default FruitArticle;