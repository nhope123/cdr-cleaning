import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

type SocialMediaProps = {
  icon: ReactNode;
  link: string;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ icon, link }) => {
  return (
    <Typography
      component={"a"}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Typography>
  );
};

export default SocialMedia;
