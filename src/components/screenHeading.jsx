/* eslint-disable react/prop-types */
import '../styles/component/heading.css';

const ScreenHeading = ({title, classes}) => {
    return (
        <h2 className={`${classes || ''} screen-heading`}>
            {title}
        </h2>
    );
};

export default ScreenHeading;