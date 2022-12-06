import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

function watchTv() {
    return (
        <div className={cx('wrapper-watchTv')}>
            <div className={cx('container-watchTv')}>
                <div className={cx('content')}>
                    <div className={cx('WatchTv-video')}>
                        {/* <TvVideo /> */}
                        {/* TvInfor */}
                    </div>
                    <div className={cx('WatchTv-season')}>
                        {/* SeasonItem */}
                    </div>
                </div>
                <div className={cx('semilar')}>{/* SemilarTv */}</div>
            </div>
        </div>
    );
}

export default watchTv;
