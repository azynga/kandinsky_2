import { useContext } from 'react';
import { ContentContext } from '../App';
import { TeamSelect } from './TeamSelect';
import { CommercialSelect } from './CommercialSelect';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/kandinsky-logo.png';

export const ContentSelect = () => {
    const { teamSelection } = useContext(ContentContext);
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate(teamSelection);
    };

    return (
        <div id='content-select'>
            <img src={logo} alt='logo' className='logo' />
            <div className='team-select'>
                <h2>Seeking advice from:</h2>
                <TeamSelect />
            </div>
            <div className='commercial-select'>
                <h2>Choose your own team:</h2>
                <CommercialSelect />
            </div>
        </div>
    );
};
