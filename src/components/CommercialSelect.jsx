import { useContext, useState, useEffect } from 'react';
import { ContentContext } from '../App';

export const CommercialSelect = () => {
    const { isCommercialView, setIsCommercialView, teamSelection } =
        useContext(ContentContext);

    return (
        <div className='commercial-select'>
            <button
                className={
                    isCommercialView === false ? 'button selected' : 'button'
                }
                onClick={() => setIsCommercialView(false)}
            >
                {teamSelection === 'cs' ? 'Creative' : 'Technical'}
            </button>
            <button
                className={
                    isCommercialView === true ? 'button selected' : 'button'
                }
                onClick={() => setIsCommercialView(true)}
            >
                Commercial
            </button>
        </div>
    );
};
