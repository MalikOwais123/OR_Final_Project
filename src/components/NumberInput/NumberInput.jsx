import { useState } from "react";
import classList from "./_NumberInput.module.scss";
import PropTypes from "prop-types";

const NumberInput = (props) => {
  const { name, initial = 1, step = "1", disabled = false } = props;

  const [value, setValue] = useState(initial);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className={classList.container}>
      <label className={classList.customField}>
        <input
          disabled={disabled}
          className={classList.defaultClass}
          onChange={handleInputChange}
          name={name}
          value={value}
          type="number"
          step={step}
        />
      </label>
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
  step: PropTypes.string,
  initial: PropTypes.number,
  disabled: PropTypes.bool,
};

export default NumberInput;
