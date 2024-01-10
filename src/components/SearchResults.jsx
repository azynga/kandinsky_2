import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContentContext } from '../App';
import { getKebabCase, getSnakeCase } from '../helper/format-path';

const getContainingUrl = (link, team) => {
    const resultUrl = link.path
        .split(' > ')
        .map((pathElement) => getKebabCase(pathElement))
        .reverse()
        .splice(0, 2)
        .join('/');
    const highlightedLink = getSnakeCase(link.path.split(' > ')[0]);
    return `${team}/${resultUrl}?highlight=${highlightedLink}`;
};

const getFormattedPath = (link) => {
    const formattedPath = link.path.split(' > ').join(' / ');
    return formattedPath;
};

export const SearchResults = ({ searchResults }) => {
    const { teamSelection } = useContext(ContentContext);

    const resultLinks = searchResults?.map((link) => {
        return (
            <Link key={link.path} to={getContainingUrl(link, teamSelection)}>
                <li>{getFormattedPath(link)}</li>
            </Link>
        );
    });

    return <ul className='search-results'>{resultLinks}</ul>;
};
