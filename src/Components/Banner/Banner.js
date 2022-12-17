import axios from 'axios';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import Button from '../Button';
import styles from './Banner.module.scss';
import { IMG_URL, BASE_URL, API_KEY } from '~/utils/constans';

const cx = classNames.bind(styles);

function Banner() {
    const [banner, setBanner] = useState('');
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(
                `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
            );

            /*Create randomly an integer from 0 to 20
             Math.ramdom() *(max-min) + min */
            const random = Math.floor(Math.random() * 20 + 0);

            setBanner(response.data.results[random]);
        };
        fetch();
    }, []);

    return (
        <div
            className={cx('background')}
            style={{
                backgroundImage: `url(${IMG_URL}${banner?.backdrop_path})`,
            }}
        >
            <div className={cx('Banner-content')}>
                <div className={cx('Banner-infor')}>
                    <h1 className={cx('title')}>{banner.title}</h1>
                    <p className={cx('description')}>{banner.overview}</p>

                    <div className={cx('action')}>
                        <Button
                            watch
                            to={
                                banner.media_type === 'tv'
                                    ? `/watch/${banner.media_type}/${banner.id}/season/1/esp/1`
                                    : `/watch/movie/${banner.id}`
                            }
                        >
                            Watch now
                        </Button>
                        <Button
                            to={`/details/${banner.media_type}/${banner.id}`}
                            watch
                        >
                            View Info
                        </Button>
                    </div>
                </div>
                <div className={cx('Banner-poster')}>
                    <img
                        className={cx('poster_img')}
                        src={`${IMG_URL}${banner.poster_path}`}
                        alt="poster"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
