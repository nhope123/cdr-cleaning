import { List, ListItem, SxProps, Theme } from "@mui/material";
import Box from "@mui/material/Box";
import wave from "../../assets/wave.svg";
import AboutUs from "./AboutUs";
import Cards from "./Cards";

const cardContainerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  gap: "48px",
};

const containerSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  background: "url(" + wave + ") no-repeat center",
  pb: 5,
};

const serviceSx: SxProps<Theme> = { 
  pt: {xs: '48px', md: 0},
  display: "flex",
  justifyContent: "center",
}

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

const Services= () => {
  return (
    <Box id="About Us" sx={containerSx}>
      <AboutUs />
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
      <Box sx={serviceSx}>
        <Cards key={specialServices.title} title={specialServices.title} >
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
