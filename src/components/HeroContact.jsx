import { Box, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";


const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(15),
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: theme.spacing(3),
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#5d5855",
    fontWeight: "bold",
    margin: theme.spacing(4,0,4,0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    }
  }));

  const ContactLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7a7a7e",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#e2e2e7"
    },
  }));

  return <Box sx={{backgroundColor: "#ffcc6b", minHeight: "100vh"}}>
      <Container component={"div"} maxWidth="lg">
        <Navbar />
          <CustomBox>
            <Box sx={{ flex: "1.25" }}>
              <Title variant="h1">
                  Контакты
              </Title>
              <Typography variant="body2" sx={{ fontSize: "16px", color: "#969187", fontWeight: "500", mt: 5, mb: 2}}>
                Cайт художника и преподавателя по живописи Бугай Михаила Федоровича.
              </Typography>
            </Box>
          </CustomBox>
        <CustomBox>
        <Box sx={{flex: "1.5"}}>
          <Typography variant="body2" sx={{ fontSize: "20px", color: "#504e4d", fontWeight: "700"}}>
            Связь через личного секретаря - Екатерину.
          </Typography>
        </Box>
        </CustomBox>
        <CustomBox>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#5d5855", fontWeight: "500", mt: 5, mb: 4}}>
              Телефон
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="tel:+7-977-532-1463"><ContactLink>+7-977-532-1463</ContactLink></a>
          </Box>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#5d5855", fontWeight: "500", mt: 5, mb: 4}}>
              E-mail
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="mailto: mail@bugai-mf.ru"><ContactLink>mail@bugai-mf.ru</ContactLink></a>
          </Box>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#5d5855", fontWeight: "500", mt: 5, mb: 4}}>
              Telegram
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="https://t.me/art_ekaterinakulikova"><ContactLink>@art_ekaterinakulikova</ContactLink></a>
          </Box>
          <Box sx={{flex: "1.5"}}>
            <Typography variant="body1" sx={{ fontSize: "24px", color: "#5d5855", fontWeight: "500", mt: 5, mb: 4}}>
              WhatsApp
            </Typography>
            <a style={{color: "#969187", textDecoration: "none"}} href="https://wa.me/9099535308"><ContactLink>+7-909-953-5308</ContactLink></a>
          </Box>
        </CustomBox>
      </Container>
    </Box>
};

export default Hero;
