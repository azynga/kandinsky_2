import { useParams } from 'react-router-dom';
import { Topic } from './Topic';
import { getKebabCase } from '../helper/format-path';

export const Category = ({ card }) => {
    const categoryKebabCase = useParams().category;
    const category = card?.categories.find(
        (category) => getKebabCase(category.categoryTitle) === categoryKebabCase
    );
    const topics = category?.topics.map((topic) => {
        return <Topic key={topic.topicTitle} topic={topic} />;
    });
    return (
        <div className='category'>
            <h3>{category?.categoryTitle}</h3>
            <div className='topics'>{topics}</div>
        </div>
    );
};
