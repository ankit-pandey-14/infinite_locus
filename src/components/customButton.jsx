/* eslint-disable react/prop-types */
import '../styles/component/button.css';
import { Link } from 'react-router-dom';

const buttonTypeClass = {
    primary: 'primary-button',
    outline: 'outline-button',
    link: 'link-button',
};

const CustomButton = ({title, classes, type, url, onClick, target, tooltip}) => {
    return (
        <Link
            className={`d-flex custom-button ${type ? buttonTypeClass[type] : ''} ${classes || ''}`}
            to={url}
            onClick={(event) => {
                if(!url) {
                    event.preventDefault();
                }

                if(onClick) {
                    onClick();
                }
            }}
            target={target}
            title={tooltip}
        >
            {title}
        </Link>
    );
};

export default CustomButton;