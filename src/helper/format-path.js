export const getUrlFormat = (title) => {
    return title.trim().split(' ').join('-').toLowerCase();
};
