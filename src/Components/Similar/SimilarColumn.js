import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Similar.module.scss';
import { BASE_URL, IMG_URL } from '~/utils/constans';
import Images from '../Images/Images';

const cx = classNames.bind(styles);

function SimilarColumn() {
    const params = useParams();
    const { id } = params;
    const [similar, setSimilar] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const response = await axios.get(
                `${BASE_URL}/movie/${id}/similar?api_key=c2d7e74ca48d88304696a254851ce44f`,
            );
            setSimilar(response.data.results.slice(0, 20));
        };

        fetchApi();
    }, [id]);

    return (
        <div className={cx('WrapperColumn')}>
            <div className={cx('containerColumn')}>
                <h3 className={cx('titleColumn')}>Semilar</h3>
                <div className={cx('ContentColumn')}>
                    {similar.map((item) => {
                        return (
                            <Link
                                className={cx('wraper-castItem')}
                                to={`/details/movie/${item.id}`}
                            >
                                <Images
                                    className={cx('avatar')}
                                    src={`${IMG_URL}${item.poster_path}`}
                                />

                                <p className={cx('name')}>{item.title}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SimilarColumn;
