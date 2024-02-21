import { useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

// project imports
import AuthWrapper1 from "./AuthWrapper1";
import MainCard from "@/component/cards/MainCard";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "@/hooks/useScriptRef";
import AnimateButton from "@/component/extended/AnimateButton";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(true);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthWrapper1>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "calc(100vh - 68px)" }}
          >
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              {/* <AuthCardWrapper> */}
              <MainCard
                sx={{
                  maxWidth: { xs: 400, lg: 475 },
                  margin: { xs: 2.5, md: 3 },
                  "& > *": {
                    flexGrow: 1,
                    flexBasis: "50%",
                  },
                }}
              >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={10}>
                    <Grid
                      container
                      direction={matchDownSM ? "column-reverse" : "row"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack
                          alignItems="center"
                          justifyContent="center"
                          spacing={1}
                        >
                          <Typography
                            color={theme.palette.secondaryMain}
                            gutterBottom
                            variant={matchDownSM ? "h3" : "h2"}
                          >
                            Hi, Welcome Back
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Formik
                      initialValues={{
                        email: "info@codedthemes.com",
                        password: "123456",
                        submit: null,
                      }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string()
                          .email("Must be a valid email")
                          .max(255)
                          .required("Email is required"),
                        password: Yup.string()
                          .max(255)
                          .required("Password is required"),
                      })}
                      onSubmit={async (
                        values,
                        { setErrors, setStatus, setSubmitting }
                      ) => {
                        try {
                          if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                          }
                        } catch (err) {
                          console.error(err);
                          if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                          }
                        }
                      }}
                    >
                      {/* width: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center'  */}
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                      }) => (
                        <form noValidate onSubmit={handleSubmit}>
                          <FormControl
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                            sx={{ ...theme.typography.customInput }}
                          >
                            <InputLabel htmlFor="outlined-adornment-email-login">
                              Email Address / Username
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-email-login"
                              type="email"
                              value={values.email}
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              label="Email Address / Username"
                              inputProps={{}}
                            />
                            {touched.email && errors.email && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-email-login"
                              >
                                {errors.email}
                              </FormHelperText>
                            )}
                          </FormControl>

                          <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                          >
                            <InputLabel htmlFor="outlined-adornment-password-login">
                              Password
                            </InputLabel>
                            <OutlinedInput
                              id="outlined-adornment-password-login"
                              type={showPassword ? "text" : "password"}
                              value={values.password}
                              name="password"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    size="medium"
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              }
                              label="Password"
                              inputProps={{}}
                            />
                            {touched.password && errors.password && (
                              <FormHelperText
                                error
                                id="standard-weight-helper-text-password-login"
                              >
                                {errors.password}
                              </FormHelperText>
                            )}
                          </FormControl>
                          <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={1}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={checked}
                                  onChange={(event) =>
                                    setChecked(event.target.checked)
                                  }
                                  name="checked"
                                  color="primary"
                                />
                              }
                              label="Remember me"
                            />
                            <Typography
                              variant="subtitle1"
                              color="secondary"
                              sx={{ textDecoration: "none", cursor: "pointer" }}
                            >
                              Forgot Password?
                            </Typography>
                          </Stack>
                          {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                              <FormHelperText error>
                                {errors.submit}
                              </FormHelperText>
                            </Box>
                          )}

                          <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                              <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                              >
                                Sign in
                              </Button>
                            </AnimateButton>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  </Grid>
                </Grid>
              </MainCard>
              {/* </AuthCardWrapper> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Login;
