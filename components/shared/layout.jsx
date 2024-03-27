import { Box } from '@mui/material';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { styles } from '@/style/styles';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar />
      <Box
        sx={{
          flex: 1,
          pt: 2,
          bgcolor: styles.newPallette[0],
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
