import Fuse from 'fuse.js';
import contentHierarchy from '../../content-hierarchy.json';
import { transformContentToList } from '../helper/content-transformer';

export const search = (searchText = '') => {
    const team = window.location.pathname.split('/')[1];
    const links = transformContentToList(contentHierarchy[team.toUpperCase()]);

    const fuseOptions = {
        keys: ['path'],
        ignoreLocation: true,
        threshold: 0.6,
    };

    const fuse = new Fuse(links, fuseOptions);

    const searchResult = fuse
        .search(searchText)
        .slice(0, 10)
        .map((result) => {
            const { item } = result;
            return item;
        });

    return searchResult;
};
