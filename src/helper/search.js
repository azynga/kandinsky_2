import Fuse from 'fuse.js';

export const createSearchInstance = (linksToSearch) => {
    const fuseOptions = {
        keys: ['path'],
        threshold: 0.6,
    };

    const searchInstance = new Fuse(linksToSearch, fuseOptions);

    return searchInstance;
};

// export const search = (searchText = '') => {
//     const links = [];

//     const fuse = new Fuse(links, fuseOptions);

//     const searchResult = fuse
//         .search(searchText)
//         .slice(0, 10)
//         .map((result) => {
//             const { item } = result;
//             return item;
//         });

//     return searchResult;
// };
