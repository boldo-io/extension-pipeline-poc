import { useState } from "react";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import { orange } from "@mui/material/colors";

import css from "./RegisterBox.module.scss";

const sxs = {
  btn: {
    margin: "1rem 0",
    backgroundColor: orange[500],
    color: "white",
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
};

const RegisterBox = ({
  register,
  loading,
  error
}) => {
  const [ form, setForm ] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    firstName: "",
    lastName: "",
    phone: ""
  });

  const _updateField = field => e => setForm(prev => ({ ...prev, [field]: e.target.value }));

  const _doRegister = () => register(form);

  const validForm = (
    form.username.length > 0
    &&
    form.password.length > 7
    &&
    form.password_confirmation.length > 7
    &&
    form.firstName.length > 0
    &&
    form.lastName.length > 0
  );

  return(
    <Paper
      className={css.container}
      elevation={10}
    >
      <div className={css.logoSection}>
        <Image
          src="/boldo-logo.png"
          width={50}
          height={50}
        />
      </div>
      <form className={css.form}>
        <Typography
          variant="h4"
          marginTop=".5rem"
          align="center"
          gutterBottom={true}
        >
          Register
        </Typography>
        <TextField
          variant="outlined"
          label="Username"
          margin="dense"
          value={form.username}
          onChange={_updateField("username")}
        />
        <TextField
          variant="outlined"
          label="Password"
          margin="dense"
          type="password"
          value={form.password}
          onChange={_updateField("password")}
        />
        <TextField
          variant="outlined"
          label="Password Confirmation"
          margin="dense"
          type="password"
          value={form.password_confirmation}
          onChange={_updateField("password_confirmation")}
        />
        <TextField
          variant="outlined"
          label="First Name"
          margin="dense"
          value={form.firstName}
          onChange={_updateField("firstName")}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          margin="dense"
          value={form.lastName}
          onChange={_updateField("lastName")}
        />
        <TextField
          variant="outlined"
          label="Phone"
          margin="dense"
          value={form.phone}
          onChange={_updateField("phone")}
        />
        <Button
          variant="contained"
          sx={sxs.btn}
          onClick={_doRegister}
          disabled={loading || !validForm}
        >
          {
            loading
            ?
            <CircularProgress size="1.6rem" />
            :
            "Create Account"
          }
        </Button>
      </form>
      {
        error
        &&
        <Alert
          severity="error"
        >
          The information provided is invalid.
        </Alert>
      }
    </Paper>
  );
};

export default RegisterBox;