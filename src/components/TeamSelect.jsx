import { useContext, useState, useEffect } from 'react';
import { ContentContext } from '../App';

export const TeamSelect = () => {
    const { teamSelection, setTeamSelection } = useContext(ContentContext);

    return (
        <div>
            <button
                className={
                    teamSelection === 'cs' ? 'button selected' : 'button'
                }
                onClick={() => setTeamSelection('cs')}
            >
                Creatives
            </button>
            <button
                disabled
                className={
                    teamSelection === 'ts' ? 'button selected' : 'button'
                }
                onClick={() => setTeamSelection('ts')}
            >
                Technicals (Coming soon)
            </button>
        </div>
    );
};
