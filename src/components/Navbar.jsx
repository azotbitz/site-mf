import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import {Link} from "react-router-dom";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobileMenu({...mobileMenu, [anchor]: open});
  }

  const list = (anchor) => (
      <Box sx={{width: anchor === "top" || anchor === "bottom" ? "auto" : 180}}
           role="presentation"
           onClick={toggleDrawer(anchor, false)}
           onKeyDown={toggleDrawer(anchor, false)}>
        <List>
          {
                  <ListItem key={links["1"].name} disablePadding>
                        <ListItemButton component={Link} to={links["1"].link}>
                          <ListItemIcon>
                            {links["1"].name && <HomeIcon/>}
                          </ListItemIcon>
                          <ListItemText primary={links["1"].name}/>
                        </ListItemButton>
                  </ListItem>
              }
          {
            <ListItem key={links["2"].name} disablePadding>
              <ListItemButton component={Link} to={links["2"].link}>
                <ListItemIcon>
                  {links["2"].name && <ListAltIcon/>}
                </ListItemIcon>
                <ListItemText primary={links["2"].name}/>
              </ListItemButton>
            </ListItem>
          }
          {
            <ListItem key={links["3"].name} disablePadding>
              <ListItemButton component={Link} to={links["3"].link}>
                <ListItemIcon>
                  {links["3"].name && <FeaturedPlayListIcon/>}
                </ListItemIcon>
                <ListItemText primary={links["3"].name}/>
              </ListItemButton>
            </ListItem>
          }
          {
            <ListItem key={links["4"].name} disablePadding>
              <ListItemButton component={Link} to={links["4"].link}>
                <ListItemIcon>
                  {links["4"].name && <ContactsIcon/>}
                </ListItemIcon>
                <ListItemText primary={links["4"].name}/>
              </ListItemButton>
            </ListItem>
          }
        </List>
      </Box>
  )

  const NavLink = styled(Typography)(({ theme }) => ({
    color: "#4f5361",
    cursor: "pointer",
    "&:hover": {
      color: "#ffffff"
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
  }));

  return <NavbarContainer sx={{}}>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <CustomMenuIcon onClick={toggleDrawer("left", true)}/>
        <Drawer anchor="left" open={mobileMenu["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
        <Link style={{textDecoration: "none"}} to={links["1"].link}>
          <NavbarLogo src={logoImg} style={{width: "165px"}} alt="logo"/>
        </Link>
      </Box>

      <NavbarLinksBox>
        <Link style={{textDecoration: "none"}} to={links["1"].link}><NavLink variant="body1">Главная</NavLink></Link>
        <Link style={{textDecoration: "none"}} to={links["2"].link}><NavLink variant="body1">О нас</NavLink></Link>
        <Link style={{textDecoration: "none"}} to={links["3"].link}><NavLink variant="body1">Новости</NavLink></Link>
        <Link style={{textDecoration: "none"}} to={links["4"].link}><NavLink variant="body1">Контакты</NavLink></Link>
      </NavbarLinksBox>

  </NavbarContainer>;
};

export default Navbar;
