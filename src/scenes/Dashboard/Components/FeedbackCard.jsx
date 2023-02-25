import React from 'react'

const FeedbackCard = (props) => {
    return (
        <div className="feedback-card">
            <img src="" alt="icon" />
            <p className="feedback-text">{props.feedback}</p>
            <p className="student-name">{props.studentName}</p>
        </div>
    )
}

export default FeedbackCard