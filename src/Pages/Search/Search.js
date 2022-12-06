import classNames from 'classnames/bind';

import SearchForm from '~/Components/SearchForm';

import style from './Search.module.scss';

const cx = classNames.bind(style);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <SearchForm />
        </div>
    );
}

export default Search;
