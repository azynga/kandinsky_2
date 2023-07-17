import { Routes, Route, Navigate } from 'react-router-dom';
import contentHierarchy from '../../content-hierarchy.json';
import { Card } from '../components/Card';
import { ContentOverview } from '../components/ContentOverview';

export const MainRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ContentOverview />} />
            <Route path='/*' element={<Navigate replace to='/' />} />
            {Object.entries(contentHierarchy).map((card) => {
                return (
                    <Route
                        key={card[0]}
                        path={`${card[0]}/*`}
                        element={
                            <Card cardTitle={card[0]} cardContent={card[1]} />
                        }
                    />
                );
            })}
        </Routes>
    );
};
