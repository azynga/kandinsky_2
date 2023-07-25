import { Link } from 'react-router-dom';
import { getUrlFormat } from '../helper/format-path';

export const CardMinimized = ({ cardTitle, cardDescription, cardContent }) => {
    return (
        <Link to={getUrlFormat(cardTitle)}>
            <div className='minicard'>
                <h2>{cardTitle}</h2>
                <h3>{cardDescription}</h3>
                <ul>
                    {Object.keys(cardContent).map((category) => {
                        return <li key={category}>{category}</li>;
                    })}
                </ul>
            </div>
        </Link>
    );
};