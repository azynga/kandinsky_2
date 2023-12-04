import Fuse from 'fuse.js';

export const createSearchInstance = (linksToSearch) => {
    const fuseOptions = {
        keys: ['path'],
        threshold: 0.3,
    };

    const searchInstance = new Fuse(linksToSearch, fuseOptions);

    return searchInstance;
};
