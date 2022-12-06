import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import useInnerWidths from '../hooks/useInnerWidths';
import styles from './List.module.scss';
import Title from '../Title';
import Button from '../Button';
import { BASE_URL, IMG_URL } from '~/utils/constans';
import Item from '../Item';

const cx = classNames.bind(styles);
function MovieList({ type, media_type }) {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            if (type === 'trending') {
                const response = await axios.get(`
                ${BASE_URL}/trending/${media_type}/day?api_key=c2d7e74ca48d88304696a254851ce44f`);
                setMovie(response.data.results);
            } else {
                const response = await axios.get(
                    `${BASE_URL}/${media_type}/${type}?api_key=c2d7e74ca48d88304696a254851ce44f`,
                );
                setMovie(response.data.results);
            }
        };
        fetchApi();
    }, [type]);
    SwiperCore.use([Navigation]);
    const width = useInnerWidths();
    let item;
    if (width >= 1024) {
        item = 5;
    } else if (width < 1024 && width >= 480) {
        item = 3;
    } else {
        // eslint-disable-next-line no-unused-vars
        item = 2;
    }

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <Title title={`Movie ${type}`} />
                <Button outline to={`movie/${type}`}>
                    View more
                </Button>
            </div>

            <Swiper
                navigation
                grabCursor={false}
                spaceBetween={20}
                slidesPerView={item}
            >
                {movie.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Item
                                to={`/details/${item.media_type}/${item.id}`}
                                src={`${IMG_URL}${item.poster_path}`}
                                name={item.title || item.name}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default MovieList;
