import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link as CustomLink } from "react-router-dom";

import { userLoginTypes } from "../../redux/user/user.types";

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right"
    }
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3)
    }
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    height: "30px !important",
    width: "30px !important"
  },
  forgotPassword: {
    cursor: "pointer",
  }
}));

export default function LoginForm(props) {
  const history = useHistory();
  const [step, setStep] = useState(0)
  const { loading } = useSelector(state => state.userData)
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (step === 0) {
      dispatch({ type: userLoginTypes.USER_LOGIN_START, payload: data, history });
    }
  };

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    "02_header": "Sign in",
    "02_primary-action": "Sign in",
    "02_reset-action": "Reset Password",
    "02_reset": "Reset Password",
    "02_secondary-action": "Don't have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {step === 0 ? content["02_header"] : content["02_reset"]}
            </Typography>
          </Box>
          <Box>
            {step === 0 ? (
              <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      error={!!errors.identifier}
                      fullWidth
                      {...register("identifier", { required: true })}
                      label="Email address"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      error={!!errors.password}
                      fullWidth
                      {...register("password", { required: true })}
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Box my={2} className={classes.submitButton}>
                  {loading ? <CircularProgress className={classes.loading} /> : <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["02_primary-action"]}
                  </Button>}

                </Box>
                <Grid container spacing={2} className={classes.actions}>
                  <Grid item xs={12} sm={6}>
                    <CustomLink to="/register" variant="body2" style={{ textDecoration: "none" }}>
                      {content["02_secondary-action"]}
                    </CustomLink>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                    <a variant="body2" onClick={() => setStep(1)} className={classes.forgotPassword}>
                      {content["02_tertiary-action"]}
                    </a>
                  </Grid>
                </Grid>
              </form>

            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      size="small"
                      variant="outlined"
                      error={!!errors.email}
                      fullWidth
                      {...register("identifier", { required: true })}
                      label="Email address"
                      autoComplete="email"
                    />
                  </Grid>
                </Grid>
                <Box my={2} className={classes.submitButton}>
                  {loading ? <CircularProgress className={classes.loading} /> : <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    {content["02_reset-action"]}
                  </Button>}

                </Box>
              </form>

            )}
          </Box>
        </Box>
      </Container>
    </section>
  );
}
