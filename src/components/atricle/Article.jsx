import './Article.css'

function Article({title, img, count, handleClick}) {
    return (
        <article>
            <img src={img} alt={title}/>
            {title}
            <button type="button" onClick={() => {count && handleClick(count-1)}}>-</button>
            {count}
            <button type="button" onClick={() => handleClick(count+1)}>+</button>
        </article>
    )
}

export default Article;