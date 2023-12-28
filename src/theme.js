import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#29b6f6", // Couleur principale
  //   },
  //   secondary: {
  //     main: "#ff4081", // Couleur secondaire
  //   },
  // },
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          "&:active": {
            "& .MuiSwitch-thumb": {},
            "& .MuiSwitch-switchBase.Mui-checked": {},
          },
        },
        thumb: {},
        track: {
          backgroundColor: "#fff",
        },
        switchBase: {
          "&.Mui-checked": {
            color: "#ff4081",
            "& + .MuiSwitch-track": {
              backgroundColor: "#ff4081",
            },
          },
          "& .Mui-checked": {},
        },
      },
    },
  },
});

export default theme;
