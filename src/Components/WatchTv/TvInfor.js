import classNames from 'classnames/bind';
import styles from './WatchTvs.module.scss';

const cx = classNames.bind(styles);

function TvInfor({ nameTv, EspCurrent }) {
    return (
        <div className={cx('Wrapper')}>
            <h2 className={cx('Title-Tv')}>{nameTv}</h2>
            <p className={cx('Season-Tv')}>
                Season {EspCurrent.season_number} | Episode{' '}
                {EspCurrent.episode_number}
            </p>
            <p className={cx('Episode-Tv')}>Name: {EspCurrent.name}</p>
            <p className={cx('Overview-Tv')}>{EspCurrent.overview}</p>
            <p className={cx('AirDate-Tv')}>Air Date: {EspCurrent.air_date}</p>
        </div>
    );
}

export default TvInfor;
