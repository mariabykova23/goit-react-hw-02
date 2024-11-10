const Feedback = ({ good, neutral, bad, totalPercScore, }) => {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Positive:{totalPercScore}%</p>
        </div>
    );
};


export default Feedback

