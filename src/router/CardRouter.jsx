import { Routes, Route, Navigate } from 'react-router-dom';
import { Category } from '../components/Category';
import descriptions from '../../descriptions.json';

export const CardRouter = ({ cardTitle, cardContent }) => {
    return (
        <Routes>
            <Route
                path='/'
                element={<h3>{descriptions.cards[cardTitle]}</h3>}
            />
            <Route
                path='/*'
                element={<Navigate replace to={`/${cardTitle}`} />}
            />
            {Object.entries(cardContent).map((category) => {
                return (
                    <Route
                        key={category[0]}
                        path={`${category[0]}/*`}
                        element={
                            <Category
                                categoryTitle={category[0]}
                                categoryContent={category[1]}
                            />
                        }
                    />
                );
            })}
        </Routes>
    );
};
