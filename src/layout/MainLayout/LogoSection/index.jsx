// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import Logo from "@/component/Logo";
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <ButtonBase disableRipple>
      <Logo />
    </ButtonBase>
  );
};

export default LogoSection;
