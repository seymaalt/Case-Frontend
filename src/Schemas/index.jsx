import * as yup from "yup";

const validateTcNo = (value) => {
  if (!/^\d{11}$/.test(value)) return false;
  const digits = value.split("").map(Number);
  const firstTenSum = digits.slice(0, 10).reduce((acc, val) => acc + val, 0);
  if (firstTenSum % 10 !== digits[10]) return false;
  
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  if ((oddSum * 7 - evenSum) % 10 !== digits[9]) return false;
  
  return true;
};

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  surname: yup.string().required("Surname is required"),

  tcNo: yup
    .string()
    .required("TC No is required")
    .test("is-valid-tcNo", "TC No is not valid", validateTcNo),

  age: yup.number().min(0).required("Age is required"),

  gender: yup.string().required("Gender is required"),
});