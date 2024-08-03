import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Paper,
} from "@mui/material";
// import{PlanTrip,CodeNameGenerator,OptionsTradingGuide,Storyteller} from "@mui/icons-material";

const Chatbot = () => {
  const [message, setMessage] = useState("");

  const data = [
    { itemName: "Plan a trip", subtitle: "Offer to plan travel" },
    { itemName: "Code name Generator", subtitle: "Offer to Code" },
    { itemName: "Options Trading Guide", subtitle: "Offer to Option Trading" },
    { itemName: "StoryTeller", subtitle: "Offer to Story Telling" },
  ];

  let handleClick = (task) => {
    switch (task) {
      case "Plan a trip":
        setMessage("Where would you like to Travel?");
        break;
        case "Code name Generator":
        setMessage("Which code you want to generate?");
        break;
        case "Options Trading Guide":
        setMessage("Where would you like to invest?");
        break;
        case "StoryTeller":
        setMessage("Which story do you like?");
        break;
    }
  };
  return (
    <>
      <Box sx={{ p: 2, maxWidth: 600, mx: "auto", mt: 5 }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            ChatBot Test Application
          </Typography>
          <Box>
            <Typography variant="body1">{message}</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            {data?.map((itm, idx) => (
              <Card
                sx={{ mb: 2 }}
                onClick={() => handleClick(itm.itemName)}
                key={idx}
                style={{cursor:"pointer"}}
              >
                <CardContent>
                  <span style={{ backgroundColor: "black" }}>
                    <img
                      src="https://169pi.ai/wp-content/uploads/2024/02/Main-Logo-New-e1707391239942.webp"
                      height={50}
                      width={50}
                    />
                  </span>
                  <Typography variant="h6">{itm.itemName}</Typography>
                  <Typography variant="body6">{itm.subtitle}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          
        </Paper>
      </Box>
    </>
  );
};

export default Chatbot;
