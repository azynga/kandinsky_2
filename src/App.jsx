import { Link } from 'react-router-dom';
import { MainRouter } from './router/MainRouter';
import { Search } from './components/Search';
import './App.css';

function App() {
    return (
        <>
            <header>
                <h1>
                    <Link to='/'>Kandinsky 2.0</Link>
                </h1>
                <Search />
            </header>
            <main>
                <MainRouter />
            </main>
        </>
    );
}

export default App;
