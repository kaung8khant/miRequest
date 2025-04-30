export const EMPLOYEE_NAME = "employeeName";
export const DEPARTMENT_NAME = "departmentName";
export const MANAGER_NAME = "managerName";
export const DATE_OF_ABSENCE_FROM = "dateOfAbsenceFrom";
export const DATE_OF_ABSENCE_TO = "dateOfAbsenceTo";
export const NUMBER_OF_DAYS = "numberOfDays";
export const NUMBER_OF_HOURS = "numberOfHours";
export const REASON_FOR_ABSENCE = "reasonForAbsence";
export const SIGNATURE = "signature";

export const FIELDS_SELECTORS = {
  [DATE_OF_ABSENCE_FROM]: "#fromDate",
  [DATE_OF_ABSENCE_TO]: "#toDate",
};

export const COORDINATES = {
  [EMPLOYEE_NAME]: {
    x: 123,
    y: 650,
  },
  [DEPARTMENT_NAME]: {
    x: 383,
    y: 650,
  },
  [MANAGER_NAME]: {
    x: 71,
    y: 623,
  },
  [DATE_OF_ABSENCE_FROM]: {
    x: 177,
    y: 514,
  },
  [DATE_OF_ABSENCE_TO]: {
    x: 385,
    y: 514,
  },
  [NUMBER_OF_DAYS]: {
    x: 130,
    y: 950,
  },
  [NUMBER_OF_HOURS]: {
    x: 390,
    y: 486,
  },
  [REASON_FOR_ABSENCE]: {
    x: 120,
    y: 1000,
  },
  [SIGNATURE]: {
    x: 120,
    y: 1050,
  },
};

export const SICK_LEAVE = "Sick";
export const VACATION = "Vacation";
export const BEREAVEMENT = "Bereavement";
export const TIME_OFF_WO_PAY = "Time Off Without Pay";
export const JURY_DUTY = "Jury Duty";
export const OTHER = "Other";

export const TYPE_COORDINATES = {
  [SICK_LEAVE]: {
    x: 53,
    y: 582,
  },
  [VACATION]: {
    x: 156,
    y: 582,
  },
  [BEREAVEMENT]: {
    x: 261,
    y: 582,
  },
  [TIME_OFF_WO_PAY]: {
    x: 417,
    y: 582,
  },
  [JURY_DUTY]: {
    x: 53,
    y: 555,
  },
  [OTHER]: {
    x: 54,
    y: 313,
  },
};
