import '../index.css';
import css from './App.module.css';
import { Notification } from './notification/Notification';
import { Section } from './section/Section';
import { FeedbackOptions } from 'components/feedbackOptions/FeedbackOptions.jsx';
import React, { useState } from 'react';
import Statistics from 'components/statistics/Statistics.jsx';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = e => {
    console.log(e.target.name);
    const { name } = e.target;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositivePercentage = () => {
    if (good + bad + neutral > 0) {
      return `${Math.round((good / (good + bad + neutral)) * 100)}%`;
    }
    return 'Please click on buttons';
  };
  const feedbacks = { good, neutral, bad };
  const isFeedback = Object.values(feedbacks).find(value => value > 0);
  const options = Object.keys(feedbacks);
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onButtonClick} />
      </Section>
      {isFeedback ? (
        <Section title="Statisticks">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositivePercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onButtonClick = e => {
//   const { name } = e.target;
//   this.setState(prevState => {
//     return {
//       [name]: prevState[name] + 1,
//     };
//   });
//   console.log('click');
// };
// countTotalFeedback = () => {
//   return this.state.good + this.state.bad + this.state.neutral;
// };
// countPositivePercentage = () => {
//   if (this.state.good + this.state.bad + this.state.neutral > 0) {
//     return `${Math.round(
//       (this.state.good /
//         (this.state.good + this.state.bad + this.state.neutral)) *
//         100
//     )}%`;
//   }
//   return 'Please click on buttons';
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const isFeedback = Object.values(this.state).find(value => value > 0);
//     const options = ['good', 'neutral', 'bad'];

// return (
//   <div className={css.container}>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={options}
//         onLeaveFeedback={this.onButtonClick}
//       />
//     </Section>
//     {isFeedback ? (
//       <Section title="Statisticks">
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositivePercentage()}
//         />
//       </Section>
//     ) : (
//       <Notification message="There is no feedback" />
//     )}
//   </div>
// );
//   }
// }
