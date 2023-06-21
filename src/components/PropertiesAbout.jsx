import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import picture1 from "../media/picture1.png"
import picture2 from "../media/picture2.png"
import picture3 from "../media/picture3.png"
import picture4 from "../media/picture4.png"


const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(4),
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  }));

  return <Box sx={{backgroundColor: "#c86e39", py: 10, minHeight: "100vh"}}>
    <Container>
      <PropertiesTextBox>
        <Typography sx={{fontSize: "35px", fontWeight: "bold", color: "#ffffff"}}>
          Хватит разговоров
        </Typography>
        <Typography sx={{fontSize: "16px", mt: 1, color: "#fafafa"}}>
          Просто взгляните на работы
        </Typography>
      </PropertiesTextBox>
      <PropertiesBox>
        <img style={{borderRadius: '0.5rem',
          filter: 'drop-shadow(black 2px 4px 6px)', width: "100%"}} src={picture1} alt={"picture1"}/>
      </PropertiesBox>
      <PropertiesBox>
        <img style={{borderRadius: '0.5rem',
          filter: 'drop-shadow(black 2px 4px 6px)', width: "100%"}} src={picture2} alt={"picture2"}/>
      </PropertiesBox>
      <PropertiesBox>
        <img style={{borderRadius: '0.5rem',
          filter: 'drop-shadow(black 2px 4px 6px)', width: "100%"}} src={picture3} alt={"picture3"}/>
      </PropertiesBox>
      <PropertiesBox>
        <img style={{borderRadius: '0.5rem',
          filter: 'drop-shadow(black 2px 4px 6px)', width: "100%"}} src={picture4} alt={"picture4"}/>
      </PropertiesBox>
    </Container>
  </Box>;
};

export default Properties;
