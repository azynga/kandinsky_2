import { Routes, Route, Navigate } from 'react-router-dom';
import { Category } from './components/Category';

export const CardRouter = ({ cardTitle, cardContent }) => {
    return (
        <Routes>
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
