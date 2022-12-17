import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import Button from '../Button';
import style from './SearchForm.module.scss';
import MovieItem from '../MovieItem';
import useDebounce from '~/Components/hooks/useDebounced';
import { BASE_URL, IMG_URL, API_KEY } from '~/utils/constans';

const cx = classNames.bind(style);

function SearchForm() {
    const [SearchResult, setSearchResult] = useState([]);
    const [SearchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [Loading, setLoading] = useState(false);
    const debounce = useDebounce(SearchValue, 700);

    useEffect(() => {
        if (!debounce) {
            return;
        }
        const fetch = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `${BASE_URL}/search/multi?api_key=${API_KEY}`,
                    {
                        params: {
                            query: debounce,
                        },
                    },
                );
                setSearchResult(response.data.results);
                setLoading(false);
            } catch (error) {
                // console.log(error);
            }
        };
        fetch();
    }, [debounce]);
    const inputRef = useRef();
    const handleOnChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleBtnClose = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div>
            <Tippy
                visible={showResult && SearchResult.length > 0}
                interactive
                placement="bottom-start"
                render={(attrs) => (
                    <div
                        className={cx('SearchResult')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <div className={cx('PopperWrapper')}>
                            {SearchResult.map((result) => (
                                <MovieItem data={result} key={result.id} />
                            ))}
                        </div>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('Wrapper')}>
                    <input
                        value={SearchValue}
                        ref={inputRef}
                        onChange={handleOnChange}
                        className={cx('input')}
                        placeholder="Search..."
                    />

                    {SearchValue && !Loading && (
                        <button
                            className={cx('close')}
                            onClick={handleBtnClose}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {Loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}

                    <Button className={cx('btn-search')}>Search</Button>
                </div>
            </Tippy>
        </div>
    );
}

export default SearchForm;
