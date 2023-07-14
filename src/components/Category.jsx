import { Topic } from './Topic';

export const Category = ({ categoryTitle, categoryContent }) => {
    const topics = Object.entries(categoryContent).map((topic) => {
        return (
            <Topic
                key={topic[0]}
                topicTitle={topic[0]}
                topicContent={topic[1]}
            />
        );
    });
    return (
        <div className='category'>
            <h3>{categoryTitle}</h3>
            <div className='topics'>{topics}</div>
        </div>
    );
};
