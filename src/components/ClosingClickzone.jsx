import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContentContext } from '../App';

export const ClosingClickzone = () => {
    const { teamSelection } = useContext(ContentContext);
    const navigate = useNavigate();

    return (
        <div
            id='closing-clickzone'
            onClick={() => navigate(teamSelection)}
        ></div>
    );
};
