import classNames from 'classnames/bind';

import styles from './MovieItem.module.scss';
import { IMG_URL } from '~/utils/constans';
import { Link } from 'react-router-dom';
import Images from '../Images/Images';

const cx = classNames.bind(styles);

function MovieItem({ data }) {
    return (
        <Link
            to={`/details/${data.media_type}/${data.id}`}
            className={cx('wrapper')}
        >
            <Images
                className={cx('avatar')}
                src={`${IMG_URL}${data.poster_path}`}
                alt={data.title}
            />
            <p className={cx('movieName')}>{data.title || 'NoName'}</p>
        </Link>
    );
}

export default MovieItem;
