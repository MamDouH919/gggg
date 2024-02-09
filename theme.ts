'use client';
import { createTheme } from '@mui/material/styles';
import { darkScrollbar } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : darkScrollbar(),
      }),
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          fontFamily: "'Material Icons Outlined' !important",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "0 16px",
          maxHeight: "45px",
          height: "45px",
          whiteSpace: "nowrap",
        },
        head: {
          // fontWeight: 600,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none"
        }
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label ,& input ,& .MuiSelect-select": {
            // fontSize: "0.800rem",
          },
        },
      },
    },
    // MuiOutlinedInput: {
    //   notchedOutline: {
    //     "& legend": {
    //       float: "none",
    //       margin: "initial",
    //     },
    //   },
    // },
  },

  palette: {
    mode: false ? 'dark' : 'light',
    // mode: "dark",
    primary: {
      main: "#3c4a69"
    },
    ...(false ? {
      background: {
        default: "#18191a",
        paper: "#2f3031",
        // hover: "rgba(73, 73, 73)",
        // appTitle: "rgba(73, 73, 73)"
      }
    }
      : {
        background: {
          default: "#F7FAFC",
          paper: "#fff",
          // hover: "#f5f5f5",
          // appTitle: "#f5f7f9"
        }
      })
    // secondary: { main: color.blue[400] }
  },
  typography: {
    fontFamily: ['"Cairo"', "sans-serif"].join(","),
    fontSize: 12.5,
  },
});

export default theme;
