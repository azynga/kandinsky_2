import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import { Search } from './components/Search';
import { SideBar } from './components/SideBar';
import { ClosingClickzone } from './components/ClosingClickzone';
import { loadData } from './helper/load-data';
import { getContentList } from './helper/get-content-list';
import { createSearchInstance } from './helper/search';
import './App.scss';

export const ContentContext = createContext();

function App() {
    const currentPath = useLocation().pathname;
    const onRoot = currentPath === '/';

    const [contentHierarchy, setContentHierarchy] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [teamSelection, setTeamSelection] = useState(
        currentPath.split('/')[1] || 'cs'
    );
    const [isCommercialView, setIsCommercialView] = useState(null);
    const [searchInstance, setSearchInstance] = useState(null);
    const [background, setBackground] = useState('plain');

    useEffect(() => {
        loadData(setContentHierarchy, setErrorMessage);
    }, []);

    useEffect(() => {
        if (
            !contentHierarchy ||
            (teamSelection !== 'cs' && teamSelection !== 'ts')
        ) {
            return;
        }

        const contentSelection = contentHierarchy[teamSelection].filter(
            (card) => !isCommercialView || card.forCommercials
        );
        const contentList = getContentList(contentSelection);

        setSearchInstance(createSearchInstance(contentList));
        setSelectedContent(contentSelection);
    }, [contentHierarchy, teamSelection, isCommercialView]);

    return (
        <ContentContext.Provider
            value={{
                selectedContent,
                teamSelection,
                setTeamSelection,
                isCommercialView,
                setIsCommercialView,
                searchInstance,
            }}
        >
            <div
                id='main-container'
                className={
                    useLocation().pathname === '/'
                        ? 'homepage ' + teamSelection + ' ' + background
                        : teamSelection + ' ' + background
                }
            >
                <main>
                    {!onRoot && <Search />}
                    {!onRoot && <ClosingClickzone />}
                    {errorMessage ? (
                        <p>{errorMessage}</p>
                    ) : !contentHierarchy ? (
                        <p>Loading...</p>
                    ) : (
                        <MainRouter />
                    )}
                </main>
                {!onRoot && <SideBar />}
                {!onRoot && (
                    <footer>
                        <p>
                            Please let us know here what we’re missing. Thank
                            you!
                        </p>
                    </footer>
                )}
                <button
                    className='switch-background'
                    onClick={() =>
                        setBackground(
                            background === 'plain' ? 'image' : 'plain'
                        )
                    }
                >
                    Switch background
                </button>
            </div>
        </ContentContext.Provider>
    );
}

export default App;
