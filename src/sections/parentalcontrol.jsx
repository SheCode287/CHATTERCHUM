import chatterImg5 from "../assets/chatter img 5.svg";
import chatterImg6 from "../assets/chatter img 6.svg";
import chatterImg7 from "../assets/chatter img 7.svg";


function Parentalcontrol() {
  return (
    <>

    
<div>
       <h2 className='font-bold text-purple-900 text-6xl m-10'>Parental Controls</h2>
       <p className='text-2xl m-10 bg- '>Provide a secure and safe environmet for children by offering parental <br /> controls, allowing parents to manage and customize their child's app <br />experience. </p>
       </div>

       <div className='flex row mt-20 mb-10 flex-wrap items-center justify-around '>
            
                        
              
                         <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background: '#FDFDC5', height:'586px', width:'536px', borderRadius:'14px', margin:"4px", padding:'2px, 2px 4px 2px' }} >
                 <div><img style={{borderRadius:'24px'}}className="h-300 w-371 m-2 r-20" src={chatterImg5} alt="Choosing An activity" /></div>           
                <h3 className='font-bold text-gray-500 text-4xl m-2'> Customize App Experience</h3>
                <p className='text-2xl m-2 text-left'>Parents can easily customize their  <br /> child's app experience by setting <br /> age-appropriate content, time <br /> limits,  and access restrictions.</p>
                        </div>
            

            {/* second div */}
              
              
                         <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background: '#FDFDC5', height:'586px', width:'536px',borderRadius:'14px', margin:"4px", padding:'2px, 2px 4px 2px' }}>
                <div><img  style={{borderRadius:'24px'}}className="h-300 w-371 m-2 r-20"  src={chatterImg6} alt="Engaging With Others" /></div>  
                <h3 className='font-bold text-gray-500 text-4xl m-2'>Safe and Secure</h3>
                <p className='text-2xl m-2 text-left'> Our app ensures a safe and secure <br /> environment for children, wuth built- <br /> in filters and monitoring tools to <br /> protect them from inappropriate <br />content.</p>
                        </div>
            

            {/* third div */}
            
                        
              
                         <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background: '#FDFDC5', height:'586px', width:'536px', borderRadius:'14px', margin:"4px", padding:'2px, 2px 4px 2px' }} >
                 <div><img style={{borderRadius:'24px'}}className="h-300 w-371 m-2 r-20" src={chatterImg7} alt="Tracking Progress" /></div>  
                <h3 className='font-bold text-gray-500 text-4xl m-2'>Manage Usage</h3>
                <p className='text-2xl m-2 text-left'>Parents can track and manage their <br /> child's app usage, including screen time <br /> limits and activity reports, to  promote <br /> healthy digital habits.</p>
                        </div>
        

            
        


        </div>

      
    </>
  )
}

export default Parentalcontrol
