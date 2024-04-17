import { Box, Stack, Typography } from '@mui/material';
import { styles } from '@/style/styles';
import Link from 'next/link';

const ReservationApp = () => {
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
              Reservation Application
            </Typography>
            <Typography
              sx={{
                color: styles.newPallette[2],
                fontSize: styles.fontSize.md,
              }}
            >
              Reservation Application with listings, statistics and sign up.
            </Typography>
          </Box>

          <Stack direction={'row'} spacing={2}>
            <Link
              target='_blank'
              href={'https://fareedkamal.github.io/reservation-app'}
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
            <Link
              href='/work/reservation-app'
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
          src='/me/work/reservation-app.png'
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

export default ReservationApp;
