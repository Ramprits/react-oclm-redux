import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import { userRegisterTypes } from "../../redux/user/user.types";

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
  }
}));

export default function RegisterForm(props) {
  const history = useHistory();
  const classes = useStyles();
  const { loading } = useSelector(state => state.userData)
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch({
      type: userRegisterTypes.USER_REGISTER_START,
      payload: data,
      history
    });
  };

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    "02_header": "Sign in",
    "02_primary-action": "Sign up",
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
              {content["02_header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    error={!!errors.username}
                    fullWidth
                    {...register("username", { required: true })}
                    label="Username"
                    autoComplete="username"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    error={!!errors.email}
                    fullWidth
                    {...register("email", { required: true })}
                    label="Email address"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    error={!!errors.password}
                    fullWidth
                    {...register("password", { required: true })}
                    label="Password"
                    type="password"
                  />
                </Grid>
              </Grid>
              <Box my={2} className={classes.submitButton}>
                {loading ? <CircularProgress className={classes.loading} /> :
                  <Button
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
                  <Link href="#" variant="body2">
                    {content["02_secondary-action"]}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">
                    {content["02_tertiary-action"]}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
