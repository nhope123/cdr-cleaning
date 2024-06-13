import { Typography } from "@mui/material";
import React, { ReactNode } from "react";

type SocialMediaProps = {
  icon: ReactNode;
  link: string;
  color?: string;
  title?: string;
};



const SocialMedia: React.FC<SocialMediaProps> = ({ color, icon, link, title }) => {
  return (
    <Typography
      component={"a"}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: color,
        height: '1.25rem',
        width: '1.25rem',
      }}
      title={title}
    >
      {icon}
    </Typography>
  );
};

export default SocialMedia;
