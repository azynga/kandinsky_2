import { useContext } from 'react';
import { ContentContext } from '../App';
import { TeamSelect } from './TeamSelect';
import { CommercialSelect } from './CommercialSelect';
import { useNavigate } from 'react-router-dom';

export const ContentSelect = () => {
    const { teamSelection } = useContext(ContentContext);
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate(teamSelection);
    };

    return (
        <div id='content-select'>
            <div>
                <h2>Seeking advice from:</h2>
                <TeamSelect />
            </div>
            <div>
                <h2>Choose your own team:</h2>
                <CommercialSelect />
            </div>
            <button className='button confirm' onClick={handleConfirm}>
                Confirm
            </button>
        </div>
    );
};
