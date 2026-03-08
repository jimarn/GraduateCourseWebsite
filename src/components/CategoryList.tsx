import React, { useState } from 'react';
import { courseData as courseDataEn } from '../data/papers_en';
import { courseData as courseDataKo } from '../data/papers_ko';
import { PaperCard } from './PaperCard';
import './CategoryList.css';

interface CategoryListProps {
    language: 'en' | 'ko';
}

export const CategoryList: React.FC<CategoryListProps> = ({ language }) => {
    const courseData = language === 'en' ? courseDataEn : courseDataKo;
    const [activeTab, setActiveTab] = useState(courseData[0].id);

    const activeCategory = courseData.find(c => c.id === activeTab);

    return (
        <div className="CategoryContainer">
            <nav className="CategoryNav">
                {courseData.map((category) => (
                    <button
                        key={category.id}
                        className={`CategoryTab ${activeTab === category.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(category.id)}
                    >
                        <span className="CategoryTab-number">Ch.{category.id}</span>
                        <span className="CategoryTab-text">{category.title.split(' (')[0]}</span>
                    </button>
                ))}
            </nav>

            <main className="CategoryContent">
                {activeCategory && (
                    <div className="CategoryContent-inner" key={activeCategory.id}>
                        <div className="CategoryContent-header">
                            <h2>{activeCategory.title}</h2>
                            <div className="CategoryContent-badge">{activeCategory.papers.length} {language === 'ko' ? '논문 리스트' : 'Papers'}</div>
                        </div>

                        <div className="PaperList">
                            {activeCategory.papers.map((paper, idx) => (
                                <PaperCard key={idx} index={idx} paper={paper} />
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
