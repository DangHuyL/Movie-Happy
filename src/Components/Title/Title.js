import classNames from 'classnames/bind';
import styles from './Title.module.scss';
const cx = classNames.bind(styles);

function Title({ title }) {
    return <p className={cx('title')}>{title}</p>;
}

export default Title;
