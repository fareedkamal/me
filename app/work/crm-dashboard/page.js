import { Box, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';

export const metadata = {
  title: 'CRM Dashboard | Work',
};

const tech = ['React.js', 'Material UI'];

const Page = () => {
  return (
    <Section sx={{ py: 5 }}>
      <Box
        sx={{
          p: { sm: 5, xs: 2 },
          borderRadius: 4,
          bgcolor: styles.newPallette[1],
        }}
      >
        <Link href='/work'>
          <ArrowBack sx={{ color: 'white', cursor: 'pointer' }} />
        </Link>
        <Typography mb={1} color={'white'} fontSize={styles.fontSize.xlg}>
          Dashboard for CRM
        </Typography>

        <div className='mb-4 flex flex-wrap gap-4'>
          {tech.map((item) => (
            <div
              key={item}
              className='rounded-full text-[10px] sm:text-[15px] px-5 py-1 bg-blue-600 text-white font-medium'
            >
              {item}
            </div>
          ))}
        </div>

        <Box mb={3}>
          <Typography
            sx={{ whiteSpace: 'pre-line' }}
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            I contributed to the development of a custom dashboard tailored for
            a CRM portal, significantly enhancing user experience and
            accessibility to multiple functionalities within the application.
            <br />
            <br />
            Requirements: Client required a multi-functional dashboard interface
            to augment their existing management portal. The task involved a
            thorough review of the entire project, understanding existing code,
            and identifying key functionalities for developing custom components
            for dashboard.
            <br />
            <br />
            Solution: I delivered a customized dashboard solution seamlessly
            integrated with APIs to efficiently handle database interactions.
            The dashboard incorporates features such as meeting scheduling,
            real-time document status checking, and functionality to download
            and list items from various database models, providing users with a
            centralized and streamlined experience.
          </Typography>
        </Box>
        {images.map((img) => (
          <Box
            key={img}
            component={'img'}
            src={img}
            sx={{
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        ))}
      </Box>
    </Section>
  );
};

const images = ['/me/work/crm-dashboard/page-screenshot.png'];

export default Page;
