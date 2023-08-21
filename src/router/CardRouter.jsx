import { Routes, Route, Navigate } from 'react-router-dom';
import { Category } from '../components/Category';
import { getKebabCase } from '../helper/format-path';

export const CardRouter = ({ card }) => {
    const firstCategory = getKebabCase(card?.categories[0].categoryTitle);
    return (
        <Routes>
            <Route path='' element={<Navigate replace to={firstCategory} />} />
            <Route path='*' element={<Navigate replace to='' />} />
            <Route path=':category' element={<Category card={card} />} />
        </Routes>
    );
};
