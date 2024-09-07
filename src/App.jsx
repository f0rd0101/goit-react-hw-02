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

 const [feedback,setFeedback] = useState(()=>{
  return state
  
 }
)
const handleIncreaseValues = (feedbackType) =>{
  
  setFeedback({...feedback, [feedbackType]: feedback[feedbackType]+1})
  // 1) розпиленням зберігаємо весь об'єкт state(щоб було good,neutral,bad)
  // 2) динамічно визначаємо яке поле потрібно збільшити(або good,або neutral, або bad)
  // 3) динамічно перезаписуємо value поля в state

}


const resetValues = ()=>{
  setFeedback(state)
}


// console.log(values);




 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
 const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <div>
       <Description/>
       <Options handleIncreaseValues ={handleIncreaseValues}  resetValues = {resetValues} totalFeedback = {totalFeedback}/>
        {totalFeedback > 0? (
         <Feedback feedback = {feedback} positiveFeedback ={positiveFeedback} totalFeedback={totalFeedback}/>):(<Notification/>) 
        }
      </div>
    </>
  )
}

export default App
