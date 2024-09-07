import { useState } from 'react'
import './App.css'
import Description from './components/Description/Desctiption'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification'

function App() {
 const state = {
	good: 0,
	neutral: 0,
	bad: 0
}
;

 const [values,setValues] = useState(()=>{
  return state
  
 }
)
const handleIncreaseValues = (feedbackType) =>{
   setValues({...values, [feedbackType]: values[feedbackType]+1})
}

const resetValues = ()=>{
  setValues(state)
}






 const totalFeedback = values.good + values.neutral + values.bad;
 const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  return (
    <>
      <div>
       <Description/>
       <Options handleIncreaseValues ={handleIncreaseValues}  resetValues = {resetValues} totalFeedback = {totalFeedback}/>
        {totalFeedback > 0? (
         <Feedback values = {values} positiveFeedback ={positiveFeedback} totalFeedback={totalFeedback}/>):(<Notification/>) 
        }
      </div>
    </>
  )
}

export default App
