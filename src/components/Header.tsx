import React from 'react';
import './Header.css';

interface HeaderProps {
    language: 'en' | 'ko';
    setLanguage: (lang: 'en' | 'ko') => void;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    return (
        <header className="Header">
            <div>
                <h1 className="Header-title">
                    {language === 'ko' ? 'CAD/CAM을 이용한 최신 보철수복' : 'Latest Prosthodontic Restorations using CAD/CAM'}
                </h1>
                <p className="Header-subtitle">
                    {language === 'ko' ? '대학원 수업 논문 열람 시스템' : 'Graduate Course Reading Materials'}
                </p>
            </div>
            <div className="LanguageToggle">
                <button
                    className={language === 'ko' ? 'active' : ''}
                    onClick={() => setLanguage('ko')}
                >
                    한국어
                </button>
                <button
                    className={language === 'en' ? 'active' : ''}
                    onClick={() => setLanguage('en')}
                >
                    English
                </button>
            </div>
        </header>
    );
};
