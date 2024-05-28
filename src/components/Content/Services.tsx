import { List, ListItem, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Cards from "./Cards";
import AboutUs from "./AboutUs";

interface Props {
  // Define your component's props here
}

const cardContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // gap: "1rem",
};

// const header = "About Us";

const services = [
  {
    title: "Commercial Cleaning",
    services: [
      "Office Buildings",
      "Retail Spaces",
      "Warehouses",
      "Medical Facilities",
    ],
  },
  {
    title: "Residential Cleaning",
    services: ["Apartments", "Houses", "Condominiums"],
  },
];

const specialServices = {
  title: "Special Services",
  services: [
    "Move-In/Move-Out Cleaning",
    "One-Time Cleaning",
    "Regular Cleaning (Weekly, Bi-Weekly, Monthly)",
    "Special Occasion Cleaning (Parties, Events, Holidays)",
  ],
};

const Services: React.FC<Props> = () => {
  return (
    <Box>
      <AboutUs />
      {/* <Typography variant="h4">{header}</Typography> */}
      <Box sx={cardContainerSx}>
        {services.map((s) => (
          <Cards key={s.title} title={s.title}>
            <List>
              {s.services.map((i) => (
                <ListItem key={`${s.title}-${i}`}>{i}</ListItem>
              ))}
            </List>
          </Cards>
        ))}
      </Box>
      <Box>
        <Cards key={specialServices.title} title={specialServices.title}>
          <List>
            {specialServices.services.map((i) => (
              <ListItem key={`${specialServices.title}-${i}`}>{i}</ListItem>
            ))}
          </List>
        </Cards>
      </Box>
    </Box>
  );
};

export default Services;
