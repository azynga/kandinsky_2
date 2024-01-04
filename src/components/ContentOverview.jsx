import { useContext } from 'react';
import { ContentContext } from '../App';
import { CardMinimized } from './CardMinimized';

const colors = ['orange', 'grey', 'yellow', 'grey', 'light-orange', 'grey'];

export const ContentOverview = () => {
    const { selectedContent } = useContext(ContentContext);
    const miniCards = selectedContent?.map((card, index) => {
        return (
            <CardMinimized
                key={card.cardTitle}
                card={card}
                color={colors[index % 6]}
            />
        );
    });
    return <div className='content-overview'>{miniCards}</div>;
};
