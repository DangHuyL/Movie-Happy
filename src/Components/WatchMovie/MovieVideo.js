import classNames from 'classnames/bind';
import styles from './WatchMovie.module.scss';

const cx = classNames.bind(styles);

function MovieVideo({ id }) {
    return (
        <div className={cx('wrapper-video')}>
            <iframe
                style={{ height: '100%' }}
                width="100%"
                src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
                title="Movie-watch"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}

export default MovieVideo;
