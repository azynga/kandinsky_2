import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CardMaximized } from '../components/CardMaximized';
import { ContentOverview } from '../components/ContentOverview';
import { ContentSelect } from '../components/ContentSelect';

export const MainRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<ContentSelect />} />
            <Route path='/*' element={<Navigate replace to='/' />} />
            <Route path='/cs/*'>
                <Route path='' element={<ContentOverview />} />
                <Route path=':card/*' element={<CardMaximized />} />
            </Route>
            <Route path='/ts/*'>
                <Route path='' element={<ContentOverview />} />
                <Route path=':card/*' element={<CardMaximized />} />
            </Route>
        </Routes>
    );
};
