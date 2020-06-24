import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

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
      <TableCell align="center">
        {office.condition ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </TableCell>
      <TableCell align="center">
        {office.non_condition ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
      </TableCell>
    </TableRow>
  );
};

export default TableBodyRow;
