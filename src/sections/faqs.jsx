import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddCircleIcon from '@mui/icons-material/AddCircle';







function Faqs() {
  return (
    <>
        <h1 id="faq" className="font-extrabold text-purple-900 text-6xl m-10 text-left" >FAQ</h1>


        {/* quizone */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5' , width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">What age group is the app suitable for?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">The app is designed for children between the ages of 3 and 10</h5>
        </AccordionDetails>
      </Accordion>


        {/* quiztwo */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">What subjects does the app cover?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">The app covers a wide range of subjects including language arts, science and more</h5>
        </AccordionDetails>
      </Accordion>

        {/* quizthree */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Is the app safe for children to use?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes. The app has been designed by safety in mind. It does not contain any inappropriate content and has parental controls to ensure a safe learning environment.</h5>
        </AccordionDetails>
      </Accordion>


        {/* quizfour */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Can multiple children use the app on the same device?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes. The App has supports multiple users profiles, allowing each child to have their own personalized learning experience.</h5>
        </AccordionDetails>
      </Accordion>
    
        {/* quizfive */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Is the app available on both iOS and Android?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes. The App is available for download on both iOS and Android devices.</h5>
        </AccordionDetails>
      </Accordion>


        {/* quizSIX */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Are there any in-app purchases?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">No, the app does not have any in-app purchases. Once you purchase the app, you will have access to all the features and content.</h5>
        </AccordionDetails>
      </Accordion>


        {/* quizseven */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Can the app be used offline?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes, the app  can be used offline. Once downloaded, the content is available for oofline use, making it convinient for learning on the go.</h5>
        </AccordionDetails>
      </Accordion>


        {/* quizeight */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Is there free trial available?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes, we offer free trial period for new users. You can try out the app and see if it meets your child's educational needs before making a purchase.</h5>
        </AccordionDetails>
      </Accordion>


        {/* quiznine */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Is there customer support available ?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes, we  have a dedicated customer support team available to assist you with any questions or issues you may have.</h5>
        </AccordionDetails>
      </Accordion>


        {/* quizten */}
      <Accordion defaultExpanded style={{width:'95%', marginLeft:'30px'}}>
        <AccordionSummary style={{backgroundColor:'#FDFDC5', width:'98%'}}expandIcon={<AddCircleIcon style={{color:'#590E87', fontSize:'44px'}} />}>
            <h4 className="font-extrabold text-purple-900 text-2xl">Can the app be used in classroom setting?</h4>
        </AccordionSummary>
        <AccordionDetails>
          <h5 className="text-xl">Yes, the app can be used in a classroom setting , it provides interactive learning activities that can be incorporated onto lessons plans.</h5>
        </AccordionDetails>
      </Accordion>
    



      
    </>
  )
}

export default Faqs
