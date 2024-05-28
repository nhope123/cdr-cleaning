import { Box, Typography } from "@mui/material";
import React from "react";
import { email, phone } from "../sharedConstants";

const title = "For your Free Quote";

const CallToAction: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Typography>Call</Typography>
      <Typography component={"a"} href={`tel: ${phone}`}>
        {phone}
      </Typography>
      <Typography>or Email</Typography>
      <Typography component={"a"} href={`mailto: ${email}`}>
        {email}
      </Typography>
    </Box>
  );
};

export default CallToAction;
