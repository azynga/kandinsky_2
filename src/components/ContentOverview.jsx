import contentHierarchy from '../../content-hierarchy.json';
import { CardMinimized } from './CardMinimized';

export const ContentOverview = ({ team }) => {
    const miniCards = Object.entries(contentHierarchy[team]).map((card) => {
        return (
            <CardMinimized
                key={card[0]}
                cardTitle={card[0]}
                cardDescription={card[1].cardDescription}
                cardContent={card[1].categories}
            />
        );
    });
    return <div className='content-overview'>{miniCards}</div>;
};
