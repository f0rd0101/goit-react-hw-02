const Options = ({handleIncreaseValues,totalFeedback,resetValues}) => {
  return (
    <div>
      <button onClick ={()=>handleIncreaseValues("good")}>Good</button>
      <button onClick ={()=>handleIncreaseValues("neutral")}>Neutral</button>
      <button onClick ={()=>handleIncreaseValues("bad")}>Bad</button>
       {totalFeedback > 0 && <button onClick ={resetValues}>Reset</button>}

    </div>
  )
}

export default Options
