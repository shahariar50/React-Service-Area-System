import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import TableSec from "./areaList/Table";
import { getOffices } from "../services/data.js";
import FilterForm from "./areaList/FilterForm";
import SearchForm from "./areaList/SearchForm.js";
import divi from "../services/divisions.json";
import dis from "../services/districts.json";
import than from "../services/thana.json";

const AreaList = () => {
  const [offices] = useState(getOffices());
  const [places] = useState({ division: divi, district: dis, thana: than });
  const [selectedValues, setSelectedValues] = useState({
    division: "",
    district: "",
    thana: "",
  });
  const [searchValue, setSearchValue] = useState("");

  const handleSelectChange = ({ target }) => {
    let value = { ...selectedValues };
    value[target.name] = target.value
      ? places[target.name][target.value - 1]
      : "";

    if (target.name === "division") {
      value.district = "";
      value.thana = "";
    } else if (target.name === "district") {
      value.thana = "";
    }

    setSelectedValues({ ...selectedValues, ...value });
  };

  const handleSearch = () => {
    let value = [...offices];

    value = value.filter((v) => {
      let str = `${v.address} ${v.district} ${v.division} ${
        v.thana
      } ${v.contact_no.map((c) => c)}`
        .replace(/[,.]/g, " ")
        .toLocaleLowerCase();

      return (
        str.search(searchValue.toLocaleLowerCase().replace(/[,.]/g, " ")) !== -1
      );
    });
    return value;
  };
  const handleSearchChange = ({ target }) => {
    let obj = {
      division: "",
      district: "",
      thana: "",
    };
    setSelectedValues({ ...selectedValues, ...obj });
    setSearchValue(target.value);
  };

  const searchedOffice = handleSearch();

  const filterdDivisionOffices = selectedValues.division
    ? searchedOffice.filter(
        (office) => office.division === selectedValues.division.name
      )
    : searchedOffice;
  const filterdDistrictOffices = selectedValues.district
    ? filterdDivisionOffices.filter(
        (office) => office.district === selectedValues.district.name
      )
    : filterdDivisionOffices;
  const finalOffices = selectedValues.thana
    ? filterdDistrictOffices.filter(
        (office) => office.thana === selectedValues.thana.name
      )
    : filterdDistrictOffices;

  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
          <SearchForm handleChange={handleSearchChange} value={searchValue} />
        </Grid>
        <Grid item xs={8}>
          <FilterForm
            selectedValues={selectedValues}
            handleSelectChange={handleSelectChange}
            places={places}
          />
        </Grid>
      </Grid>
      <TableSec offices={finalOffices} />
    </Container>
  );
};

export default AreaList;
