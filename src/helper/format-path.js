export const getKebabCase = (title) => {
    return title.trim().split(' ').join('-').toLowerCase();
};

export const getSnakeCase = (title) => {
    return title.trim().split(' ').join('_').toLowerCase();
};
