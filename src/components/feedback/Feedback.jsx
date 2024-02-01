// import { Component } from 'react';

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   HandleClickGood = () =>
//     this.setState(prevState => ({ good: prevState.good + 1 }));

//   HandleClickNeutral = () =>
//     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

//   HandleClickBad = () =>
//     this.setState(prevState => ({ bad: prevState.bad + 1 }));

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(
//       (this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//         100
//     );
//   };

//   render() {
//     return (
//       <div>
//         <h1>Please lave feedback</h1>
//         <button type="button" onClick={this.HandleClickGood}>
//           Good
//         </button>
//         <button type="button" onClick={this.HandleClickNeutral}>
//           Neutral
//         </button>
//         <button type="button" onClick={this.HandleClickBad}>
//           Bad
//         </button>

//         <h2>Statistics</h2>
//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//         <p>Total: {this.countTotalFeedback()}</p>
//         <p>Total feedback: {this.countPositiveFeedbackPercentage()}%</p>
//       </div>
//     );
//   }
// }

// export default Feedback;
