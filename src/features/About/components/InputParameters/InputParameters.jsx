import React from "react";
import Header from "../../../../components/Header/Header";
import NumberInput from "../../../../components/NumberInput/NumberInput";

const InputParameters = ({ title, deluxName, normalName }) => {
  return (
    <div>
      <div>
        <Header variant="h4">{title}</Header>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "1rem",
        }}
      >
        <NumberInput name={deluxName} />
        <NumberInput name={normalName} />
      </div>
    </div>
  );
};

export default InputParameters;
