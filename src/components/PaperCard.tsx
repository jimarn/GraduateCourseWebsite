import React, { useState } from 'react';
import { Paper } from '../data/papers_en';
import './PaperCard.css';

interface PaperCardProps {
    paper: Paper;
    index: number;
}

export const PaperCard: React.FC<PaperCardProps> = ({ paper, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`PaperCard ${isExpanded ? 'is-expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
            <div className="PaperCard-header">
                <div className="PaperCard-index">{index + 1}</div>
                <h3 className="PaperCard-title">{paper.title}</h3>
                <button className="PaperCard-expand">
                    {isExpanded ? '−' : '+'}
                </button>
            </div>

            {isExpanded && (
                <div className="PaperCard-content">
                    <div className="PaperCard-citation">
                        <strong>Citation:</strong> {paper.citation}
                    </div>
                    <div className="PaperCard-summary">
                        <strong>Summary:</strong> {paper.summary}
                    </div>
                    {paper.url && (
                        <div className="PaperCard-link">
                            <a href={paper.url} target="_blank" rel="noopener noreferrer" className="PubmedBtn">
                                🔗 View on PubMed
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
