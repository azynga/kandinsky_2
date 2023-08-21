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
