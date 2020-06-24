import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableHead: {
    borderBottom: "2px solid rgba(224, 224, 224, 1)",
  },
}));

const TablesHead = () => {
  const classes = useStyles();
  return (
    <TableHead>
      <TableRow className={classes.tableHead}>
        <TableCell>No</TableCell>
        <TableCell>Division</TableCell>
        <TableCell>District</TableCell>
        <TableCell>Thana</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Contact No</TableCell>
        <TableCell>Condition</TableCell>
        <TableCell>Non Condition</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TablesHead;
