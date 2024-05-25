import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),

  surname: yup.string().required("Surname is required"),

  tcNo: yup
    .string()
    .matches(/^\d{11}$/, "TC No must be exactly 11 digits")
    .required("TC No is required"),

  age: yup.number().min(0).required("Age is required"),

  gender: yup.string().required("Gender is required"),
});
