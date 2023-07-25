import { Link, useLocation } from 'react-router-dom';
import { getUrlFormat } from '../helper/format-path';

const getContainingUrl = (link) => {
    const resultUrl = getUrlFormat(
        link.path.split(' > ').splice(0, 2).join('/')
    );
    const team = useLocation().pathname.split('/')[1];
    return `${team}/${resultUrl}`;
};

const getFormattedPath = (link) => {
    const formattedPath = link.path.split(' > ').reverse().join(' / ');
    return formattedPath;
};

export const SearchResults = ({ searchResults }) => {
    return (
        <ul className='search-results'>
            {searchResults.map((link) => {
                return (
                    <Link key={link.path} to={getContainingUrl(link)}>
                        <li>{getFormattedPath(link)}</li>
                    </Link>
                );
            })}
        </ul>
    );
};
