import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return <Box sx={{backgroundColor: "#fff", py: 10, minHeight: "100vh"}}>
    <Container>
      <PropertiesTextBox>
        <Typography sx={{fontSize: "35px", fontWeight: "bold", color: "#000000"}}>
          Работы учеников
        </Typography>
        <Typography sx={{fontSize: "16px", mt: 1, color: "#5a6473"}}>
          Посмотрите какую красоту Вас научат творить
        </Typography>
      </PropertiesTextBox>

      <PropertiesBox>
        {properties.map((property) => (
          <House
              key={property.id}
              img={property.img}
              price={property.price}
              address={property.address}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              space={property.space}/>
        ))}
      </PropertiesBox>
    </Container>
  </Box>;
};

export default Properties;
