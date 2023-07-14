import contentHierarchy from '../../content-hierarchy.json';
import descriptions from '../../descriptions.json';
import { CardMinimized } from './CardMinimized';

const miniCards = Object.entries(contentHierarchy).map((card) => {
    return (
        <CardMinimized
            key={card[0]}
            cardTitle={card[0]}
            cardDescription={descriptions.cards[card[0]]}
            cardContent={card[1]}
        />
    );
});

export const ContentOverview = () => {
    return <div className='content-overview'>{miniCards}</div>;
};
