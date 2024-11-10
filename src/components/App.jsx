import './App.css'
import Description from './Description'
import Options from './Options'
import Feedback from './Feedback'
import Notification from './Notification'
import { useState, useEffect } from 'react'



function App() {
  const [good, setGood] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-good");
    if (savedFeedback !== null) {
      return Number(savedFeedback);
    }
    return 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-neutral");
    if (savedFeedback !== null) {
      return Number(savedFeedback);
    }
    return 0;
  });

  const [bad, setBad] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-bad");
    if (savedFeedback !== null) {
      return Number(savedFeedback);
    }
    return 0;
  });

  const totalFeedback = good + neutral + bad;
  const totalPercScore = Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-good", good);
    window.localStorage.setItem("saved-neutral", neutral);
    window.localStorage.setItem("saved-bad", bad);
    window.localStorage.setItem("saved-total", totalPercScore);
  }, [good, neutral, bad, totalPercScore]);

  const handleFeedback = (type) => {
    if (type === "good") {
      setGood(good + 1);
    } else if (type === "neutral") {
      setNeutral(neutral + 1);
    } else if (type === "bad") {
      setBad(bad + 1);
    }
  };

  const handleResetClick = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <>
      <Description />
      <Options
        handleFeedback={handleFeedback}
        handleResetClick={handleResetClick}
        totalFeedback={totalFeedback}
      />
      <Feedback
        good={good}
        neutral={neutral}
        bad={bad}
        totalFeedback={totalFeedback}
        totalPercScore={totalPercScore}
      />
      {totalFeedback === 0 && <Notification message="No feedback yet!" />}
    </>
  )
}

export default App
