import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';

import axios from 'axios';

import Title from '../Title';
import styles from './Similar.module.scss';
import { BASE_URL, IMG_URL, API_KEY } from '~/utils/constans';
import Item from '../Item';
import useInnerWidths from '../hooks/useInnerWidths';

const cx = classNames.bind(styles);

function Similar() {
    SwiperCore.use([Navigation]);
    const params = useParams();
    const { media_type, id } = params;
    const [similar, setSimilar] = useState([]);

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
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(
                `${BASE_URL}/${media_type}/${id}/similar?api_key=${API_KEY}`,
            );
            setSimilar(response.data.results.slice(0, 20));
        };
        fetchApi();
    }, [media_type, id]);

    return (
        <div className={cx('Wrapper')}>
            <div className={cx('container')}>
                <Title title={'Similar'} />
                <div className={cx('Content')}>
                    <Swiper
                        navigation
                        grabCursor={true}
                        spaceBetween={20}
                        slidesPerView={item}
                    >
                        {similar.map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Item
                                        to={`/details/${media_type}/${item.id}`}
                                        src={`${IMG_URL}${item.poster_path}`}
                                        name={item.title}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Similar;
