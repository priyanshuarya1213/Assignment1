import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

// Images Import

import Mockup from "../images/Nanums-Mockup 1.png";
import Human from "../images/Human-touch 1@2x.png";
import Indeed from "../images/indeed 1.png";
import Stanlee from "../images/The-Stanlee-foundation 1.png";
import Dmrc from "../images/Dmarc 1.png";
import Dani from "../images/Dani-Felt 1.png";
import Sallie from "../images/Sallie-Math-Tutor_ 1.png";
import code from "../images/code 1.png";
import cart from "../images/cart 1.png";
import content from "../images/content 1.png";
import Photo from "../images/photo-1502937406922-305bb2789e95 2.png";
import Photo2 from "../images/97 3.png";
import Phtot3 from "../images/image_1 1.png";
import Offer from "../images/offerimg.png";
import Ellip18 from "../images/Ellipse 18.png";
import Ellip19 from "../images/Ellipse 19.png";
import Ellip20 from "../images/Ellipse 20.png";

// Icon Import

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Home = () => {
  return (
    <>
      <Header />

      {/******************************************** Our Company **********************************/}

      <Box
        sx={{
          width: "100%",
          paddingY: 2,
          marginBlock: 10,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            overflow: "hidden",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>
                <img
                  src={Ellip18}
                  style={{ width: "100px", height: "100px" }}
                />
              </Typography>
              <Typography
                variant="h3"
                sx={{ marginTop: "30px", marginInline: "10%" }}
              >
                <b>Web Design and Development Company</b>
              </Typography>
              <Typography sx={{ marginInline: "80%", marginTop: "5px" }}>
                <img src={Ellip20} style={{ width: "20px", height: "20px" }} />
              </Typography>
              <Typography
                paragraph
                sx={{ marginTop: "5px", marginInline: "10%" }}
              >
                We create clean and creative websites that are professional and
                help you generate more visitors and revenue.
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: "10px", marginInline: "10%" }}
              >
                Get Started
              </Button>
              <Typography sx={{ marginTop: "30px", marginInline: "30%" }}>
                <img src={Ellip19} style={{ width: "60px", height: "60px" }} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={Mockup} alt="Mockup" width="100%" height="auto" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/********************************* Our Client ****************************************/}

      <Box
        sx={{
          width: "100%",
          paddingY: 2,
          marginBlock: 10,
        }}
      >
        <Box sx={{ marginInline: "20%" }}>
          <Grid container spacing={5}>
            <Grid>
              <img src={Human} style={{ height: "61.5px" }} />
            </Grid>
            <Grid>
              <img src={Indeed} alt="" />
            </Grid>
            <Grid>
              <img src={Stanlee} alt="" />
            </Grid>
            <Grid>
              <img src={Dmrc} alt="" />
            </Grid>
            <Grid>
              <img src={Dani} alt="" />
            </Grid>
            <Grid>
              <img src={Sallie} alt="" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/*************************************** How its going ***********************************/}

      <Box>
        <Container sx={{ marginBottom: "10rem" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            <b>How it is going?</b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "25%",
            }}
          >
            We offer Professional web design services at affordable rates to
            help your business attract more visitors and keep them on your
            sites!!
          </Typography>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Info Gathering</b>
              </Typography>

              <Typography variant="body1">
                Need a good understanding of what are your business goals and
                dreams.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Planning</b>
              </Typography>

              <Typography variant="body1">
                We will help you to decide what technologies should be
                implemented.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Design</b>
              </Typography>

              <Typography variant="body1">
                It’s time to determine the look and feel of your site.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Development</b>
              </Typography>

              <Typography variant="body1" sx={{ marginInline: "25%" }}>
                Writing valid HTML / CSS code that complies to current web
                standards.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ margin: "3rem" }}>
              <Typography variant="h6">
                <b>Testing and Launch</b>
              </Typography>
              <Typography variant="body1">
                Testing of the complete functionality of forms and scripts etc.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/********************************** Our Services ********************************/}

      <Box sx={{ overflow: "hidden" }}>
        <Container sx={{ marginBottom: "10rem", marginInline: "10%" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            <b>Our Services</b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "22%",
            }}
          >
            We offer Professional web design services at affordable rates to
            help your business attract more visitors and keep them on your
            sites!!
          </Typography>

          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={code}></img>
              <Typography variant="h6">Web Development</Typography>

              <Typography variant="body1">
                Online impression takes time it's exactly what's you need . we
                build your dream website using Node, Angular, PHP, and Laravel.
              </Typography>

              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={cart}></img>
              <Typography variant="h6">Digital Marketing</Typography>
              <Typography variant="body2">
                High-quality Word press theme and the team who is behind the
                project had helped me a lot 100% recommended.
              </Typography>
              <Button
                sx={{
                  color: "#FFF",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
                variant="contained"
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6">Application Development</Typography>

              <Typography variant="body2">
                React Native, Flutter, Native Android, Native iOS. Our Team
                Thrives on methodological and Technical Challanges.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6">E- Commerce Solution</Typography>

              <Typography variant="body2">
                Provide E-commerce websites and Applications for Companies to
                see online. e- commerce websites with online Payment solutions
                are our speciality.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6">Backup & Security</Typography>

              <Typography variant="body2">
                SMBs succeed online with us. Security and Backup are included.
                our daily backups give you 100% security.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={content}></img>
              <Typography variant="h6">Enterprise Software Services</Typography>

              <Typography variant="body2">
                Our goal is to launch enterprise or small business software
                worldwide. Our goal is to provide the best software service.
              </Typography>
              <Button
                sx={{
                  color: "black",
                  border: "1px solid black",
                  marginBlock: "2rem",
                }}
              >
                Learn More
              </Button>
            </Grid>

            <Grid container justifyContent="center" alignItems="center">
              <Grid
                item
                xs={12}
                sm={3}
                sx={{ border: "1px solid black", margin: "3rem" }}
              >
                <img src={content}></img>
                <Typography variant="h6">IT Support</Typography>

                <Typography variant="body2">
                  We maintain Websites for small, medium and large business your
                  existing website is regurally updated.
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    marginBlock: "2rem",
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/************************************Numbers **************************************/}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#FFF",
          paddingY: 2,
          marginBlock: 15,
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginInline: "25%", marginBottom: "2%" }}
        >
          <b>Intelligent Websites That Work Overtime For Marketing Results </b>
        </Typography>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#00142D",
            paddingY: 2,
          }}
        >
          <Container marginInline={2} sx={{ color: "white" }}>
            <Grid container spacing={2} sx={{ marginInline: "0px" }}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "41%" }}>
                  25+
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "40%" }}>
                  Years of Experience
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  38+
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Expert Team Member
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  3K+
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Project Complete
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h4" sx={{ marginInline: "36%" }}>
                  99%
                </Typography>
                <Typography variant="body2" sx={{ marginInline: "35%" }}>
                  Clients Satisfied
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/*********************************** What we offer ***************************************/}

      <Box>
        <Container sx={{ marginBottom: "10rem" }}>
          <Typography
            paragraph
            sx={{ textAlign: "center", color: "blue" }}
            gutterBottom
          >
            <b>our services</b>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "25%",
            }}
          >
            <b>What We Offer</b>
          </Typography>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Box>
                <Typography paragraph>
                  <b>Awesome Ideas</b>
                </Typography>

                <Typography paragraph>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>

              <Box>
                <Typography paragraph>
                  <b>Web Solution</b>
                </Typography>
                <Typography variant="body1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box>
                <img src={Offer} width={250} height={250}></img>
              </Box>
            </Grid>

            <Grid item xs={12} sm={3} sx={{ margin: "3rem" }}>
              <Box>
                <Typography paragraph>
                  <b>Planning Settings</b>
                </Typography>
                <Typography paragraph>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>

              <Box>
                <Typography paragraph>
                  <b>Client Market</b>
                </Typography>
                <Typography variant="body1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/***************************** testimonial **********************************************/}

      <Box>
        <Container sx={{ marginBottom: "10rem" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }} gutterBottom>
            <b>Testimonials</b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "25%",
            }}
          >
            What our Customers are Saying
          </Typography>
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={Photo}></img>
              <Typography variant="h6">
                <b>Tim Brown</b>
              </Typography>
              <Typography paragraph>Aora Company</Typography>

              <Typography variant="body1">
                Online impression takes time it's exactly what's you need . we
                build your dream website using Node, Angular, PHP, and Laravel.
                <Rating name="half-rating" defaultValue={2.5} precision={5} />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={Photo2}></img>
              <Typography variant="h6">
                <b>Michael Vice</b>
              </Typography>
              <Typography>Bowl Room</Typography>

              <Typography variant="body2">
                High-quality Word press theme and the team who is behind the
                project had helped me a lot 100% recommended.
                <Rating name="half-rating" defaultValue={2.5} precision={5} />
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              sx={{ border: "1px solid black", margin: "3rem" }}
            >
              <img src={Phtot3}></img>
              <Typography variant="h6">
                <b>Lucy Raymond</b>
              </Typography>
              <Typography>Ive Logistic</Typography>

              <Typography variant="body2">
                High-quality Word press theme and the team who is behind the
                project had helped me a lot 100% recommended.
                <Rating name="half-rating" defaultValue={2.5} precision={5} />
              </Typography>
              <Typography></Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/*********************** * Contact ***************************/}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "Blue",
          paddingY: 2,
        }}
      >
        <Container marginInline={2} sx={{ color: "white" }}>
          <Grid container spacing={2} sx={{ marginInline: "0px" }}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h4">Contacts</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" sx={{ marginInline: "10%" }}>
                <LocalPhoneIcon /> (123)652-2344
              </Typography>
              <Typography variant="body2" sx={{ marginInline: "10%" }}>
                <EmailIcon /> info@xmtechnologoies.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" sx={{ marginInline: "20%" }}>
                <LocationOnIcon /> 207, Dhara trade center, Mahadev Chowk, Mota
                varachha, Surat 394101
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="body2" sx={{ marginInline: "20%" }}>
                <FacebookIcon sx={{ marginInline: "5%" }} />
                <TwitterIcon sx={{ marginInline: "5%" }} />
                <LinkedInIcon sx={{ marginInline: "5%" }} />
                <InstagramIcon sx={{ marginInline: "5%" }} />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ marginBottom: "5%" }}>
        <Paper sx={{ marginInline: "18%" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginTop: "2%" }}
            gutterBottom
          >
            <b>Still have questions?</b>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              marginBottom: " 2rem",
              marginInline: "25%",
            }}
          >
            We’re ready to answer your questions and jump start your project
          </Typography>
          <form style={{ marginInline: "10%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Phone Number" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Typography sx={{ marginInline: "40%", marginTop: "5%" }}>
              <Button variant="contained">Send Message</Button>
            </Typography>
          </form>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
