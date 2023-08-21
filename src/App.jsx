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
    const [contentHierarchy, setContentHierarchy] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [teamSelection, setTeamSelection] = useState(
        useLocation().pathname.split('/')[1] || 'cs'
    );
    const [isCommercialView, setIsCommercialView] = useState(false);
    const [searchInstance, setSearchInstance] = useState(null);
    const notOnRoot = useLocation().pathname !== '/';
    const currentPath = useLocation().pathname;
    console.log(currentPath);
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
                        ? 'homepage ' + teamSelection
                        : teamSelection
                }
            >
                <main>
                    {notOnRoot && <Search />}
                    {notOnRoot && <ClosingClickzone />}
                    {errorMessage ? (
                        <p>{errorMessage}</p>
                    ) : !contentHierarchy ? (
                        <p>'Loading...'</p>
                    ) : (
                        <MainRouter />
                    )}
                </main>
                {notOnRoot && <SideBar />}
                {notOnRoot && (
                    <footer>
                        <p>
                            Please let us know here what we’re missing. Thank
                            you!
                        </p>
                    </footer>
                )}
            </div>
        </ContentContext.Provider>
    );
}

export default App;
