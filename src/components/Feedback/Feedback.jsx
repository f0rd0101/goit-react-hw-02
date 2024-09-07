const Feedback = ({values,positiveFeedback,totalFeedback}) => {
  return (
    <div>
      <p>Good:{values.good}</p>
      <p>Neutral:{values.neutral}</p>
      <p>Bad:{values.bad}</p>
      <p>Total:{totalFeedback}</p>
      <p>Positive:{positiveFeedback}%</p>
    </div>
  )
}

export default Feedback
