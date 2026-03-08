import { useState } from 'react';
import { Header } from './components/Header';
import { CategoryList } from './components/CategoryList';
import { CourseOverview } from './components/CourseOverview';
import './App.css';

export type Language = 'en' | 'ko';

function App() {
    const [activeMenu, setActiveMenu] = useState<'overview' | 'literature'>('overview');
    const [language, setLanguage] = useState<Language>('ko');

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} />

            <nav className="AppNav">
                <button
                    className={`AppNavButton ${activeMenu === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('overview')}
                >
                    {language === 'ko' ? '강의 개요' : 'Course Overview'}
                </button>
                <button
                    className={`AppNavButton ${activeMenu === 'literature' ? 'active' : ''}`}
                    onClick={() => setActiveMenu('literature')}
                >
                    {language === 'ko' ? '문헌 리뷰 (논문 목록)' : 'Literature Review'}
                </button>
            </nav>

            <main className="AppMain">
                {activeMenu === 'overview' ? <CourseOverview language={language} /> : <CategoryList language={language} />}
            </main>

            <footer className="App-footer">
                <p>© 2026 {language === 'ko' ? 'CAD/CAM을 이용한 최신 보철수복' : 'Latest Prosthodontic Restorations using CAD/CAM'}. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
