import React from "react";
import { Table, TableContainer } from "@material-ui/core";
import TablesHead from "./TablesHead";
import TablesBody from "./TablesBody";

const TableSec = (props) => {
  return (
    <TableContainer>
      <Table>
        <TablesHead />
        <TablesBody props={props} />
      </Table>
    </TableContainer>
  );
};

export default TableSec;
