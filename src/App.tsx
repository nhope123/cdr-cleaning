import { Box, Button, Card, Container, List, ListItem, ListItemText, ListItemTextProps, SxProps, Theme, Typography } from "@mui/material";
import { CleaningServicesRounded, EmailRounded, PhoneRounded } from "@mui/icons-material";
import ImageFile from './assets/unsplash.jpg';


const containerSx: SxProps<Theme> = { 
  color: '#E91E63',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2,
  mb: 2,
  overflowY: 'auto',
  overflowX: 'hidden', 
};

const card1Sx: SxProps<Theme> = { 
  p: { xs: 1, md: 4 }, 
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  background: 'linear-gradient(135deg, #fff 60%, #E91E63 60%)',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: 6,
};

const firstSx: SxProps<Theme> = { 
  display: 'flex', 
  flexDirection: { xs: 'column', md: 'row' },
  gap: 4,
  alignItems: 'center',
  width: '100%',
  justifyContent: { xs: 'flex-start', md: 'space-evenly' },
  py: 2,
  px: { xs: 1, md: 2 },
};

const card2Sx: SxProps<Theme> = { 
  px: { xs: 1, md: 4 },
  py: 4, 
  bgcolor: '#E91E63', 
  color: 'white',
  width: '100%',
  boxShadow: 6,
};

const emailSx: SxProps<Theme> = { 
  bgcolor: 'white',
  color: '#E91E63',
  maxWidth: '90%',
  '& p': {
    textWrap: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  '&:hover': {
    bgcolor: 'rgba(255,255,255,0.9)'
  }
};

const phoneSx: SxProps<Theme> = { 
  bgcolor: 'white',
  color: '#E91E63',
  maxWidth: '100%',
  '&:hover': {
    bgcolor: 'rgba(255,255,255,0.9)'
  }
};

const footerSx: SxProps<Theme> = { 
  display: 'flex', 
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 3,
  justifyContent: 'center',
  alignItems: 'center',
  width: { xs: '100%', sm: 'auto' },
};

const serviceTextSx: SxProps<Theme> = { 
  color: '#E91E63',
  fontWeight: 'bold',
  mb: 3,
  textWrap: 'wrap',
  textAlign: {xs: 'center', md: 'left'},
};

const rootSx: SxProps<Theme> = { 
  justifyContent: 'space-between', 
  px: { xs: 1, md: 3 },
  py: 3,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme => theme.palette.background.default,
  minHeight: '100%',
  overflowY: 'auto',
  gap: {xs: 6, md: 4},
};

const fontSizeSx: SxProps<Theme> = {
  fontSize: { xs: '1rem', md: '1.25rem' }
};
const imageSx: SxProps<Theme> = { 
  position: 'relative', 
  height: '400px', 
  width: { xs: '100%', md: '400px'},
  '& img': {
    border: 0,
    borderRadius: '8px',
    boxShadow: 10,
    width: '100%',
    height: '100%',
  },
};

const listSx: SxProps<Theme> = {
  textAlign: { xs: 'center', md: 'left' },
};

const aimSx: SxProps<Theme> = { 
  fontStyle: 'italic',
  my: 3,
  ...fontSizeSx,
  textAlign: { xs: 'center', md: 'left' },
  fontWeight: { xs: 'bold', md: 'normal' },
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
          sx={{ 
            ...containerSx, 
            fontSize: { xs: '1.5rem', md: '2.5rem' },
          }}
        >
          <CleaningServicesRounded />
          {BRANDING}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: 'text.secondary',
            ...fontSizeSx,
          }}>
          {MOTTO}
        </Typography>
      </Box>

      <Card sx={card1Sx}>
        <Box sx={firstSx}>
          <Box>
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{
                ...serviceTextSx,
                ...fontSizeSx,                
              }}
            >
              {SERVICE_TYPE}
            </Typography>
            
            <List>
              {SERVICES.map((text, index) => (
                <ListItem key={index} sx={{ py: 1 }}>
                  <ListItemText 
                    primary={text}
                    primaryTypographyProps={
                      listSx as ListItemTextProps['primaryTypographyProps']
                    }
                  />
                </ListItem>
              ))}
            </List>

            <Typography 
              variant="h6" 
              sx={aimSx}
            >
              {AIMS}
            </Typography>
          </Box>

          <Box sx={imageSx}>
            <img
              src={ImageFile}
              alt="Cleaning supplies"              
            />
          </Box>
        </Box>
      </Card>

      <Card sx={card2Sx}>
        <Typography 
          variant="h5" 
          sx={{ 
            mb: 3, 
            textAlign: 'center',
            fontSize:  theme => ({ 
              xs: `${theme.typography.h6.fontSize}`, 
              md: `${theme.typography.h5.fontSize}`,
             }) 
            
          }}>
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
            <Typography>
              {EMAIL}
            </Typography>
          </Button>
        </Box>
      </Card>
    </Container>
  )
};

export default App;
