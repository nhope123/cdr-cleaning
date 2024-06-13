import { CardContent, CardHeader, SxProps, Theme } from "@mui/material";
import Card from "@mui/material/Card";
import React, { PropsWithChildren } from "react";

interface CardsProps {
  title: string;
}

const containerSx: SxProps<Theme> = {
  minHeight: "282px",
  boxShadow: 2,
  maxWidth: "90%",
};

const headerSx: SxProps<Theme> = {
  color:  "primary.main",
  borderBottom: (theme) => `1px solid ${theme.palette.primary.main}`,
  textAlign: "center",
};

const Cards: React.FC<PropsWithChildren<CardsProps>> = (props) => {
  const { children, title } = props;
  return (
    <Card sx={containerSx}>
      <CardHeader sx={headerSx} title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Cards;
