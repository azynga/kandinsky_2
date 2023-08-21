import { useContext } from 'react';
import { ContentContext } from '../App';
import { CardMinimized } from './CardMinimized';

export const ContentOverview = () => {
    const { selectedContent } = useContext(ContentContext);
    const miniCards = selectedContent?.map((card) => {
        return <CardMinimized key={card.cardTitle} card={card} />;
    });
    return (
        <div className='content-overview'>
            {miniCards}
            {miniCards}
            {miniCards}
            {miniCards}
            {miniCards}
            {miniCards}
        </div>
    );
};
