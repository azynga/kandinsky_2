import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';
import { SearchResults } from './SearchResults';
import contentHierarchy from '../../content-hierarchy.json';
import { transformContentToList } from '../content-transformer';

const links = transformContentToList(contentHierarchy);

const fuseOptions = {
    keys: ['path'],
    ignoreLocation: true,
    threshold: 0.6,
};

const fuse = new Fuse(links, fuseOptions);

export const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocus, setIsSearchFocus] = useState(false);

    useEffect(() => {
        const searchMatch = fuse
            .search(searchText)
            .splice(0, 5)
            .map((result) => {
                const { item } = result;
                return item;
            });
        setSearchResults(searchMatch);
    }, [searchText]);

    return (
        <div className='search'>
            <input
                autoFocus
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                onClick={(event) => event.target.select()}
                onFocus={() => setIsSearchFocus(true)}
                onBlur={(event) => {
                    setTimeout(() => {
                        setIsSearchFocus(false);
                    }, 200);
                }}
            />
            {searchText && isSearchFocus ? (
                <SearchResults searchResults={searchResults} />
            ) : (
                ''
            )}
        </div>
    );
};
