import classNames from 'classnames/bind';
import '~/styles/grid.css';

import styles from './Item.module.scss';

import Images from '../Images/Images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Item({ src, alt, name, to }) {
    return (
        <Link className={cx('wraper-castItem')} to={to}>
            <Images className={cx('avatar')} src={src} alt={alt} />

            <p className={cx('name')}>{name}</p>
        </Link>
    );
}

export default Item;
