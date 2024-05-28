import { CardContent, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import React, { PropsWithChildren } from "react";

interface CardsProps {
  title: string;
}

const containerSx = {
  height: "264px",
};

const Cards: React.FC<PropsWithChildren<CardsProps>> = (props) => {
  const { children, title } = props;
  return (
    <Card sx={containerSx}>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default Cards;
