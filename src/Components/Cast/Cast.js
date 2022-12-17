import classNames from 'classnames/bind';
import '~/styles/grid.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from './Cast.module.scss';
import CastItem from './CastIem';
import { BASE_URL, API_KEY } from '~/utils/constans';
import Title from '../Title';

const cx = classNames.bind(styles);

function Cast({ data }) {
    const params = useParams();
    const { media_type, id } = params;

    const [Cast, setCast] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const responsive = await axios.get(
                `${BASE_URL}/${media_type}/${id}/credits?api_key=${API_KEY}`,
            );
            setCast(responsive.data.cast.slice(0, 10));
        };
        fetchApi();
    }, [media_type, id]);

    return (
        <div className={cx('Wrapper')}>
            <div className={cx('container')}>
                <div className={cx('HomePage')}>
                    Homepage:
                    <a
                        target="blank"
                        className={cx('link-movie')}
                        href={data.homepage}
                    >
                        {data.homepage}
                    </a>
                    <Title title="Cast" />
                </div>
                <div class="row">
                    {Cast.map((item) => {
                        return (
                            <div class="col l-2-4 m-4 c-6">
                                <CastItem key={item.id} data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

Cast.propTypes = {
    data: PropTypes.node.isRequired,
};

export default Cast;
