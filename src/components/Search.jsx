import { useState, useEffect, useContext } from 'react';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { ContentContext } from '../App';

export const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchFocus, setIsSearchFocus] = useState(false);
    const { searchInstance, teamSelection } = useContext(ContentContext);

    useEffect(() => {
        const searchMatch = searchInstance
            ?.search(searchText)
            .slice(0, 10)
            .map((result) => {
                const { item } = result;
                return item;
            });
        setSearchResults(searchMatch);
    }, [searchText]);

    useEffect(() => {
        setSearchText('');
    }, [teamSelection]);

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
