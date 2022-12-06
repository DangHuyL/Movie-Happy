import classNames from 'classnames/bind';
import styles from './WatchMovie.module.scss';

const cx = classNames.bind(styles);

function MovieInfor({ data }) {
    return (
        <div className={cx('wrapper-infor')}>
            <h2 className={cx('title-movie')}>{data.title}</h2>
            <p className={cx('overview-movie')}>{data.overview}</p>
            <p className={cx('release-movie')}>
                Release date:<span> {data.release_date} </span>
            </p>
        </div>
    );
}

export default MovieInfor;
