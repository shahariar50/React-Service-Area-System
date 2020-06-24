import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(1),
  },
  input: {
    width: "100%",
  },
}));

const SearchForm = ({ handleChange, value }) => {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <TextField
        className={classes.input}
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchForm;
