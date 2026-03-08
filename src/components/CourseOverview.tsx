import React from 'react';
import './CourseOverview.css';

interface CourseOverviewProps {
    language: 'en' | 'ko';
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({ language }) => {
    return (
        <div className="OverviewContainer">
            <section className="OverviewSection">
                <h2>{language === 'ko' ? '1. 강의 소개' : '1. Introduction'}</h2>
                {language === 'ko' ? (
                    <>
                        <p>
                            “CAD/CAM을 이용한 최신 보철수복” 과정에 오신 것을 환영합니다. 본 수업은 치과 보철 및 다양한 치과 전문 분야의 대학원생들을 위해 특별히 설계되었습니다. 이 수업은 첨단 기술과 치의학 임상이 교차하여 빠르게 진화하는 디지털 치의학 분야 내에서, 임상에 직접 적용 가능한 최신 기술과 지식을 제공하는 것을 목표로 합니다.
                        </p>
                        <p>
                            이번 학기에 학생들은 최신 문헌을 비판적으로 고찰하고 그 결과를 동료 학생들 앞에서 발표하게 됩니다. 또한, 디지털 덴처(Digital Denture) 제작에 필요한 핸즈온(실습) 및 데모에도 임하게 될 것입니다. 본 웹페이지는 강의의 전체적인 구조를 요약하며, 여러분의 문헌 고찰(Literature Review)을 이끌어갈 10가지 핵심 카테고리를 소개합니다.
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            Welcome to the “Latest Prosthodontic Restorations using CAD/CAM” course, specifically designed for graduate students in prosthodontics and various other dental specialties. This class aims to provide the latest technologies and knowledge directly applicable to clinical practice within the rapidly evolving field of digital dentistry, where advanced technology and dental practice intersect.
                        </p>
                        <p>
                            This semester, students will be expected to critically review recent literature and present their findings to their peers. Additionally, you will participate in hands-on practices and demonstrations required for the fabrication of digital dentures. This webpage outlines the overall structure of the course and introduces the core categories that will guide your literature review.
                        </p>
                    </>
                )}
            </section>

            <section className="OverviewSection">
                <h2>{language === 'ko' ? '2. 강의 구조' : '2. Course Structure'}</h2>
                <ul className="OverviewList">
                    {language === 'ko' ? (
                        <>
                            <li>
                                <strong>강의 세션:</strong> 발표 세션 동안 각 학생은 최근 문헌에 대한 리뷰를 진행하고 발표를 합니다. 각 세션은 특정 핵심 카테고리에 중점을 둡니다.
                            </li>
                            <li>
                                <strong>학생 그룹:</strong> 수업 수강생들은 그룹으로 나뉘며, 각 그룹에는 10가지 카테고리 중 하나가 할당됩니다.
                            </li>
                            <li>
                                <strong>핸즈온 실습:</strong> 최첨단 디지털 기술을 활용하여 디지털 덴처를 제작하는 데 필수적인 디자인, 형성, 그리고 CAD/CAM 제조 공정을 다루는 실습 및 데모에 참여합니다.
                            </li>
                            <li>
                                <strong>평가:</strong> 학업 성취도는 문헌 고찰의 깊이, 발표의 질, 그리고 수업 중 토론에 적극적으로 참여하는 정도에 따라 종합적으로 평가됩니다.
                            </li>
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </ul>
            </section>
        </div>
    );
};
