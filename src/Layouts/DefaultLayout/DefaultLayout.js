import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/Layouts/components/Header';
import Footer from '~/Layouts/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx('Container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
