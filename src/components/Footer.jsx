import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/instagram.png";
import twitterIcon from "../media/vk.png";
import linkedinIcon from "../media/social.png";
import {Link} from "react-router-dom";

const Footer = () => {

  const links = {
    1: {
      name: "Главная",
      link: "/"},
    2: {
      name: "О нас",
      link: "/about"},
    3: {
      name: "Новости",
      link: "/news"},
    4: {
      name: "Контакты",
      link: "/contact"
    }
  };

  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#e2e2e7",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#7a7a7e"
    },
  }));

  return <Box sx={{backgroundColor: "#8a8781", pt: 8}}>
    <CustomContainer>
      <CustomContainer>
        <Box sx={{py: 3}}>
          <Typography sx={{
            fontSize: "20px",
            color: "#fff",
            fontWeight: "700",
            mb: 2
          }}>
            Меню сайта
          </Typography>

          <Link style={{textDecoration: "none"}} to={links["1"].link}><FooterLink>Главная</FooterLink></Link>
          <br />
          <Link style={{textDecoration: "none"}} to={links["2"].link}><FooterLink>О нас</FooterLink></Link>
          <br />
          <Link style={{textDecoration: "none"}} to={links["3"].link}><FooterLink>Новости</FooterLink></Link>
          <br />
          <Link style={{textDecoration: "none"}} to={links["4"].link}><FooterLink>Контакты</FooterLink></Link>
        </Box>


        <Box sx={{py: 3}}>
          <Typography sx={{
            fontSize: "20px",
            color: "#fff",
            fontWeight: "700",
            mb: 2
          }}>
            Будьте на связи
          </Typography>

          <Typography sx={{
            fontSize: "16px",
            color: "#e2e2e7",
            fontWeight: "500",
            mb: 2
          }}>
            Подписывайтесь на нас в социальных сетях
          </Typography>
          <IconBox>
            <Link to="https://instagram.com/bugaistudio"><img src={fbIcon} alt="instagramIcon" style={{cursor: "pointer", filter: "invert(1)", width: "70%"}}/></Link>
            <Link to="https://vk.com/bugaistudio"><img src={twitterIcon} alt="vkIcon" style={{cursor: "pointer", filter: "invert(1)", width: "70%"}}/></Link>
            <Link to="https://www.youtube.com/@bugaistudio"><img src={linkedinIcon} alt="youtubeIcon" style={{cursor: "pointer", filter: "invert(1)", width: "70%"}}/></Link>
          </IconBox>
        </Box>
      </CustomContainer>
    </CustomContainer>
    <Box sx={{mt: 8, pl: 3, py: 3, pr: 3, textAlign: "center", display: "flex", justifyContent: "center", backgroundColor: "#5d5855"}}>
      <Typography sx={{fontSize: "12px", fontWeight: "700", color: "#fff"}}>
        Copyright © 2023 Vasily Kulikov. All Rights Reserved.
      </Typography>
    </Box>
  </Box>;
};

export default Footer;
