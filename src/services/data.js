import divi from "./divisions.json";
import dist from "./districts.json";
import than from "./thana.json";
import offi from "./offices.json";

let offices = [];

export const getOffices = () => {
  offi.map((office, index) => {
    let obj = {};
    const thana = than.find((thana) => thana.id === office.thana_id);
    const district = dist.find(
      (district) => district.id === thana.districts_id
    );
    const division = divi.find(
      (division) => division.id === district.division_id
    );

    obj.id = index + 1;
    obj.condition = office.condition;
    obj.non_condition = office.non_condition;
    obj.address = office.address;
    obj.contact_no = office.phone_no;
    obj.thana = thana.name;
    obj.district = district.name;
    obj.division = division.name;
    offices[index] = obj;

    return "";
  });
  return offices;
};
