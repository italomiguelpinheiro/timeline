import { TextField } from "@mui/material";
import { constantsColors } from "../themes/constantColors";

const RoundedTextField = (props) => {
  return (
    <TextField
      {...props}
      sx={{
        ...props.sx,
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          "&.Mui-focused fieldset": {
            borderColor: constantsColors.primaryColor,
          },
        },
        "& label.Mui-focused": {
          color: constantsColors.primaryColor,
        },
      }}
    />
  );
};

export default RoundedTextField;