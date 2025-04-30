import { COORDINATES } from "../config";

import {
  EMPLOYEE_NAME,
  DEPARTMENT_NAME,
  MANAGER_NAME,
  DATE_OF_ABSENCE_FROM,
  DATE_OF_ABSENCE_TO,
  NUMBER_OF_DAYS,
  NUMBER_OF_HOURS,
  REASON_FOR_ABSENCE,
} from "../config";

export function mapCoordinates(fields) {
  return fields.map((field) => {
    return {
      ...field,
      x: COORDINATES[field.name].x,
      y: COORDINATES[field.name].y,
    };
  });
}

export function mapFields({
  dateOfAbsenceFrom,
  numberOfDays,
  reasonForAbsence,
  employeeName,
  departmentName,
  managerName,
  numberOfHours,
  dateOfAbsenceTo,
}) {
  return [
    { name: EMPLOYEE_NAME, value: employeeName },
    { name: DEPARTMENT_NAME, value: departmentName },
    { name: MANAGER_NAME, value: managerName },
    { name: DATE_OF_ABSENCE_FROM, value: dateOfAbsenceFrom },
    { name: DATE_OF_ABSENCE_TO, value: dateOfAbsenceTo },
    { name: NUMBER_OF_DAYS, value: numberOfDays },
    { name: NUMBER_OF_HOURS, value: numberOfHours },
    { name: REASON_FOR_ABSENCE, value: reasonForAbsence },
  ];
}
