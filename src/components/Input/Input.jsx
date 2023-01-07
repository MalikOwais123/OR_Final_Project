import { useState } from "react";
import classList from "./_Input.module.scss";
import PropTypes from "prop-types";

const Input = (props) => {
  const {
    borderType = "solid",
    borderColor = "	#02808f",
    placeholderColor = "#6d99a2",
    name,
    placeholder = "Enter Your Name",
  } = props;

  const [value, setValue] = useState("");

  const getBorderClassFromType = (type) => {
    switch (type) {
      case "none":
        return " ";
      case "solid":
        return classList.one;
      case "bottom":
        return classList.two;
      case "box":
        return classList.three;
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className={classList.container}>
      <label
        className={`${classList.customField} ${getBorderClassFromType(
          borderType
        )}`}
      >
        <input
          className={classList.defaultClass}
          style={{
            borderColor: borderColor,
          }}
          placeholder="&nbsp;"
          onChange={(e) => handleInputChange(e)}
          name={name}
          value={value}
          rules={value.toString()}
        />
        <span
          style={{ color: placeholderColor }}
          className={classList.placeholder}
        >
          {placeholder}
        </span>

        {/* ANIMATED BORDER SPACE */}
        {borderType === "box" && <span className={classList.border}></span>}
      </label>
    </div>
  );
};

Input.propTypes = {
  borderType: PropTypes.string,
  borderColor: PropTypes.object,
  placeholderColor: PropTypes.string,
};

export default Input;
