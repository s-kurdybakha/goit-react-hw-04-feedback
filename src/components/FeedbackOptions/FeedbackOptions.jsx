import css from './/feedback-options.module.css';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.btnBlock}>
      {options.map(option => (
        <button
          className={css.feedbackBtn}
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
export default FeedbackOptions;
