import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import TableSec from "./areaList/Table";
import { getOffices } from "../services/data.js";

const AreaList = () => {
  const [offices] = useState(getOffices());

  return (
    <Container>
      <TableSec offices={offices} />
    </Container>
  );
};

export default AreaList;
