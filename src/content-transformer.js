export const transformContentToList = (contentHierarchy, path = '') => {
    const result = [];

    for (const key in contentHierarchy) {
        if (contentHierarchy.hasOwnProperty(key)) {
            const value = contentHierarchy[key];
            const currentPath = path ? `${path} > ${key}` : key;

            if (typeof value === 'string') {
                result.push({
                    linkTitle: key,
                    url: value,
                    path: currentPath,
                });
            } else {
                result.push(...transformContentToList(value, currentPath));
            }
        }
    }

    return result;
};
