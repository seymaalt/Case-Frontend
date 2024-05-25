import { useState } from "react";
import { Container, Grid, MenuItem, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import { Input, Button, FormErrorMessage } from "../../components";
import { registerSchema } from "../../schemas";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../services/api";
export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      tcNo: "",
      name: "",
      surname: "",
      age: "",
      gender: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        await addUser(values);
        navigate("/users");
      } catch (err) {
        setError(err.message);
      }
    },
  });

  return (
    <Stack>
      <Container>
        <Typography
          sx={{
            color: "header.main",
            fontWeight: "bold",
            fontSize: "32px",
            textAlign: "center",
          }}
          gutterBottom
        >
          Register
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          {error && <Typography color="error">{error}</Typography>}
          <Grid container spacing={2} justifyContent="flex-end" mb={2}>
            <Grid item xs={12} md={6}>
              <Input
                label="Name"
                type="text"
                onChange={formik.handleChange("name")}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                required
              />
              <FormErrorMessage
                touched={formik.touched.name}
                error={formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Surname"
                type="text"
                onChange={formik.handleChange("surname")}
                value={formik.values.surname}
                onBlur={formik.handleBlur}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                required
              />
              <FormErrorMessage
                touched={formik.touched.surname}
                error={formik.errors.surname}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="TC No"
                type="number"
                onChange={formik.handleChange("tcNo")}
                value={formik.values.tcNo}
                onBlur={formik.handleBlur}
                error={formik.touched.tcNo && Boolean(formik.errors.tcNo)}
                required
              />
              <FormErrorMessage
                touched={formik.touched.tcNo}
                error={formik.errors.tcNo}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                label="Age"
                type="number"
                onChange={formik.handleChange("age")}
                value={formik.values.age}
                onBlur={formik.handleBlur}
                error={formik.touched.age && Boolean(formik.errors.age)}
                required
              />
              <FormErrorMessage
                touched={formik.touched.age}
                error={formik.errors.age}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                select
                label="Gender"
                onChange={formik.handleChange("gender")}
                value={formik.values.gender}
                onBlur={formik.handleBlur}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Input>
              <FormErrorMessage
                touched={formik.touched.gender}
                error={formik.errors.gender}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Register</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Stack>
  );
}
