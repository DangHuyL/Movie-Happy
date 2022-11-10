import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import LoginForm from '~/Components/LoginForm';
const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('Wrapper')}>
            <LoginForm />
        </div>
    );
}

export default Login;
