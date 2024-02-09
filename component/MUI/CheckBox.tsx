import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useController } from "react-hook-form";

interface inputProps {
    control: any,
    name: string,
    onChange: any,
    label: any,
}

const MuiCheckBox = (props: inputProps) => {
    const { control, name, label, onChange, ...restProps } = props;

    const {
        field: { onChange: checkboxChange, value },
    } = useController({
        name,
        control,
        defaultValue: false,
    });
    const [checkState, setCheckState] = useState<Boolean>(value);
    useEffect(() => {
        setCheckState(value);
        return () => { };
    }, [value]);
    return (
        <FormControlLabel
            checked={value}
            control={<Checkbox />}
            label={<Typography variant="body2" color={"text.primary"}>{label}</Typography>}
            labelPlacement="end"
            onChange={(event) => {
                // setCheckState(event.target.checked);
                // checkboxChange(event.target.checked);
                onChange && onChange(event);
            }}
            {...restProps}
        />
        // <FormControlLabel
        //     checked={checkState}
        //     control={<Switch color="primary" />}
        //     label={<Typography variant="body2" color={"text.primary"}>{label}</Typography>}
        //     labelPlacement="end"
        //     onChange={(event) => {
        //         setCheckState(event.target.checked);
        //         checkboxChange(event.target.checked);
        //         onChange && onChange(event);
        //     }}
        //     {...restProps}
        // />
    );
};

export default MuiCheckBox;
