/* eslint-disable react/prop-types */
import { FormHelperText } from "@mui/material";

function FormErrorMessage({ touched, error }) {
  if (!touched || !error) {
    return null;
  }

  return <FormHelperText error>{error}</FormHelperText>;
}

export default FormErrorMessage;