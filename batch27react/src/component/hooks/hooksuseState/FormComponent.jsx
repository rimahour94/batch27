import {
  Box,
  Button,
  FormGroup,
  Paper,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";

function FormComponent() {
  const CustomButton = styled(Button)`
    background: cadetblue;
    padding: 10px;
    font-size: 18px;
    font-weight: 500;

    :hover {
      background: #34495e;
    }
  `;

  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
  });

  const inputChange = (e) => {
    console.log(e, e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  return (
    <>
      <h2>Form Component</h2>
      <Paper
        elevation={3}
        sx={{
          width: 400,
          margin: "auto",
          padding: "40px",
        }}
      >
        <FormGroup sx={{ marginBottom: 2, paddingLeft: "12px", width: "93%" }}>
          <TextField
            type="text"
            label="Full Name"
            name="fullname"
            value={formData.fullname}
            onChange={inputChange}
            error={!formData?.fullname ? "Required" : null}
            helperText="Full name should be minimum 5 characters"
          />
          <br />
          <TextField
            label="Mobile no"
            name="mobile"
            value={formData.mobile}
            onChange={inputChange}
          />{" "}
          <br />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={inputChange}
          />{" "}
          <br />
          <br />
          <CustomButton variant="contained">Submit</CustomButton>
        </FormGroup>
      </Paper>
    </>
  );
}

export default FormComponent;
