import { useContext, useState, useEffect } from 'react';
import { ContentContext } from '../App';

export const TeamSelect = () => {
    const { teamSelection, setTeamSelection } = useContext(ContentContext);

    return (
        <div className='team-select'>
            <button
                className={
                    teamSelection === 'cs' ? 'button selected' : 'button'
                }
                onClick={() => setTeamSelection('cs')}
            >
                Creative
            </button>
            <button
                className={
                    teamSelection === 'ts' ? 'button selected' : 'button'
                }
                onClick={() => setTeamSelection('ts')}
            >
                Technical
            </button>
        </div>
    );
};
