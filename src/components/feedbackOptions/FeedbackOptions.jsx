import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      {options.map(name => {
        return (
          <li className={css.item} key={name}>
            <button
              className=""
              type="button"
              onClick={onLeaveFeedback}
              name={name}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
