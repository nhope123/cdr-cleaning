import { Box, Button, Card, Container, List, ListItem, ListItemText, SxProps, Theme, Typography } from "@mui/material";
import { CleaningServicesRounded, EmailRounded, PhoneRounded } from "@mui/icons-material";
import ImageFile from './assets/unsplash.jpg';


const containerSx: SxProps<Theme> = { 
  color: '#E91E63',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  mb: 2
};

const card1Sx: SxProps<Theme> = { 
  p: 4, 
  mb: 4,
  display: 'flex',

  background: 'linear-gradient(135deg, #fff 60%, #E91E63 60%)',
  position: 'relative',
  overflow: 'hidden',
};

const firstSx: SxProps<Theme> = { 
  display: 'grid', 
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  gap: 4,
  alignItems: 'center'
};

const card2Sx: SxProps<Theme> = { 
  p: 4, 
  bgcolor: '#E91E63', 
  color: 'white',
};

const emailSx: SxProps<Theme> = { 
  bgcolor: 'white',
  color: '#E91E63',
  '&:hover': {
    bgcolor: 'rgba(255,255,255,0.9)'
  }
};

const phoneSx: SxProps<Theme> = { 
  bgcolor: 'white',
  color: '#E91E63',
  '&:hover': {
    bgcolor: 'rgba(255,255,255,0.9)'
  }
};

const footerSx: SxProps<Theme> = { 
  display: 'flex', 
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 3,
  justifyContent: 'center',
  alignItems: 'center'
};

const serviceTextSx: SxProps<Theme> = { 
  color: '#E91E63',
  fontWeight: 'bold',
  mb: 3
};

const rootSx: SxProps<Theme> = { 
  justifyContent: 'space-between', 
  py: 4,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme => theme.palette.background.default,
  height: '100% !important',
};


const imageSx: SxProps<Theme> = { 
  position: 'relative', 
  height: '400px', 
  width: '400px',
  '& img': {
    border: 0,
    borderRadius: '8px',
    boxShadow: 2,
  },
};
const AIMS = `"We aim to meet your cleaning needs."`;
const BRANDING = 'CDR Cleaning Services';
const EMAIL = `cdrcleaningservices1111@gmail.com`;
const MOTTO = `CLEANING DONE RIGHT`;
const PHONE = `905.790.1295`;
const QUOTE = `FOR YOUR FREE QUOTE CONTACT US`;
const SERVICE_TYPE = `Commercial & Residential Cleaning Services`;
const SERVICES = [
  'Office Cleaning',
  'Home Cleaning',
  'Move In/Out Cleaning',
  'Post Construction Cleaning'
];

const App = () => {

  return (
    <Container maxWidth="lg" sx={rootSx}>
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={containerSx}
        >
          <CleaningServicesRounded />
          {BRANDING}
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
          {MOTTO}
        </Typography>
      </Box>

      <Card sx={card1Sx}>
        <Box sx={firstSx}>
          <Box>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={serviceTextSx}
            >
              {SERVICE_TYPE}
            </Typography>
            
            <List>
              {SERVICES.map((text, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemText 
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: '1.2rem',
                      fontWeight: index === 3 ? 'bold' : 'normal'
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Typography 
              variant="h6" 
              sx={{ 
                fontStyle: 'italic',
                my: 3
              }}
            >
              {AIMS}
            </Typography>
          </Box>

          <Box sx={imageSx}>
            <img
              src={ImageFile}
              alt="Cleaning supplies"
              width={'400px'}
              height={'400px'}
              
            />
          </Box>
        </Box>
      </Card>

      <Card sx={card2Sx}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          {QUOTE}
        </Typography>
        
        <Box sx={footerSx}>
          <Button
            variant="contained"
            startIcon={<PhoneRounded />}
            sx={phoneSx}
            href={`tel:${PHONE}`}
          >
            {PHONE}
          </Button>
          
          <Button
            variant="contained"
            startIcon={<EmailRounded />}
            sx={emailSx}
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}
          </Button>
        </Box>
      </Card>
    </Container>
  )
};

export default App;
