import Fuse from 'fuse.js';
import contentHierarchy from '../../content-hierarchy.json';
import { transformContentToList } from '../helper/content-transformer';

const links = transformContentToList(contentHierarchy);

const fuseOptions = {
    keys: ['path'],
    ignoreLocation: true,
    threshold: 0.6,
};

const fuse = new Fuse(links, fuseOptions);

export const search = (searchText = '') => {
    const searchResult = fuse
        .search(searchText)
        .splice(0, 10)
        .map((result) => {
            const { item } = result;
            return item;
        });

    return searchResult;
};
