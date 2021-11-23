import React, { useState, useEffect } from "react";
import { Typography, Grid, AppBar } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { useTheme } from "../../theme/useTheme";
import "./atoms.css";

function PageTopBar(props) {
  // Get the selected theme, font list, etc.
  const { theme, themeLoaded } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // Render if the theme is loaded.
  return (
    <div className="root">
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <AppBar
            width={1}
            className="toolBar"
            style={{ backgroundImage: selectedTheme.colors.backgroundTopBar, marginTop: "11vh" }}
          >
            <Grid container>
              <Grid item xs={5} sm={5} md={5} xl={5} lg={5}></Grid>
              <Grid item xs={3} sm={3} md={3} xl={3} lg={3}>
                <Typography
                  className="typography"
                  style={{
                    marginTop: "1vh",
                    fontFamily: selectedTheme.fontHeader.fontFamily,
                    fontWeight: selectedTheme.fontHeader.fontWeight,
                    fontSize: selectedTheme.fontHeader.fontSize,
                    lineHeight: selectedTheme.fontHeader.lineHeight,
                    letterSpacing: selectedTheme.fontHeader.letterSpacing,
                    color: "white",
                    textTransform: selectedTheme.fontHeader.textTransform,
                    padding: "2vh",
                  }}
                >
                  {props.header}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} md={4} xl={4} lg={4}></Grid>
            </Grid>
          </AppBar>
        </ThemeProvider>
      )}
    </div>
  );
}

export default PageTopBar;
