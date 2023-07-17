import { useState, useEffect, useRef } from 'react';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { search } from '../helper/search';

export const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocus, setIsSearchFocus] = useState(false);

    useEffect(() => {
        const searchMatch = search(searchText);
        setSearchResults(searchMatch);
    }, [searchText]);

    const renderSearchResults =
        searchText && isSearchFocus ? (
            <SearchResults searchResults={searchResults} />
        ) : (
            ''
        );

    return (
        <div className='search'>
            <SearchInput
                searchText={searchText}
                setSearchText={setSearchText}
                setIsSearchFocus={setIsSearchFocus}
            />
            {renderSearchResults}
        </div>
    );
};
