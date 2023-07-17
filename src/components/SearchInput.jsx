import React from 'react';

export const SearchInput = ({
    searchText,
    setSearchText,
    setIsSearchFocus,
}) => {
    return (
        <input
            autoFocus
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onClick={(event) => event.target.select()}
            onFocus={() => setIsSearchFocus(true)}
            onBlur={() => {
                setTimeout(() => {
                    setIsSearchFocus(false);
                }, 200);
            }}
        />
    );
};
