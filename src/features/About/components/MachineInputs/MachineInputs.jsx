import React from "react";
import Button from "../../../../components/Button/Button";
import Form from "../../../../components/Form/Form";
import Header from "../../../../components/Header/Header";
import classList from "./_MachineInputs.module.scss";
import InputParameters from "../InputParameters/InputParameters";
import Paragraph from "../../../../components/Paragraph/Paragraph";
import NumberInput from "../../../../components/NumberInput/NumberInput";

const MachineInputs = () => {
  const formRef = React.useRef(null);
  return (
    <div className={classList.inputs_main}>
      <Header variant="h2">Input Parameters</Header>
      <Form
        form={formRef}
        onFinish={(e) => {
          console.log("I AM IN FORM", e);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Paragraph variant="p">Simulation Days</Paragraph>
          <NumberInput name="simTime" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Paragraph variant="p">Standard Deviation</Paragraph>
          <NumberInput name="sd" />
        </div>
        <InputParameters
          title="Delux"
          deluxName="delux_no-of-machines"
          normalName="normal_no-of-machines"
        />
        <InputParameters
          title="Good Unit"
          deluxName="delux_no-of-good-units"
          normalName="normal_no-of-good-units"
        />
        <InputParameters
          title="Repair Charges"
          deluxName="delux_repair-charges"
          normalName="normal_repair-charges"
        />
        <InputParameters
          title="Mean Service Time"
          deluxName="delux_mean-service-time"
          normalName="normal_mean-service-time"
        />
        <InputParameters
          title="Mean Repair Time"
          deluxName="delux_mean-repair-time"
          normalName="normal_mean-repair-time"
        />
        <InputParameters
          title="No of Repairmen"
          deluxName="delux_no-of-repairmen"
          normalName="normal_no-of-repairmen"
        />
        <Button buttonType="submit">Get system ready</Button>
      </Form>
    </div>
  );
};

export default MachineInputs;
