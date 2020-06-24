import React from "react";
import OptionInput from "./OptionInput";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
  },
  items: {
    padding: theme.spacing(1),
    paddingBottom: "0",
  },
}));

const FilterForm = ({ selectedValues, handleSelectChange, places }) => {
  const classes = useStyles();

  const filterdDistricts = places.district.filter(
    (district) => selectedValues.division.id === district.division_id
  );
  const filterdThanas = places.thana.filter(
    (thana) => selectedValues.district.id === thana.districts_id
  );

  return (
    <React.Fragment>
      <Grid container className={classes.container}>
        <Grid item xs={4} className={classes.items}>
          <OptionInput
            label="Division"
            value={selectedValues.division.id}
            items={places.division}
            handleChange={handleSelectChange}
            name="division"
          />
        </Grid>
        <Grid item xs={4} className={classes.items}>
          <OptionInput
            label="District"
            value={selectedValues.district.id}
            items={filterdDistricts}
            disabled={selectedValues.division ? false : true}
            handleChange={handleSelectChange}
            name="district"
          />
        </Grid>
        <Grid item xs={4} className={classes.items}>
          <OptionInput
            label="Thana"
            value={selectedValues.thana.id}
            items={filterdThanas}
            disabled={selectedValues.district ? false : true}
            handleChange={handleSelectChange}
            name="thana"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FilterForm;
