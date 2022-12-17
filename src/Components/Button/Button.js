import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children,
    onClick,
    primary = false,
    outline = false,
    watch = false,
    className = false,
    disabled = false,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    // remove event listenrer when btn disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('Wrapper', {
        [className]: className,
        primary,
        outline,
        watch,
        disabled,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    watch: PropTypes.bool,
    className: PropTypes.bool,
    disabled: PropTypes.bool,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
