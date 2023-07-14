import { Link } from 'react-router-dom';

export const SearchResults = ({ searchResults }) => {
    const getContainingUrl = (link) => {
        const resultUrl = link.path.split(' > ').splice(0, 2).join('/');
        return `/${resultUrl}`;
    };

    return (
        <ul className='search-results'>
            {searchResults.map((link) => {
                return (
                    <li key={link.path}>
                        <Link to={getContainingUrl(link)}>{link.path}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
