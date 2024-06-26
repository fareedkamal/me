import { Box, Stack, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import Link from 'next/link';
import ReservationApp from './reservation-app';

const portfolioCards = [
  {
    id: 1,
    title: 'E-commerce Landing Page',
    desc: 'E-commerce application with products category, cart invertory and checkout.',
    img: '/me/work/store-app.png',
    demo: 'https://fareedkamal.github.io/store-app',
  },
  {
    id: 2,
    title: 'Weather Application',
    desc: 'Just a reminder of how I started my journey as a developer. Back when implementing a single weather api was such a big deal for me.',
    img: '/me/work/weather-app.png',
    demo: 'https://fareedkamal.github.io/weather-app',
  },
];

const Portfolio = () => {
  return (
    <Section
      sx={{
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <StockCMS />
      <NewsletterApp />
      <CRM />
      <ReservationApp />
      {portfolioCards.map((card) => (
        <PortfolioCard key={card.id} data={card} />
      ))}
    </Section>
  );
};

const StockCMS = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        bgcolor: styles.newPallette[1],
      }}
    >
      <Stack
        sx={{
          p: 4,
          alignItems: 'center',
        }}
        direction={{ md: 'row', xs: 'column' }}
      >
        <Box flex={1} p={2}>
          <Box mb={2}>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
                fontSize: styles.fontSize.lg,
              }}
            >
              CMS for Equity Research
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              CMS to automate stock reports distribution. Onboared 100 email
              readers to 500+ active subscribed users on platform
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link
              target='_blank'
              href='https://tjuvholmen.club'
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                Visit Website
              </Box>
            </Link>
            <Link href='/work/stocks-cms' style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                Details
              </Box>
            </Link>
          </Stack>
        </Box>
        {/* <Box
          flex={1}
          sx={{
            bgcolor: styles.newPallette[3],
            p: 3,
            borderRadius: 4,
          }}
        >
          <Stack mb={2} direction={'row'}>
            <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
            <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
            <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
            <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
            <Star sx={{ color: 'white', fontSize: { sm: 30, xs: 15 } }} />
          </Stack>
          <Typography
            mb={2}
            fontSize={styles.fontSize.md}
            color={styles.newPallette[2]}
          >
            "I thoroughly enjoyed collaborating with Fareed. He possesses
            excellent communication skills, works swiftly, and demonstrates a
            commendable proficiency in the tasks he undertakes."
          </Typography>
          <Typography
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            Soren Zonouz - Founder Tjuvholmen
          </Typography>
        </Box> */}
        <Box
          component={'img'}
          src='/me/work/stocks-cms/screen.png'
          sx={{
            flex: 1,
            height: '350px',
            objectFit: 'cover',
          }}
        />
      </Stack>
    </Box>
  );
};

const PortfolioCard = ({ data }) => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        bgcolor: styles.newPallette[1],
      }}
    >
      <Stack
        sx={{
          p: 4,
          alignItems: { md: 'center', xs: 'start' },
        }}
        direction={{ md: 'row', xs: 'column' }}
      >
        <Box flex={1} p={2}>
          <Box mb={2}>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
                fontSize: styles.fontSize.lg,
              }}
            >
              {data.title}
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              {data.desc}
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link
              target='_blank'
              href={data.demo}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                Visit Website
              </Box>
            </Link>
            {/* <Link href='' style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                Details
              </Box>
            </Link> */}
          </Stack>
        </Box>
        <Box
          component={'img'}
          src={data.img}
          sx={{
            width: { md: '50%', xs: '100%' },
            height: { md: '350px', xs: 'unset' },
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: '10px',
          }}
        />
      </Stack>
    </Box>
  );
};

const CRM = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        bgcolor: styles.newPallette[1],
      }}
    >
      <Stack
        sx={{
          p: 4,
          alignItems: 'center',
        }}
        direction={{ md: 'row', xs: 'column' }}
      >
        <Box flex={1} p={2}>
          <Box mb={2}>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
                fontSize: styles.fontSize.lg,
              }}
            >
              Dashboard for CRM
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              Custom dashboard solution seamlessly integrated with APIs for
              efficient database interactions and productivity. Delivered a
              centralized interface for improving accessibility and productivity
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link href='/work/crm-dashboard' style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                Details
              </Box>
            </Link>
          </Stack>
        </Box>

        <Box
          component={'img'}
          src='/me/work/crm-dashboard/dashboard.png'
          sx={{
            flex: 1,
            height: '350px',
            objectFit: 'cover',
          }}
        />
      </Stack>
    </Box>
  );
};

const NewsletterApp = () => {
  return (
    <Box
      sx={{
        borderRadius: 4,
        bgcolor: styles.newPallette[1],
      }}
    >
      <Stack
        sx={{
          p: 4,
          alignItems: 'center',
        }}
        direction={{ md: 'row', xs: 'column' }}
      >
        <Box flex={1} p={2}>
          <Box mb={2}>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 600,
                mb: 2,
                fontSize: styles.fontSize.lg,
              }}
            >
              Gmail Declutter App
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              MVP newsletter aggregator for decluttering Gmail Inbox for
              subscribed senders.
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link
              href='/work/gmail-declutter-app'
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  bgcolor: '#3453ff',
                  width: 'fit-content',
                  color: 'white',
                  fontWeight: 500,
                  p: 1,
                  px: 2,
                  textAlign: 'center',
                  fontSize: styles.fontSize.md,
                  borderRadius: 10,
                  '&:hover': {
                    bgcolor: '#0027ff',
                  },
                }}
              >
                Details
              </Box>
            </Link>
          </Stack>
        </Box>

        <Box
          component={'img'}
          src='/me/work/newsletter/screen.png'
          sx={{
            flex: 1,
            height: '350px',
            objectFit: 'cover',
          }}
        />
      </Stack>
    </Box>
  );
};

export default Portfolio;
