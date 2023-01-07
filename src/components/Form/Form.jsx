let formRefAccessor = null;

const Form = (props) => {
  const { form, onFinish, children } = props;
  formRefAccessor = form;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nodesArr = [...e.target.elements];
    const valuesObj = nodesArr.reduce((acc, node) => {
      if (node.name) {
        acc[node.name] = node.value;
      }
      return acc;
    }, {});
    onFinish(valuesObj);
  };

  return (
    <form ref={form} onSubmit={handleFormSubmit}>
      {children}
    </form>
  );
};

export default Form;

const setFormData = (data) => {
  let nodesArr = [...formRefAccessor.current.elements];
  nodesArr.forEach((el) => {
    if (el.name) {
      el.value = data[el.name];
    }
  });
};

const getFormData = () => {
  const nodesArr = [...formRefAccessor.current.elements];
  const valuesObj = nodesArr.reduce((acc, node) => {
    if (node.name) {
      acc[node.name] = node.value;
    }
    return acc;
  }, {});
  return valuesObj;
};

// reset form
const resetForm = () => {
  const nodesArr = [...formRefAccessor.current.elements];
  nodesArr.forEach((el) => {
    if (el.name) {
      el.value = "";
    }
  });
};

// get form field value
const getFieldValue = (fieldName) => {
  const nodesArr = [...formRefAccessor.current.elements];
  const value = nodesArr.reduce((acc, node) => {
    if (node.name === fieldName) {
      acc = node.value;
    }
    return acc;
  }, "");
  return value;
};

// get field values from array of fields name
const getFieldValues = (fieldNames) => {
  const nodesArr = [...formRefAccessor.current.elements];
  const valuesObj = nodesArr.reduce((acc, node) => {
    if (fieldNames.includes(node.name)) {
      acc[node.name] = node.value;
    }
    return acc;
  }, {});
  return valuesObj;
};

// set field value
const setFieldValue = (fieldData) => {
  const nodesArr = [...formRefAccessor.current.elements];
  nodesArr.forEach((el) => {
    if (fieldData.hasOwnProperty(el.name)) {
      el.value = fieldData[el.name];
    }
  });
};

// reset particular field
const resetField = (fieldName) => {
  const nodesArr = [...formRefAccessor.current.elements];
  nodesArr.forEach((el) => {
    if (el.name === fieldName) {
      el.value = "";
    }
  });
};

// scroll to field in form
const scrollToField = (fieldName) => {
  const nodesArr = [...formRefAccessor.current.elements];
  const field = nodesArr.find((el) => {
    return el.name === fieldName;
  });
  field.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

export const formMethodsObject = {
  getFormData: () => {
    return getFormData();
  },
  setFormData: (data) => {
    setFormData(data);
  },
  resetForm: () => {
    return resetForm();
  },
  getFieldValue: (fieldName) => {
    return getFieldValue(fieldName);
  },
  setFieldValue: (obj) => {
    return setFieldValue(obj);
  },
  getFieldValues: (fieldNames) => {
    return getFieldValues(fieldNames);
  },
  resetField: (fieldName) => {
    return resetField(fieldName);
  },
  scrollToField: (fieldName) => {
    return scrollToField(fieldName);
  },
};
