// export function getContentList(data, path = []) {
//     let links = [];

//     for (const key in data) {
//         if (key === 'links') {
//             for (const linkTitle in data[key]) {
//                 const url = data[key][linkTitle];
//                 const fullPath =
//                     linkTitle +
//                     ' / ' +
//                     path.filter(Boolean).toReversed().join(' / ');
//                 links.push({ linkTitle, url, path: fullPath });
//             }
//         } else if (typeof data[key] === 'object') {
//             links = links.concat(
//                 getContentList(data[key], [
//                     ...path,
//                     key !== 'topics' && key !== 'categories' ? key : '',
//                 ])
//             );
//         }
//     }

//     return links;
// }

// export function getContentList(data, path = []) {
//     const links = [];

//     for (const [key, value] of Object.entries(data)) {
//         if (key === 'links') {
//             for (const [linkTitle, url] of Object.entries(value)) {
//                 links.push({
//                     linkTitle,
//                     url,
//                     path: path.toReversed().join(' / '),
//                     forCommercials: data.forCommercials || false,
//                 });
//             }
//         } else if (typeof value === 'object' && value !== null) {
//             getContentList(value, [...path, key]);
//         }
//     }
//     console.log(links);
//     return links;
// }

// export function getContentList(data, path = []) {
//     const links = [];

//     for (const [key, value] of Object.entries(data)) {
//         if (key === 'links') {
//             for (const [linkTitle, url] of Object.entries(value)) {
//                 links.push({
//                     linkTitle,
//                     url,
//                     path: [...path, linkTitle].reverse().join(' / '),
//                     forCommercials: data.forCommercials || false,
//                 });
//             }
//         } else if (typeof value === 'object' && value !== null) {
//             getContentList(value, [...path, key]);
//         }
//     }

//     return links;
// }

// export function getContentList(data, commercialView) {
//     const links = [];

//     function extractLinks(object, path) {
//         if (!object || typeof object !== 'object') return;

//         for (const [key, value] of Object.entries(object)) {
//             if (key === 'links') {
//                 for (const [linkTitle, url] of Object.entries(value)) {
//                     links.push({
//                         linkTitle,
//                         url,
//                         path: path.filter(Boolean).toReversed().join(' / '),
//                     });
//                 }
//             } else if (key !== 'categories' && key !== 'topics') {
//                 const newPath = [...path, key];
//                 extractLinks(value, newPath);
//             }
//         }
//     }

//     for (const [cardTitle, card] of Object.entries(data)) {
//         if (!commercialView || card.forCommercials) {
//             extractLinks(card, [cardTitle]);
//         }
//     }

//     return links;
// }

// export const getContentList = (contentHierarchy, commercialView) => {
//     const extractLinks = (data, path = [], forCommercials = false) => {
//         let links = [];

//         for (const key in data) {
//             if (key === 'links') {
//                 for (const linkTitle in data[key]) {
//                     const url = data[key][linkTitle];
//                     const fullPath = [linkTitle, ...path]
//                         .filter(Boolean)
//                         .join(' / ');
//                     links.push({
//                         linkTitle,
//                         url,
//                         path: fullPath,
//                         forCommercials,
//                     });
//                 }
//             } else if (typeof data[key] === 'object') {
//                 if (
//                     key !== 'topics' &&
//                     key !== 'categories' &&
//                     key !== 'cardDescription'
//                 ) {
//                     links = links.concat(
//                         extractLinks(data[key], [key, ...path], forCommercials)
//                     );
//                 } else {
//                     links = links.concat(
//                         extractLinks(
//                             data[key],
//                             path,
//                             data.forCommercials || forCommercials
//                         )
//                     );
//                 }
//             }
//         }

//         return links;
//     };

//     const linkList = extractLinks(contentHierarchy);
//     const filteredLinkList = linkList.filter(
//         (link) => !commercialView || link.forCommercials
//     );
//     return filteredLinkList;
// };

export const getContentList = (selectedContent) => {
    const links = [];

    for (const card of selectedContent) {
        const cardTitle = card.cardTitle;

        for (const category of card.categories) {
            const categoryTitle = category.categoryTitle;

            for (const topic of category.topics) {
                const topicTitle = topic.topicTitle;

                for (const link of topic.links) {
                    const linkTitle = link.linkTitle;
                    const url = link.url;

                    const path = [
                        linkTitle,
                        topicTitle,
                        categoryTitle,
                        cardTitle,
                    ]
                        .filter(Boolean)
                        .join(' > ');

                    links.push({
                        linkTitle,
                        url,
                        path,
                    });
                }
            }
        }
    }

    return links;
};
