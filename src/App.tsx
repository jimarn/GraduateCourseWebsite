
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <CategoryList />
            <footer className="App-footer">
                <p>© 2026 Latest Prosthodontic Restorations using CAD/CAM. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
