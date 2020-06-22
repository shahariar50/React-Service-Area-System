import React from "react";
import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TablesHead = () => {
  return (
    <TableHead>
      <TableRow>
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
