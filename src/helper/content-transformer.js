// export const transformContentToList = (contentHierarchy, path = '') => {
//     const linksList = [];
//     Object.entries(contentHierarchy).forEach(([key, value]) => {
//         const newPath = path ? `${path} > ${key}` : key;
//         if (typeof value === 'string') {
//             linksList.push({
//                 linkTitle: key,
//                 url: value,
//                 path: newPath,
//             });
//         } else if (typeof value === 'object') {
//             linksList.push(...transformContentToList(value, newPath));
//         }
//     });
//     return linksList;
// };

export function transformContentToList(data, path = []) {
    let links = [];

    for (const key in data) {
        if (key === 'links') {
            for (const linkTitle in data[key]) {
                const url = data[key][linkTitle];
                const fullPath =
                    path.filter(Boolean).join(' > ') + ' > ' + linkTitle;
                links.push({ linkTitle, url, path: fullPath });
            }
        } else if (typeof data[key] === 'object') {
            links = links.concat(
                transformContentToList(data[key], [
                    ...path,
                    key !== 'topics' && key !== 'categories' ? key : '',
                ])
            );
        }
    }

    return links;
}
