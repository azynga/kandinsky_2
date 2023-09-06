import { Link } from 'react-router-dom';
import { getKebabCase } from '../helper/format-path';

export const CardMinimized = ({ card }) => {
    const { cardTitle, cardDescription, categories } = card;
    const categoryList = categories.map((category) => {
        const { categoryTitle } = category;
        return <li key={categoryTitle}>{categoryTitle}</li>;
    });

    return (
        <Link to={getKebabCase(cardTitle)}>
            <div className='minicard'>
                <div className='minicard-headline'>
                    <h2>{cardTitle}</h2>
                    <h3>{cardDescription}</h3>
                </div>
                <ul>{categoryList}</ul>
            </div>
        </Link>
    );
};
