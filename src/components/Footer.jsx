import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid, Hidden, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import { white } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XM1 from "../images/XM1.png";
import Vector2 from "../images/Vector 2.png";
import Vector3 from "../images/Vector 3.png";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#00142D",
        // paddingY: 2,
        overflow: "hidden",
      }}
    >
      <Container marginInline={2} sx={{ color: "white" }}>
        <Grid container spacing={2} sx={{ marginInline: "0px" }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">
              <img src={XM1}></img>
            </Typography>
            <Typography variant="body2">
              Our technical intelligence can put you on the fast track to
              success. That’s the promise from XM Technologies.
            </Typography>
            <Typography variant="body2">Follow us on Social media!</Typography>
            <Typography variant="body2">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Navigation</Typography>
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Services</Typography>
            <Typography variant="body2">Portfolio</Typography>
            <Typography variant="body2">jobs</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Services</Typography>
            <Typography variant="body2">Web Devlopment</Typography>
            <Typography variant="body2">Digital Marketing</Typography>
            <Typography variant="body2">Application Devlopment</Typography>
            <Typography variant="body2">E-Commerce Solution</Typography>
            <Typography variant="body2">Backup & Security</Typography>
            <Typography variant="body2">
              Enterprise Software Services
            </Typography>
            <Typography variant="body2">IT Support</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5">Get in touch</Typography>
            <Typography variant="body2">
              <LocationOnIcon /> 207, Dhara trade center, Mahadev Chowk, Mota
              varachha, Surat, Gujarat 394101
            </Typography>
            <Typography variant="body2">
              <LocalPhoneIcon /> (281) 624-6768
            </Typography>
            <Typography variant="body2">
              <EmailIcon /> info@xmtechnologoies.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <img
        src={Vector2}
        style={{ position: "absolute", right: 0, bottom: 0 }}
      />
      <img src={Vector3} />
    </Box>
  );
}
