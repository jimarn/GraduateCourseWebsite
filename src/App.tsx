import { useState } from 'react';
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import { CourseOverview } from './components/CourseOverview';
import './App.css';

function App() {
    const [activeMenu, setActiveMenu] = useState<'overview' | 'literature'>('overview');

    return (
        <div className="App">
            <Header />

            <nav className="AppNav">
                <button
                    className={`AppNavButton ${activeMenu === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('overview')}
                >
                    Course Overview
                </button>
                <button
                    className={`AppNavButton ${activeMenu === 'literature' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('literature')}
                >
                    Literature Review
                </button>
            </nav>

            <main className="AppMain">
                {activeMenu === 'overview' ? <CourseOverview /> : <CategoryList />}
            </main>

            <footer className="App-footer">
                <p>© 2026 Latest Prosthodontic Restorations using CAD/CAM. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
