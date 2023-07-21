import React from "react";

const FormField = (props) => {
    return (
        <TextField
            label={props.name}
            name={props.name}
            InputLabelProps={{
                shrink: true,
            }}
            value={value}
            required
            onChange={onChange}
        />
    );
};

export default FormField;
