const Options = ({ handleFeedback, handleResetClick, totalFeedback }) => {
    return (
        <div>
            <button onClick={() => handleFeedback("good")}>Good</button>
            <button onClick={() => handleFeedback("neutral")}>Neutral</button>
            <button onClick={() => handleFeedback("bad")}>Bad</button>
            {totalFeedback > 0 && (<button onClick={handleResetClick}>Reset</button>)}
        </div>
    );
};

export default Options