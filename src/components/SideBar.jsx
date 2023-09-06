import { Link } from 'react-router-dom';
import { CommercialSelect } from './CommercialSelect';
import logo from '../assets/icons/kandinsky-logo.png';
import teamIcon from '../assets/icons/team-icon.png';

export const SideBar = () => {
    return (
        <div id='sidebar'>
            <Link to='/'>
                <img src={logo} alt='logo' />
                <p>Home</p>
            </Link>
            <div id='sidebar-select'>
                <img src={teamIcon} alt='team' />
                <CommercialSelect />
            </div>
        </div>
    );
};
