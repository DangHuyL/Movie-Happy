import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Details.module.scss';
import '~/styles/grid.css';
import Button from '~/Components/Button';
import { BASE_URL, IMG_URL } from '~/utils/constans';
import Cast from '~/Components/Cast';
import Similar from '~/Components/Similar';
import { addMovieLocal } from '~/utils/localStorage';
import Trailer from '~/Components/Trailer';
const cx = classNames.bind(styles);

function DetailsMovie() {
    const params = useParams();
    const { media_type, id } = params;
    const [data, setData] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(
                `${BASE_URL}/${media_type}/${id}?api_key=c2d7e74ca48d88304696a254851ce44f`,
            );
            setData(response.data);
        };
        fetch();
    }, [media_type, id]);

    useEffect(() => {
        if (data.id) {
            addMovieLocal({
                id: data.id,
                poster_path: data.poster_path,
                media_type: media_type,
                title: data.name || data.title,
                viewAt: Date.now(),
            });
        }
    }, [data, media_type]);

    const user = false;

    const handleAddFavorites = () => {
        if (!user) return toast.error('You are not logger in');
    };

    return (
        <div className={cx('Wrapper')}>
            <div
                className={cx('background')}
                style={{
                    backgroundImage: `url(${IMG_URL}${data.backdrop_path})`,
                }}
            >
                <div className={cx('container')}>
                    <img
                        className={cx('details-poster')}
                        src={`${IMG_URL}${data.poster_path}`}
                        alt="poster"
                    />

                    <div className={cx('details-content')}>
                        <h1 className={cx('title')}>
                            {data.name || data.title}
                        </h1>
                        <p className={cx('descreption')}>{data.overview}</p>
                        <p className={cx('release-date')}>
                            <span>
                                Release date: {data.release_date || 'none'}
                            </span>
                        </p>
                        <div className={cx('genres')}>
                            {data.genres &&
                                data.genres.map((item) => (
                                    <Button outline>{item.name}</Button>
                                ))}
                        </div>
                        <div className={cx('ratings')}>
                            <StarRatings
                                rating={data.vote_average}
                                numberOfStars={10}
                                starRatedColor="rgb(231, 76, 60)"
                                starDimension="15px"
                                starSpacing="2px"
                                name="rating"
                            />
                            <span className={cx('amount')}>
                                ({data.vote_count || 0} vote)
                            </span>
                        </div>

                        <div className={cx('Watch')}>
                            <Button
                                watch
                                to={
                                    media_type === 'tv'
                                        ? `/watch/tv/${id}/season/1/esp/1`
                                        : `/watch/movie/${id}`
                                }
                            >
                                Watch Now
                            </Button>
                            <Button watch onClick={() => setShow(true)}>
                                Watch Trailer
                            </Button>
                            <Button
                                watch
                                className={cx('mr')}
                                onClick={handleAddFavorites}
                            >
                                Add to favorites
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Cast data={data} />
            <Similar />
            <Trailer show={show} setShow={setShow} />
        </div>
    );
}

export default DetailsMovie;
