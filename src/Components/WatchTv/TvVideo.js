import classNames from 'classnames/bind';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

function TvVideo() {
    return (
        <div className={cx('wrapper-video')}>
            <iframe
                style={{ height: '513px' }}
                width="100%"
                src={`https://www.2embed.to/embed/tmdb/movie?id=436270`}
                title="Movie-watch"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
}

export default TvVideo;
