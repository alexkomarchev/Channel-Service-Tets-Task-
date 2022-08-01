import './Card.scss'

const Card = ({img, author, company, title, body}) => {
    return (
        <div className='card'>
            <div className='card__header'>
                <img src={img} className='card__header-img' />
                <div className='card__header-info'>
                    <div className='card__header-info-author'>Author: {author}</div>
                    <div className='card__header-info-company'>Company: {company}</div>
                </div>
            </div>
            <div className='card__title'>Title: {title}</div>
            <div className='card__body'>{body}</div>
        </div>
    );
};

export default Card;