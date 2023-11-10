import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ContentContext } from '../App';

export const CommercialSelect = () => {
    const { isCommercialView, setIsCommercialView, teamSelection } =
        useContext(ContentContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (commercialViewSelection) => {
        setIsCommercialView(commercialViewSelection);
        setTimeout(() => {
            if (location.pathname === '/') {
                navigate(`/${teamSelection}`);
            }
        }, 200);
    };

    return (
        <div>
            <button
                className={
                    isCommercialView === true ? 'button selected' : 'button'
                }
                onClick={() => handleClick(true)}
            >
                Commercial
            </button>
            <button
                className={
                    isCommercialView === false ? 'button selected' : 'button'
                }
                onClick={() => handleClick(false)}
            >
                {teamSelection === 'cs' ? 'Creative' : 'Technical'}
            </button>
        </div>
    );
};
