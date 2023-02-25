import React from 'react'
import FeedbackCard from './FeedbackCard'
import './Components.css'
import CurriculumCard from './CurriculumCard'
import { curriculum, studentFeedback } from '../data'
import Sidebar from './Sidebar'

function NoonPlan() {
  return (
    <div className='noon-plan'>
      <header>
        <div className="back-icon">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="head">
          <div className="teacher-detail">
            <img src="" alt="avatar" />
            <div className="subject-badge">
              <img src="" alt="icon" />
              <div className="subject">Mathematics</div>
            </div>
            <div className="year">1st Year</div>
          </div>
          <h1>Exams 2023 Preparatory Sessions</h1>
          <strong>by Muhammad Asad</strong>
        </div>
      </header>

      <div className="plan-main">
        <div className="main">

          <div className="noon-teacher">
            <h1>About Teacher</h1>
            <div className="profile">
              <div className="profile-card">
                <img src="" alt="avatar" />
                <div>
                  <div className="name">Muhammad Asad</div>
                  <div className="students">Teaching 34+ students</div>
                </div>
              </div>
              <div className="desc">Lecturer at Department of Mathematics Fedral Urdu University, Gulshan, Karachi. Masters in applied Mathematics from NED University of Engineering and Technology.</div>
            </div>

            <div className="testimonial">Testimonials from students(5)</div>

            <div className="feedback">
              {studentFeedback.map(item => (
                <FeedbackCard feedback={item.feedback} studentName={item.studentName} />
              ))}
            </div>
          </div>

          <div className="noon-teacher noon-plan-details">
            <h1>About Group</h1>
            <div className="duration">
              <p>Group Duration</p>
              <div>6 months, Started from January 03!</div>
            </div>

            <div className="duration">
              <p className="session">Session Timings(5)</p>
              <div className="timing">
                <div className="timing-card">
                  <div>Tuesday</div>
                  <div className="time">07:00 PM-09:00 PM</div>
                </div>
                <div className="timing-card">
                  <div>Wednesday</div>
                  <div className="time">07:00 PM-09:00 PM</div>
                </div>
                <div className="timing-card">
                  <div>Thursday</div>
                  <div className="time">07:00 PM-09:00 PM</div>
                </div>
                <div className="timing-card">
                  <div>Friday</div>
                  <div className="time">07:00 PM-09:00 PM</div>
                </div>
                <div className="timing-card">
                  <div>Saturday</div>
                  <div className="time">07:00 PM-09:00 PM</div>
                </div>
              </div>
            </div>

            <div className="curriculum-head">
              <h1>Curriculum Progress</h1>
              <div>5/12 chapters complete</div>
            </div>

            <div className="curriculum-progress">

              {
                curriculum.map((item) => (
                  <CurriculumCard chapHead={item.chapHead} chapName={item.chapName} />
                ))
              }

              <div className="curriculum-card">
                <div className="icon">
                  {/* <i className="fa-solid fa-circle-check"></i> */}
                  <div className="ongoing-icon"></div>
                  <div className="progress-line ongoing-prog-line"></div>
                </div>
                <div className="chapter-status">
                  <div className="chapter">
                    <div className="head">Chapter 6</div>
                    <div className="name">Statistics</div>
                    <ul className="subtopics">
                      <div>
                        <input type="radio" name="sub" id="" /> Subtopic 1
                      </div>
                      <div>
                        <input type="radio" name="sub" id="" /> Subtopic 2
                      </div>
                      <div>
                        <input type="radio" name="sub" id="" /> Subtopic 3
                      </div>
                      <div>
                        <input type="radio" name="sub" id="" /> Subtopic 4
                      </div>
                    </ul>
                  </div>
                  <div className="status">
                    <span className="ongoing">Ongoing</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="curriculum-button">Buy a Group - 2000.00 Rs</button>
            <p className="curriculum-tax">Monthly <span>| Tax included</span></p>

          </div>

        </div>

        <Sidebar />
      </div>

    </div>
  )
}

export default NoonPlan