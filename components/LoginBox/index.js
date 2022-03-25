import Image from "next/image";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { orange } from "@mui/material/colors";

import css from "./LoginBox.module.scss";

const sxs = {
  btn: {
    backgroundColor: orange[500],
    color: "white",
    "&:hover": {
      backgroundColor: orange[700]
    }
  }
};

const LoginBox = () => {
  return(
    <div className={css.loginBox}>
      <Paper
        elevation={5}
        className={css.paper}
      >
        <div className={css.logoSection}>
          <Image
            src="/boldo-logo.png"
            width={50}
            height={50}
          />
        </div>
        <Typography
          variant="h4"
          marginTop=".5rem"
          align="center"
          gutterBottom={true}
        >
          Login
        </Typography>
        <form className={css.form}>
          <TextField
            label="User name"
            variant="outlined"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button
            variant="contained"
            sx={sxs.btn}
          >
            Continue
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginBox;