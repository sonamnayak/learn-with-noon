import Landing from './scenes/landing'
import Authentication from './scenes/authentication'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './scenes/Dashboard/Dashboard'
import Header from './scenes/Dashboard/Header'
import Discover from './scenes/Dashboard/Discover'
import NoonPlan from './scenes/Dashboard/Components/NoonPlan'
import Terms_conditions from './policies/Terms_conditions'
import Refund from './policies/Refund'
import Privacy from './policies/Privacy'
import Navbar from './scenes/Navbar'
import Footer from './scenes/Footer'

import logo from  './assets/noon academy.svg'
import WelcomeBack from './scenes/authentication/WelcomeBack'

function App() {
  
  return (
    <div className="App">
      <Routes>

          <Route path='/dashboard/mygroups/plan' element={<><NoonPlan/></>} />

          <Route path='/dashboard/discover' element={<><Header/><Discover/></>} />
          <Route path='/dashboard/planner' element={<><Header/><Discover/></>} />
          <Route path='/dashboard/mygroups' element={<><Header/><Discover/></>} />
          <Route path='/dashboard' element={<><Dashboard/></>}/>  
          <Route path='/dashboard' element={<><Dashboard/></>}/>
        <Route path='/login/student' element={<><WelcomeBack /></>} />
        <Route path='/login' element={<><Authentication /></>} />

        <Route path='*' element={<><Navbar/> <div style={{height:"80vh",display:'flex',justifyContent:"center",flexDirection:'column',alignItems:'center'}}>
          
           <img src={logo} alt="" style={{width:"300px"}}/>
          <h1 style={{fontSize:"48px",textAlign:"center",marginTop:"100px"}}>WE'RE DEVELOPING !!!  <br /> WE'LL BE BACK SOON !!! 🚀</h1> 
         
          </div>
          <Footer/></>}/>

        <Route path='/privacy' element={<><Privacy/></>} />
        <Route path='/refund' element={<><Refund/></>} />

        <Route path='/terms' element={<><Terms_conditions/></>} />
        <Route path='/' element={<><Landing /></>} />
      </Routes>
        
        
    </div>
  )
}

export default App