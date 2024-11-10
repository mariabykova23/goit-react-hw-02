const Options = (({ handleFeedback, handleResetClick }) => {
    return (
        <div>
            <button onClick={() => handleFeedback("good")}>Good</button>
            <button onClick={() => handleFeedback("neutral")}>Neutral</button>
            <button onClick={() => handleFeedback("bad")}>Bad</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
})

export default Options


