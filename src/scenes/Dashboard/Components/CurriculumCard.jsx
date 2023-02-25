import React from 'react'

const CurriculumCard = (props) => {
    return (
        <div className="curriculum-card">
            <div className="icon">
                <i className="fa-solid fa-circle-check"></i>
                <div className="progress-line"></div>
            </div>
            <div className="chapter-status">
                <div className="chapter">
                    <div className="head">{props.chapHead}</div>
                    <div className="name">{props.chapName}</div>
                </div>
                <div className="status">
                    <span>Completed</span>
                </div>
            </div>
        </div>
    )
}

export default CurriculumCard