import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';

import Title from '../Title';
import styles from './List.module.scss';
import useInnerWidths from '../hooks/useInnerWidths';
import Item from '../Item';
import { IMG_URL } from '~/utils/constans';

const cx = classNames.bind(styles);

function Recently({ data }) {
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
            <Title title="Recently viewed" />
            <Swiper
                navigation
                grabCursor={true}
                spaceBetween={20}
                slidesPerView={item}
            >
                {data.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Item
                                to={`/details/${item.media_type}/${item.id}`}
                                src={`${IMG_URL}${item.poster_path}`}
                                name={item.title}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
export default Recently;
