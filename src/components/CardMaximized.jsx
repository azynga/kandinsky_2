import { useContext, useEffect } from 'react';
import {
    Link,
    NavLink,
    useLocation,
    useParams,
    useNavigate,
} from 'react-router-dom';
import { ContentContext } from '../App';
import { CardRouter } from '../router/CardRouter';
import { getKebabCase } from '../helper/format-path';

export const CardMaximized = () => {
    const { selectedContent, teamSelection } = useContext(ContentContext);
    const navigate = useNavigate();
    const cardKebabCase = useParams().card;
    const card = selectedContent?.find(
        (card) => getKebabCase(card.cardTitle) === cardKebabCase
    );
    useEffect(() => {
        if (!card) {
            if (!selectedContent) {
                return;
            }
            navigate(`/${teamSelection}`);
        }
    }, [card]);

    const categoryLinks = card?.categories.map(({ categoryTitle }) => {
        return (
            <li key={categoryTitle}>
                <NavLink to={getKebabCase(categoryTitle)}>
                    {categoryTitle}
                </NavLink>
            </li>
        );
    });

    return (
        <div className='card'>
            <nav>
                <ul>{categoryLinks}</ul>
            </nav>
            <div className='card-content'>
                <Link to={`/${useLocation().pathname.split('/')[1]}`}>
                    <span title='Close' className='close-button'>
                        X
                    </span>
                </Link>
                <h2>{card?.cardTitle}</h2>
                {card && <CardRouter card={card} />}
            </div>
        </div>
    );
};