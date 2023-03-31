import React from "react";
import { Box, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "20vh",
        backgroundColor: "black",
        padding: "40px",
        display: "flex",
        alignSelf: "flex-end",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <Box height="100%" display="flex" flexDirection="column" gap="10px">
        <Box display="flex" flexDirection="row" gap="10px">
          <EmailIcon fontSize="small" />
          <Typography color="white" fontSize="14px">
            nhalcala@Gmail.com
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap="10px">
          <PhoneIcon fontSize="small" />
          <Typography color="white" fontSize="14px">
            +65 85195287
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap="10px">
          <LinkedInIcon fontSize="small" />
          <Typography color="white" fontSize="14px">
            https://www.linkedin.com/in/nathaniel-alcala/
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap="10px">
          <YouTubeIcon fontSize="small" />
          <Typography color="white" fontSize="14px">
            https://www.youtube.com/@nat_alacarte
          </Typography>
        </Box>
      </Box>
      <Box
        height="100%"
        textAlign="end"
        display="flex"
        alignItems="end"
        maxWidth="370px"
      >
        <Typography color="white" fontSize="14px" variant="body3">
          "UnscriptedLogic" is an online alias that I often use for both
          recreational and professional use, however, do contact me before
          assuming any work is mine that's created under the same name.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
