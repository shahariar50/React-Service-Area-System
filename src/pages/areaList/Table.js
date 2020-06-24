import React from "react";
import { Table, TableContainer } from "@material-ui/core";
import TablesHead from "./TablesHead";
import TablesBody from "./TablesBody";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  table: {
    borderTop: "1px solid rgba(224, 224, 224, 1)",
  },
}));

const TableSec = (props) => {
  const classes = useStyle();
  return (
    <TableContainer>
      <Table className={classes.table}>
        <TablesHead />
        <TablesBody props={props} />
      </Table>
    </TableContainer>
  );
};

export default TableSec;
