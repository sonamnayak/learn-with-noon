import React from 'react'
import blue from '../../assets/image 1.png'
import pink from '../../assets/image 3.png'
import yellow from '../../assets/image 2.png'

const Section3 = () => {
    return (
        <div className="section-3">
            <div className="section-3-card">
                <img src={blue} alt="blueImg" />
                <div>
                    <h3>Trust <span>(Value No. 1)</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat posuere tincidunt viverra fusce quis. Nisl nec velit cursus augue libero tortor, semper lacus in. Sed cursus enim, nec vivamus lobortis.</p>
                </div>
            </div>
            <div className="line-container">
                <div className="line"></div>
            </div>
            <div className="section-3-card">
                <img src={pink} alt="pinkImg" />
                <div>
                    <h3>Love what we do <span>(Value No. 2)</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat posuere tincidunt viverra fusce quis. Nisl nec velit cursus augue libero tortor, semper lacus in. Sed cursus enim, nec vivamus lobortis.</p>
                </div>
            </div>
            <div className="line-container">
                <div className="line"></div>
            </div>
            <div className="section-3-card">
                <img src={yellow} alt="yellowImg" />
                <div>
                    <h3>Love what we do <span>(Value No. 2)</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat posuere tincidunt viverra fusce quis. Nisl nec velit cursus augue libero tortor, semper lacus in. Sed cursus enim, nec vivamus lobortis.</p>
                </div>
            </div>
        </div>
    )
}

export default Section3