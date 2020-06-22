import React from "react";
import { TableBody } from "@material-ui/core";
import TableBodyRow from "./TableBodyRow";

const TablesBody = (props) => {
  const { offices } = props.props;
  return (
    <TableBody>
      {offices.map((office, index) => {
        return <TableBodyRow key={index} index={index} office={office} />;
      })}
    </TableBody>
  );
};

export default TablesBody;
