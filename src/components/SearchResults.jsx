import { Link } from 'react-router-dom';

const getContainingUrl = (link) => {
    const resultUrl = link.path.split(' > ').splice(0, 2).join('/');
    return `/${resultUrl}`;
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
