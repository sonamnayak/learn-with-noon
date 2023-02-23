import React from 'react'
import Footer from '../scenes/Footer'
import Navbar from '../scenes/Navbar'

function Refund() {
    return (
        <div>

            <Navbar/>
            <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
                <h1 style={{ marginTop: "50px", fontSize: "34px" ,textAlign:'center'}}>Refund Policy</h1>

                <p>
                    Noon lives by ‘Students First’ ideology and believes in making a meaningful impact to the buyers
                    of our courses. <br />
                    On the same lines, we follow a ‘no-question-asked-refund’ policy, provided the refund request is
                    made to refunds@learnwithnoon.com within:
                    <br />                    
                    7 days from purchase for courses with duration over 1 month <br /> 
                    2 days from purchase for courses with duration less than 1 month <br />
                    Please note:
                    <br />
                    <br />
                    <ol>
                       <li>1. Eligible refunds requests will be processed within 7 working days</li>
                       <li>2. 100% refund will be processed to the original mode of payment</li>
                       <li>3. Requests for partial refunds will not be entertained beyond the stipulated time</li>
                       <li>4. Access to the course and any other privileges granted to the learner will be revoked once
                    the refund is processed, Refund requests identified as ‘fraud’ will not be entertained</li> 
                    </ol>
                    
                   
                    
                    
                </p>
            </div>

                <Footer/>


        </div>
    )
}

export default Refund