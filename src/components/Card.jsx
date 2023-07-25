import { Link, NavLink, useLocation } from 'react-router-dom';
import { CardRouter } from '../router/CardRouter';
import { getUrlFormat } from '../helper/format-path';

export const Card = ({ cardTitle, cardContent }) => {
    const categoryLinks = Object.keys(cardContent.categories).map(
        (category) => {
            return (
                <NavLink key={category} replace to={getUrlFormat(category)}>
                    {category}
                </NavLink>
            );
        }
    );
    return (
        <div className='card'>
            <nav>{categoryLinks}</nav>
            <div className='content'>
                <Link replace to={`/${useLocation().pathname.split('/')[1]}`}>
                    <span className='close-button'>close</span>
                </Link>
                <h2>{cardTitle}</h2>
                <CardRouter cardContent={cardContent} cardTitle={cardTitle} />
            </div>
        </div>
    );
};
