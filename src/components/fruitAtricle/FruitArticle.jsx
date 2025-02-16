// FruitArticle component
// containing
// - image of the article
// - name of the article
// - the amount
// - a counterButton to substract 1 from the counter (should not go below 0, do nothhing if the counter is 0)
// - a counterButton to add 1 to the counter

import './FruitArticle.css'
import Counter from "../counter/Counter.jsx";

function FruitArticle({title, img, counter, handleClick}) {
    return (
        <article>
            <img src={img} alt={title}/>
            {title}
            <Counter counter={counter} step={1} handleClick={handleClick}/>
        </article>
    );
}

export default FruitArticle;