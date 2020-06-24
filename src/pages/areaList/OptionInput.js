import React from "react";
import { InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const OptionInput = ({
  value = "",
  label,
  disabled,
  items = [],
  handleChange,
  name,
}) => {
  const classes = useStyles();
  return (
    <FormControl
      variant="outlined"
      className={classes.formControl}
      disabled={disabled}
    >
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label={label}
        name={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map((item, index) => (
          <MenuItem key={index} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OptionInput;
