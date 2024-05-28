// import './App.css'
// import chatterImg2 from './assets/chatter img 2.svg';
// import Welcome from './sections/welcome';
// import Nav from './sections/nav';
// import Portfolio1 from './sections/portfolio1';
// import Portfolio2 from './sections/portfolio2';
// import Parentalcontrol from './sections/parentalcontrol';
// import Rewardsystem from './sections/rewardsystem';
// import Feedback from './sections/feedback';
// import Subscriptions from './sections/subscriptions';
// import Faqs from './sections/faqs';
// import Contactus from './sections/contactus';
import { Outlet } from "react-router-dom";

function App() {
  

  return (
    <>

   <Outlet />
      {/* <Nav />
      < Welcome />
      <Portfolio1 />
      <Portfolio2 />
      < Parentalcontrol />
      <Rewardsystem />
      < Feedback />
      <Subscriptions />
      < Faqs />
      < Contactus/> */}
      
       
      {/* <h1>Hello world</h1>
      <div>
      <img src={chatterImg2} alt="Chatter Image 2" />
    </div>

      
      <p className="read-the-docs">
        Hello world!
      </p> */}
    </>
  )
}

export default App
