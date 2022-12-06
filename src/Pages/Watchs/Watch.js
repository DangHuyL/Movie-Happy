import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimilarColumn from '~/Components/Similar/SimilarColumn';

import MovieInfor from '~/Components/WatchMovie/MovieInfor';
import MovieVideo from '~/Components/WatchMovie/MovieVideo';
import { BASE_URL } from '~/utils/constans';
import styles from './Watch.module.scss';

const cx = classNames.bind(styles);

function Watch() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const res = await axios.get(
                `${BASE_URL}/movie/${id}?api_key=c2d7e74ca48d88304696a254851ce44f`,
            );
            setData(res.data);
        };
        fetchApi();
    }, [id]);

    return (
        <div className={cx('Wrapper-watch')}>
            <div className={cx('Container-watch')}>
                <div className={cx('content')}>
                    <MovieVideo id={id} />
                    <MovieInfor data={data} />
                    {/* CommnetMovie */}
                </div>
                <div className={cx('SimilarColumn')}>
                    <SimilarColumn />
                </div>
            </div>
        </div>
    );
}

export default Watch;
