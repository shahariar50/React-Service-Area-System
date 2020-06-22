import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const TableBodyRow = ({ office, index }) => {
  const phoneLength = office.contact_no.length;
  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{office.division}</TableCell>
      <TableCell>{office.district}</TableCell>
      <TableCell>{office.thana}</TableCell>
      <TableCell>{office.address}</TableCell>
      <TableCell>
        {office.contact_no.map((phone_no, index) => (
          <span key={index}>
            {phoneLength !== index + 1 ? `${phone_no}, ` : `${phone_no}`}
          </span>
        ))}
      </TableCell>
      <TableCell>{office.condition ? "True" : "False"}</TableCell>
      <TableCell>{office.non_condition ? "True" : "False"}</TableCell>
    </TableRow>
  );
};

export default TableBodyRow;
