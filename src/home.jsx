import './App.css'
import chatterImg2 from './assets/chatter img 2.svg';
import Welcome from './sections/welcome';
import Nav from './sections/nav';
import Portfolio1 from './sections/portfolio1';
import Portfolio2 from './sections/portfolio2';
import Parentalcontrol from './sections/parentalcontrol';
import Rewardsystem from './sections/rewardsystem';
import Feedback from './sections/feedback';
import Subscriptions from './sections/subscriptions';
import Faqs from './sections/faqs';
import Contactus from './sections/contactus';


function Home() {
  return (
    <>
     <Nav />
      < Welcome />
      <Portfolio1 />
      <Portfolio2 />
      < Parentalcontrol />
      <Rewardsystem />
      < Feedback />
      <Subscriptions />
      < Faqs />
      < Contactus/>
       
    </>
  )
}

export default Home




