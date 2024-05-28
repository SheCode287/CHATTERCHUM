import chatterImg2 from "../assets/chatter img 2.svg";
import chatterImg3 from "../assets/chatter img 3.svg";
import chatterImg4 from "../assets/chatter img 4.svg";

function Portfolio2() {
  return (
    <>
      
      <div>
       <h2 className='font-bold text-purple-900 text-6xl m-10'>Progress Tracking</h2>
       <p className='text-2xl m-10 bg- '> Allows parents and tutors to track children's progress and <br /> perfomance in the app and website's dashboard, providing insights <br /> into their learning journey.</p>
       </div>

       <div className='flex row mt-20 mb-10 flex-wrap items-center justify-around '>
            
                        
              
                         <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background: '#FDFDC5', height:'586px', width:'536px', borderRadius:'14px', margin:"4px", padding:'2px, 2px 4px 2px' }} >
                 <div><img style={{borderRadius:'24px'}}className="h-300 w-371 m-2 r-20" src={chatterImg2} alt="Choosing An activity" /></div>           
                <h3 className='font-bold text-gray-500 text-4xl m-2'>Step 1: Choose an Activity</h3>
                <p className='text-2xl m-2'>Browse through a collection of <br /> educational activitities and select the <br /> one that interest your child the most.</p>
                        </div>
            

            {/* second div */}
              
              
                         <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background: '#FDFDC5', height:'586px', width:'536px',borderRadius:'14px', margin:"4px", padding:'2px, 2px 4px 2px' }}>
                <div><img  style={{borderRadius:'24px'}}className="h-300 w-371 m-2 r-20"  src={chatterImg3} alt="Engaging With Others" /></div>  
                <h3 className='font-bold text-gray-500 text-4xl m-2'>Step 2: Engage and Learn</h3>
                <p className='text-2xl m-2'>Let your child dive into the activity <br /> and start learning in a fun and <br /> interactive way.</p>
                        </div>
            

            {/* third div */}
            
                        
              
                         <div style={{ display:'flex', flexDirection:'column', alignItems:'center', background: '#FDFDC5', height:'586px', width:'536px', borderRadius:'14px', margin:"4px", padding:'2px, 2px 4px 2px' }} >
                 <div><img style={{borderRadius:'24px'}}className="h-300 w-371 m-2 r-20" src={chatterImg4} alt="Tracking Progress" /></div>  
                <h3 className='font-bold text-gray-500 text-4xl m-2'>Step 3: Track Progress</h3>
                <p className='text-2xl m-2'> Monitor your child's progress and <br /> how they are improving their <br />knowledge and skills over time. </p>
                        </div>
        

            
        


        </div>

    </>
  )
}

export default Portfolio2
