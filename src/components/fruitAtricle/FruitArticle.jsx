// FruitArticle component
// containing
// - image of the article
// - name of the article
// - a counter component to adjust the amount and show the amount

import './FruitArticle.css'
import Counter from "../counter/Counter.jsx";

function FruitArticle({title, img, counter, handleClick}) {
    return (
        <article>
            <img src={img} alt={title}/>
            {title}
            <Counter counter={counter} handleClick={handleClick}/>
        </article>
    );
}

export default FruitArticle;