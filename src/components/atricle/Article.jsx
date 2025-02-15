// Article component
// containing
// - image of the article
// - name of the article
// - the amount
// - a button to substract 1 from the counter (should not go below 0, do nothhing if the counter is 0)
// - a button to add 1 to the counter

import './Article.css'
import Button from "../button/Button.jsx";

function Article({title, img, count, handleClick}) {
    return (
        <article>
            <img src={img} alt={title}/>
            {title}
            <Button count={count} adjust={-1} handleClick={handleClick}>-</Button>
            {count}
            <Button count={count} adjust={1} handleClick={handleClick}>+</Button>
        </article>
    );
}

export default Article;