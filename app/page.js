import Hero from '@/components/Hero/Hero';
import History from '@/components/History/History';
import Message from '@/components/Message/Message';
import Portfolio from '@/components/Portfolio/portfolio';
import Skills from '@/components/Skills/Skills';

import { Box } from '@mui/material';

export const metadata = {
  title: 'Fareed Kamal | Full Stack Developer',
};

const RootPage = () => {
  return (
    <Box>
      <Hero />
      <Skills />
      <History />
      <Portfolio />
      <Message />
    </Box>
  );
};

export default RootPage;
