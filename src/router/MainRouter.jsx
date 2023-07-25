import { Routes, Route, Navigate, Link } from 'react-router-dom';
import contentHierarchy from '../../content-hierarchy-new.json';
import { Card } from '../components/Card';
import { ContentOverview } from '../components/ContentOverview';
import { getUrlFormat } from '../helper/format-path';

const getCardRoutes = (content) => {
    const routes = Object.entries(content).map((card) => {
        return (
            <Route
                key={card[0]}
                path={`${getUrlFormat(card[0])}/*`}
                element={<Card cardTitle={card[0]} cardContent={card[1]} />}
            />
        );
    });
    return routes;
};

const csRoutes = getCardRoutes(contentHierarchy.CS);
const tsRoutes = getCardRoutes(contentHierarchy.TS);

export const MainRouter = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <h1>Choose your team</h1>
                        <h2>
                            <Link to='ts'>TS</Link>
                        </h2>
                        <h2>
                            <Link to='cs'>CS</Link>
                        </h2>
                    </>
                }
            />
            <Route path='/*' element={<Navigate replace to='/' />} />
            <Route path='/cs/*'>
                <Route path='' element={<ContentOverview team='CS' />} />
                {csRoutes}
            </Route>
            <Route path='/ts/*'>
                <Route path='' element={<ContentOverview team='TS' />} />
                {tsRoutes}
            </Route>
        </Routes>
    );
};
