import { Routes, Route, Navigate } from 'react-router-dom';
import { Category } from '../components/Category';
import { getUrlFormat } from '../helper/format-path';

export const CardRouter = ({ cardTitle, cardContent }) => {
    return (
        <Routes>
            <Route path='' element={<h3>{cardContent.cardDescription}</h3>} />
            <Route path='*' element={<Navigate replace to='' />} />
            {Object.entries(cardContent.categories).map((category) => {
                return (
                    <Route
                        key={category[0]}
                        path={`${getUrlFormat(category[0])}/*`}
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
