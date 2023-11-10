// export const getKebabCase = (title) => {
//     return title.trim().split(' ').join('-').toLowerCase();
// };

export const getKebabCase = (title) => {
    const alphanumericMatch = title.match(/[\w ]/g);
    if (!alphanumericMatch) {
        return;
    }
    const kebabCaseTitle = alphanumericMatch
        .join('')
        .replace(/ +/g, ' ')
        .trim()
        .split(' ')
        .join('-')
        .toLowerCase();
    return kebabCaseTitle;
};

export const getSnakeCase = (title) => {
    const alphanumericMatch = title.match(/[\w ]/g);
    if (!alphanumericMatch) {
        return;
    }
    const snakeCaseTitle = alphanumericMatch
        .join('')
        .replace(/ +/g, ' ')
        .trim()
        .split(' ')
        .join('_')
        .toLowerCase();
    return snakeCaseTitle;
};
