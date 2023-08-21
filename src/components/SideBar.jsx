import { Link } from 'react-router-dom';
import { CommercialSelect } from './CommercialSelect';

export const SideBar = () => {
    return (
        <div id='sidebar'>
            <Link to='/'>
                <div id='logo'>
                    <h1>K</h1>
                    <p>Home</p>
                </div>
            </Link>
            <div id='sidebar-select'>
                <span>Team</span>
                <CommercialSelect />
            </div>
        </div>
    );
};
