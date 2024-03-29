'use client';

import { Box, Stack, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import './styles.css';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <Box
      ref={ref}
      className='section'
      sx={{
        width: '100%',
        bgcolor: styles.newPallette[0],
        position: 'relative',
        pt: 5,
      }}
    >
      <Section>
        <Stack
          className={`box ${inView ? 'animate' : ''}`}
          sx={{
            position: 'relative',
            flexDirection: { lg: 'row', xs: 'column-reverse' },
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            width={{ md: '50%', xs: '100%' }}
            textAlign={{ lg: 'unset', xs: 'center' }}
          >
            <Typography
              mb={2}
              color={'white'}
              fontWeight={700}
              fontSize={styles.fontSize.xlg}
            >
              Full Stack Dev /
              <br />
              Software Engineer
            </Typography>
            <Typography
              color={'grey'}
              fontWeight={600}
              fontSize={styles.fontSize.lg}
            >
              Delivering applications and software solutions for business needs,
              saas products and startups
            </Typography>
            <Stack
              mt={3}
              justifyContent={{ lg: 'start', xs: 'center' }}
              direction={'row'}
              spacing={2}
            >
              <Link href='/work' style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    bgcolor: '#3453ff',
                    width: 'fit-content',
                    color: 'white',
                    fontWeight: 500,
                    p: 1,
                    px: 4,
                    textAlign: 'center',
                    fontSize: styles.fontSize.md,
                    borderRadius: 10,
                    '&:hover': {
                      bgcolor: '#0027ff',
                    },
                  }}
                >
                  Work
                </Box>
              </Link>
              <Link href='/resume' style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    bgcolor: '#3453ff',
                    width: 'fit-content',
                    color: 'white',
                    fontWeight: 500,
                    p: 1,
                    px: 4,
                    textAlign: 'center',
                    fontSize: styles.fontSize.md,
                    borderRadius: 10,
                    '&:hover': {
                      bgcolor: '#0027ff',
                    },
                  }}
                >
                  Resume
                </Box>
              </Link>
            </Stack>
          </Box>
          <Box
            sx={{
              height: { sm: '400px', xs: '300px' },
              width: { sm: '400px', xs: 'auto' },
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className='blur-profile-bg' />
            <Box
              component={'img'}
              height={{ sm: '300px', xs: '200px' }}
              width={{ sm: '300px', xs: '200px' }}
              borderRadius='100%'
              src='/me/assets/profile_2.png'
              sx={{
                objectFit: 'contain',
                zIndex: 1,
              }}
            />
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Hero;
