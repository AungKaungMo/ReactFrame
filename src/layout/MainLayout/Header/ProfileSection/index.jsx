import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";

// project imports
import MainCard from "@/component/cards/MainCard";
import Transitions from "@/component/extended/Transitions";
import User1 from "@/assets/images/users/user-round.svg";

// assets
import { IconLogout, IconSettings, IconUser } from "@tabler/icons";

// ==============================|| PROFILE MENU ||============================== //

const ProfileSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null);
  const handleLogout = async () => {
    console.log("Logout");
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (event, index, route = "") => {
    setSelectedIndex(index);
    handleClose(event);

    if (route && route !== "") {
      navigate(route);
    }
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
        <Chip
          sx={{
            height: "48px",
            alignItems: "center",
            borderRadius: "27px",
            transition: "all .2s ease-in-out",
            borderColor: theme.palette.currentState.primaryColor,
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: theme.palette.currentState.primaryColor,
              background: `${theme.palette.currentState.primaryColor}!important`,
              color: theme.palette.currentState.transparentColor,
              "& svg": {
                stroke: theme.palette.currentState.transparentColor,
              },
            },
            "& .MuiChip-label": {
              lineHeight: 0,
            },
          }}
          icon={
            <Avatar
              src={User1}
              sx={{
                ...theme.typography.mediumAvatar,
                margin: "8px 0 8px 8px !important",
                cursor: "pointer",
              }}
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              color="inherit"
            />
          }
          label={
            <IconSettings
              stroke={1.5}
              size="1.5rem"
              color={theme.palette.currentState.primaryColor}
            />
          }
          variant="outlined"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="primary"
        />
        <Popper
          placement="bottom-end"
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 14],
                },
              },
            ],
          }}
        >
          {({ TransitionProps }) => (
            <Transitions in={open} {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MainCard
                    border={false}
                    elevation={16}
                    content={false}
                    boxShadow
                    shadow={theme.shadows[16]}
                  >
                    <Box sx={{ px: 2, pt: 2 }}>
                      <Stack>
                        <Stack
                          direction="row"
                          spacing={0.5}
                          alignItems="center"
                        >
                          <Typography variant="h4">Good Morning,</Typography>
                          <Typography
                            component="span"
                            variant="h4"
                            sx={{ fontWeight: 400 }}
                          >
                            Johne Doe
                          </Typography>
                        </Stack>
                        <Typography variant="subtitle2">
                          Project Admin
                        </Typography>
                      </Stack>
                    </Box>
                    <Box sx={{ p: 1 }}>
                      <List
                        component="nav"
                        sx={{
                          width: "100%",
                          maxWidth: 350,
                          minWidth: 300,
                          backgroundColor: theme.palette.currentState.bgColor,
                          borderRadius: "10px",
                          [theme.breakpoints.down("md")]: {
                            minWidth: "100%",
                          },
                          "& .MuiListItemButton-root": {
                            mt: 0.5,
                          },
                        }}
                      >
                        <ListItemButton
                          sx={{
                            borderRadius: `10px`,
                            "&.Mui-selected": {
                              color: theme.palette.currentState.primaryColor,
                              backgroundColor:
                                theme.palette.currentState.palePrimaryColor,
                              fontWeight: "900",
                              "&:hover": {
                                backgroundColor:
                                  theme.palette.currentState.palePrimaryColor,
                              },
                              "& .MuiListItemIcon-root": {
                                color: theme.palette.currentState.primaryColor,
                              },
                            },
                            "&:hover": {
                              backgroundColor:
                                theme.palette.currentState.palePrimaryColor,
                              color: theme.palette.currentState.primaryColor,
                              "& .MuiListItemIcon-root": {
                                color: theme.palette.currentState.primaryColor,
                              },
                            },
                          }}
                          selected={selectedIndex === 0}
                          onClick={(event) =>
                            handleListItemClick(event, 0, "/account-setting")
                          }
                        >
                          <ListItemIcon>
                            <IconSettings stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">
                                Account Settings
                              </Typography>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `10px`,
                            "&.Mui-selected": {
                              color: theme.palette.currentState.primaryColor,
                              backgroundColor:
                                theme.palette.currentState.palePrimaryColor,
                              fontWeight: "900",
                              "&:hover": {
                                backgroundColor:
                                  theme.palette.currentState.palePrimaryColor,
                              },
                              "& .MuiListItemIcon-root": {
                                color: theme.palette.currentState.primaryColor,
                              },
                            },
                            "&:hover": {
                              backgroundColor:
                                theme.palette.currentState.palePrimaryColor,
                              color: theme.palette.currentState.primaryColor,
                              "& .MuiListItemIcon-root": {
                                color: theme.palette.currentState.primaryColor,
                              },
                            },
                          }}
                          selected={selectedIndex === 1}
                          onClick={(event) =>
                            handleListItemClick(event, 1, "#")
                          }
                        >
                          <ListItemIcon>
                            <IconUser stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Grid
                                container
                                spacing={1}
                                justifyContent="space-between"
                              >
                                <Grid item>
                                  <Typography variant="body2">
                                    Social Profile
                                  </Typography>
                                </Grid>
                              </Grid>
                            }
                          />
                        </ListItemButton>
                        <ListItemButton
                          sx={{
                            borderRadius: `10px`,
                            "&.Mui-selected": {
                              color: theme.palette.currentState.primaryColor,
                              backgroundColor:
                                theme.palette.currentState.palePrimaryColor,
                              fontWeight: "900",
                              "&:hover": {
                                backgroundColor:
                                  theme.palette.currentState.palePrimaryColor,
                              },
                              "& .MuiListItemIcon-root": {
                                color: theme.palette.currentState.primaryColor,
                              },
                            },
                            "&:hover": {
                              backgroundColor:
                                theme.palette.currentState.palePrimaryColor,
                              color: theme.palette.currentState.primaryColor,
                              "& .MuiListItemIcon-root": {
                                color: theme.palette.currentState.primaryColor,
                              },
                            },
                          }}
                          selected={selectedIndex === 4}
                          onClick={handleLogout}
                        >
                          <ListItemIcon>
                            <IconLogout stroke={1.5} size="1.3rem" />
                          </ListItemIcon>
                          <ListItemText
                            primary={
                              <Typography variant="body2">Logout</Typography>
                            }
                          />
                        </ListItemButton>
                      </List>
                    </Box>
                  </MainCard>
                </ClickAwayListener>
              </Paper>
            </Transitions>
          )}
        </Popper>
      </Box>
    </>
  );
};

export default ProfileSection;
