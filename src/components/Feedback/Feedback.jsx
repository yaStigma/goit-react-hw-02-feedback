import { Component } from "react";
import styles from "./feedback.module.css";
import { render } from "@testing-library/react";

class Feedback extends Component {
    static feedbackOptions = ["Good", "Neutral", "Bad"]
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    countTotalFeedback() {
    const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
            }
    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const positive = this.state.good;
        return Number(((positive / total) * 100).toFixed(2));
    }
    onLeaveFeedback= (keyName) => {
        this.setState(prevState => {

            return {
                [keyName]: prevState[keyName] + 1
            }
        })
    }

    render() {
 const { good, neutral, bad } = this.state;
        const buttonElement = Feedback.feedbackOptions.map(name => <button onClick={(()=>this.onLeaveFeedback(name))} key={name}>{name}</button>);
       
        const total = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (

        <div className={styles.wrapper}>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>Please leave feedback</h2>
            {buttonElement}
            </div>  
            <div className={styles.block}>
                             <h2 className={styles.blockTitle}>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positiveFeedbackPercentage}%</p>
            </div>
</div>
    )
    }
    }
export default Feedback