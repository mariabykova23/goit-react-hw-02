const Feedback = ({ good, neutral, bad, totalFeedback, totalPercScore }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            {totalFeedback > 0 && (<p>Positive:{totalPercScore}</p>)}
        </div>
    );
};


export default Feedback