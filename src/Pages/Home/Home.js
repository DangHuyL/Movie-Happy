import classNames from 'classnames/bind';
import Banner from '~/Components/Banner';
import Recently from '~/Components/List/Recently';
import styles from './Home.module.scss';
import { getMovieHistory } from '~/utils/localStorage';
import React, { useMemo } from 'react';
import MovieList from '~/Components/List/MovieList';
import TvList from '~/Components/List/TvList';
const cx = classNames.bind(styles);

function Home() {
    const historyWatch = useMemo(getMovieHistory, []);

    return (
        <div className={cx('Wrapper')}>
            <div className={cx('banner')}>
                <Banner />
            </div>
            <div className={cx('container')}>
                {historyWatch.length > 0 ? (
                    <Recently data={historyWatch} />
                ) : null}
                <div>
                    <MovieList type="trending" media_type="movie" />
                    <MovieList type="popular" media_type="movie" />
                    <MovieList type="top_rated" media_type="movie" />
                </div>
                <div>
                    <TvList type="trending" media_type="tv" />
                    <TvList type="popular" media_type="tv" />
                    <TvList type="top_rated" media_type="tv" />
                </div>
            </div>
        </div>
    );
}

export default Home;
