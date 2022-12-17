import classNames from 'classnames/bind';
import styles from './WatchTvs.module.scss';

const cx = classNames.bind(styles);

function TvVideo({ id, espTv, seasonTv }) {
    return (
        <div className={cx('wrapper-video')}>
            <iframe
                style={{ height: '100%' }}
                width="100%"
                src={`https://www.2embed.to/embed/tmdb/tv?id=${id}&s=${seasonTv}&e=${espTv}`}
                title="Movie-watch"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}

export default TvVideo;
