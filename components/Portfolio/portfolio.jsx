import { Box, Stack, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import Link from 'next/link';

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
      <BotBlogR />
      <DamnedDesigns />
      <StockCMS />
      <NewsletterApp />
      <CRM />
    </Section>
  );
};

const BotBlogR = () => {
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
              AI SaaS for SEO Analysis & Content Generation
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              I had the opportunity to develop BotBlogr, a cutting-edge SaaS
              platform for bloggers and website owners. The application
              streamlines content generation, optimization, and analysis,
              empowering users to dominate SEO rankings and create engaging,
              high-quality blog posts.
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link
              target="_blank"
              href="https://botblogr.com"
              style={{ textDecoration: 'none' }}
            >
              <Box
                className="bg-amber-600"
                sx={{
                  //bgcolor: '#3453ff',
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
            <Link href="/work/botblogr" style={{ textDecoration: 'none' }}>
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
          src="/me/work/botblogr/bbr5.png"
          sx={{
            flex: 1,
            height: '350px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: 4,
          }}
        />
      </Stack>
    </Box>
  );
};

const DamnedDesigns = () => {
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
              Next.js Woocommerce Store
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              Developed a Next.js site referencing from existing WooCommerce
              store, integrating all WooCommerce APIs using GraphQL through
              plugins and packages.
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link
              target="_blank"
              href="https://damneddesigns.com"
              style={{ textDecoration: 'none' }}
            >
              <Box
                className="bg-amber-600"
                sx={{
                  //bgcolor: '#3453ff',
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
            <Link href="/work/damneddesigns" style={{ textDecoration: 'none' }}>
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
          src="/me/work/damneddesigns/dd1.png"
          sx={{
            flex: 1,
            height: '350px',
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: 4,
          }}
        />
      </Stack>
    </Box>
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
              target="_blank"
              href="https://tjuvholmen.club"
              style={{ textDecoration: 'none' }}
            >
              <Box
                className="bg-amber-600"
                sx={{
                  //bgcolor: '#3453ff',
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
            <Link href="/work/stocks-cms" style={{ textDecoration: 'none' }}>
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
          src="/me/work/stocks-cms/screen.png"
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
            <Link href="/work/crm-dashboard" style={{ textDecoration: 'none' }}>
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
          src="/me/work/crm-dashboard/dashboard.png"
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
              href="/work/gmail-declutter-app"
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
          src="/me/work/newsletter/screen.png"
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
