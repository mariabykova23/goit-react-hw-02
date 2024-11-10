const Feedback = ({ good, neutral, bad, totalFeedback }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            {totalFeedback > 0 && (<p>Positive:{Math.round((good / totalFeedback) * 100)}</p>)}
            {totalFeedback === 0 && (<p>No feedback yet!</p>)}
        </div>
    );
};


export default Feedback