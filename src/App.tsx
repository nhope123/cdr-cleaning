import { Box, SxProps, Theme } from "@mui/material";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const containerSx: SxProps<Theme> = {
  
  width: "100vw",
  height: "100vh",
  backgroundPosition: "bottom left",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100vw 100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <Box sx={containerSx}>
      <Header />
      <Content />
      <Footer />
    </Box>
  );
};

export default App;
