import { Box, Divider, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';

const tech = [
  'React.js',
  'Next.js',
  'Material UI',
  'Tailwind CSS',
  'Node.js',
  'My SQL',
  'Google Cloud Platform',
  'Full Stack Development',
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
          Gmail Declutter App
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
            This app serves as a newsletter aggregator, offering convenient
            access to subscribed newsletters and personalized email content.
            Users can explore popular newsletter topics, bookmark interesting
            articles, and benefit from a streamlined platform for managing their
            email subscriptions.
            <br />
            <br />
            Requirements: Client required solution for an app that provides a
            dedicated feed for all subscribed newsletters, includes a discovery
            section to explore trending newsletter topics, and incorporates
            features such as bookmarking and content scraping from various
            sources.
            <br />
            <br />
            Solution: I successfully delivered a custom web application
            featuring Google authentication to access emails and identify
            subscribed newsletters. The design prioritizes a modern and
            user-friendly experience, and the app operates on a SaaS model,
            offering premium features to enhance the overall user experience.
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

const images = [
  '/me/work/newsletter/feed-desktop.png',
  '/me/work/newsletter/newsletter-page.png',
  '/me/work/newsletter/dark-mode.png',
];

export default Page;
