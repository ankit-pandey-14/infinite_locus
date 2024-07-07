/* eslint-disable react/prop-types */
import '../styles/component/inputField.css';

const CustomInputField = ({type, placeholder, value, onChange, classes}) => {
    return (
        <input
            type={type || 'text'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`d-flex custom-input ${classes || ''}`}
        />
    );
};

export default CustomInputField;