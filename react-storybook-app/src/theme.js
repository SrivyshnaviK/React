import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

//const defaultTheme = createTheme();

const baseTheme = createTheme({

    overrides: {
        MuiButtonBase:{
            root:{
              borderRadius:"0px",
              color:"#22c870"
            }
          },
        MuiButton: {
            root: {
                margin: '40px',
                marginLeft: '2px',
                marginTop:'50px',
                border: 0,
                borderRadius: 3,
                boxShadow: '0 3px 5px 2px rgba(100, 105, 135, .3)',
                height: 40,
                padding: '0 30px',
                //color:'orange'
            },
            contained:{
                borderRadius:"0px",
                color:"#000000",
                background:"#22c870"
              }
        }
    }
}
);

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;