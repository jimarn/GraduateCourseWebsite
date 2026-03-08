import React from 'react';
import './CourseOverview.css';

export const CourseOverview: React.FC = () => {
    return (
        <div className="OverviewContainer">
            <section className="OverviewSection">
                <h2>1. Introduction</h2>
                <p>
                    Welcome to the “Latest Prosthodontic Restorations using CAD/CAM” course, specifically designed for graduate students in prosthodontics and various other dental specialties. This class aims to provide the latest technologies and knowledge directly applicable to clinical practice within the rapidly evolving field of digital dentistry, where advanced technology and dental practice intersect.
                </p>
                <p>
                    This semester, students will be expected to critically review recent literature and present their findings to their peers. Additionally, you will participate in hands-on practices and demonstrations required for the fabrication of digital dentures. This webpage outlines the overall structure of the course and introduces the core categories that will guide your literature review.
                </p>
            </section>

            <section className="OverviewSection">
                <h2>2. Course Structure</h2>
                <ul className="OverviewList">
                    <li>
                        <strong>Class Sessions:</strong> During the presentation sessions, each student will conduct a review of recent literature and deliver a presentation. Each session will focus on a specific core category.
                    </li>
                    <li>
                        <strong>Student Groups:</strong> The class will be divided into groups, with each group assigned to one of the ten categories.
                    </li>
                    <li>
                        <strong>Hands-on Practice:</strong> You will engage in practical exercises and demonstrations covering the design, preparation, and CAD/CAM manufacturing processes necessary to fabricate digital dentures using state-of-the-art digital technologies.
                    </li>
                    <li>
                        <strong>Evaluation:</strong> Your academic achievement will be evaluated based on the depth of your literature review, the quality of your presentation, and your active participation in class discussions.
                    </li>
                </ul>
            </section>
        </div>
    );
};
