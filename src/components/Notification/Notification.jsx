import css from './notification.module.css';

export function Notification({ message }) {
  return <p className={css.message}>{message}</p>;
}

export default Notification;
