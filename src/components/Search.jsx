import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { search } from '../helper/search';

export const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocus, setIsSearchFocus] = useState(false);
    const team = useLocation().pathname.split('/')[1];

    useEffect(() => {
        const searchMatch = search(searchText);
        setSearchResults(searchMatch);
    }, [searchText]);

    useEffect(() => {
        setSearchText('');
    }, [team]);

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
