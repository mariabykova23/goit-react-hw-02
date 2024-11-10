const Options = ({ handleFeedback, handleResetClick, totalFeedback }) => {
    return (
        <div>
            {totalFeedback > 0 ? (
                <div>
                    <button onClick={() => handleFeedback("good")}>Good</button>
                    <button onClick={() => handleFeedback("neutral")}>Neutral</button>
                    <button onClick={() => handleFeedback("bad")}>Bad</button>
                    <button onClick={handleResetClick}>Reset</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => handleFeedback("good")}>Good</button>
                    <button onClick={() => handleFeedback("neutral")}>Neutral</button>
                    <button onClick={() => handleFeedback("bad")}>Bad</button>
                </div>
            )}
        </div>
    );
};

export default Options


