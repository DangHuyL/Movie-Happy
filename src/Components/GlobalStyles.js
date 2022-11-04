import Proptypes from 'prop-types';
import './GlobalStyles.scss';
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: Proptypes.node.isRequired,
};
export default GlobalStyles;
