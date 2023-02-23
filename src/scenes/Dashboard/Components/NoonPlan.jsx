import React from 'react'
import './Components.css'

function NoonPlan() {
  return (
    <div className='noon-plan'>
            <header>
                <h1>Exams 2023 Preparatory Sessions</h1>
                <strong>by Teacher Name</strong>
            </header>

            <div className="plan-main">
                <section>

                        <div className="noon-teacher"></div>
                        <div className="noon-plan-details"></div>

                </section>
                <section>
                    <div className="pay">

                    </div>
                </section>
            </div>

    </div>
  )
}

export default NoonPlan