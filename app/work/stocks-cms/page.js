import { Box, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

const tech = [
  'React.js',
  'Material UI',
  'Ag Grid',
  'CK Editor',
  'Node.js',
  'My SQL',
  'Stripe',
  'AWS',
  'SaaS',
];

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
          CMS for Equity Research
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
            It is a web platform that streamlines stock analysis and providing
            convenient access to comprehensive reports from the Oslo Stock
            Exchange. The focus was on enhancing the user experience through a
            dedicated web portal, reducing reliance on email notifications for
            report access.
            <br />
            <br />
            Requirements: The client required a sophisticated solution,
            featuring a user-friendly web portal, streamlined subscription
            management, exclusive stock insights, and seamless Stripe
            integration for secure payment processing. Additionally, an
            administrative interface was needed for user management, report
            uploads, and subscription-related tasks.
            <br />
            <br />
            Solution: I developed a custom platform that included a seamless
            user authentication flow, an intuitive admin dashboard for efficient
            management, Stripe integration for secure transactions, a secure
            system for report uploads, and a comprehensive database management
            system
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
              mb: 5,
            }}
          />
        ))}
      </Box>
    </Section>
  );
};

const images = [
  '/me/work/stocks-cms/1.png',
  '/me/work/stocks-cms/2.png',
  '/me/work/stocks-cms/3.png',
  '/me/work/stocks-cms/4.png',
  '/me/work/stocks-cms/5.png',
  '/me/work/stocks-cms/6.png',
  '/me/work/stocks-cms/7.png',
  '/me/work/stocks-cms/8.png',
];

export default Page;
