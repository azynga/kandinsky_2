import { Link, NavLink } from 'react-router-dom';
import { CardRouter } from '../CardRouter';

export const Card = ({ cardTitle, cardContent }) => {
    const categoryLinks = Object.keys(cardContent).map((category) => {
        return (
            <NavLink key={category} replace to={`/${cardTitle}/${category}`}>
                {category}
            </NavLink>
        );
    });

    return (
        <div className='card'>
            <nav>{categoryLinks}</nav>
            <div className='content'>
                <Link to='/'>close</Link>
                <h2>{cardTitle}</h2>
                <CardRouter cardContent={cardContent} cardTitle={cardTitle} />
            </div>
        </div>
    );
};
