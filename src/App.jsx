import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import { Search } from './components/Search';
import { fetchData } from './helper/fetch-data';
import './App.css';

function App() {
    const [contentHierarchy, setContentHierarchy] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setContentHierarchy(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <header>
                <h1>
                    <Link to='/'>Kandinsky 2.0</Link>
                </h1>
                {useLocation().pathname !== '/' ? <Search /> : ''}
            </header>
            <main>
                <MainRouter />
            </main>
        </>
    );
}

export default App;
