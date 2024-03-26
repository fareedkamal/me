import { Box, Stack, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';

const Resume = () => {
  return (
    <Section
      sx={{
        bgcolor: styles.newPallette[0],
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
          alignItems: { md: 'center', xs: 'start' },
        }}
        spacing={5}
      >
        <Stack flex={0.8} alignSelf={'flex-start'}>
          <Typography fontWeight={500} fontSize={styles.fontSize.xlg}>
            Fareed Kamal
          </Typography>
          {/* <Typography
            fontWeight={500}
            mb={2}
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            Full Stack Dev / Software Engineer
          </Typography> */}
          <Typography
            fontWeight={500}
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            Full Stack Developer delivering applications and software solutions
            for business needs, saas products and startups
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography fontWeight={500} fontSize={styles.fontSize.md}>
            Lahore, Pakistan
          </Typography>
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            href='mailto:fareedkamal.dev@gmail.com'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            fareedkamal.dev@gmail.com
          </Typography>
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            target='_blank'
            href='https://linkedin.com/in/fareedkamal'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            Linkedin
          </Typography>
          {/* <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            target='_blank'
            href='https://upwork.com/fareedkamal'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            Upwork
          </Typography> */}
          <Typography
            sx={{
              textDecoration: 'none',
              color: 'white',
            }}
            component={'a'}
            target='_blank'
            href='https://github.com/fareedkamal'
            fontWeight={500}
            fontSize={styles.fontSize.md}
          >
            Github
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction={{ md: 'row', xs: 'column' }}
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
          alignItems: { md: 'center', xs: 'start' },
        }}
        spacing={5}
      >
        <Stack flex={0.8} alignSelf={'flex-start'}>
          <Typography fontWeight={500} fontSize={styles.fontSize.xlg}>
            Experience
          </Typography>

          <Stack
            direction={{ md: 'row', xs: 'column' }}
            justifyContent={'space-between'}
          >
            <Typography fontWeight={100} fontSize={styles.fontSize.lg}>
              ExpertsCloud Pvt Limited
            </Typography>

            <Typography fontSize={styles.fontSize.lg}>
              2023 - Present
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography mb={2} fontSize={styles.fontSize.lg}>
          UI / Front-end
        </Typography>
        <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
          {skills.frontEnd.map((item) => (
            <Box
              key={item}
              sx={{
                width: 'fit-content',
                px: 4,
                py: 1,
                borderRadius: 10,
                bgcolor: '#3453ff',
              }}
            >
              <Typography fontSize={styles.fontSize.md}>{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography mb={2} fontSize={styles.fontSize.lg}>
          Back-end
        </Typography>
        <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
          {skills.backEnd.map((item) => (
            <Box
              key={item}
              sx={{
                width: 'fit-content',
                px: 4,
                py: 1,
                borderRadius: 10,
                bgcolor: '#3453ff',
              }}
            >
              <Typography fontSize={styles.fontSize.md}>{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack
        sx={{
          bgcolor: '#202127',
          color: 'white',
          p: 5,
          borderRadius: 4,
        }}
      >
        <Typography mb={2} fontSize={styles.fontSize.lg}>
          Deployment
        </Typography>
        <Stack direction={'row'} flexWrap={'wrap'} gap={1}>
          {skills.deployment.map((item) => (
            <Box
              key={item}
              sx={{
                width: 'fit-content',
                px: 4,
                py: 1,
                borderRadius: 10,
                bgcolor: '#3453ff',
              }}
            >
              <Typography fontSize={styles.fontSize.md}>{item}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
};

const skills = {
  frontEnd: [
    'HTML5',
    'CSS3',
    'Javascript',
    'Typescript',
    'React.js',
    'Next.js',
    'Material UI',
    'Tailwind CSS',
    'Framer Motion',
    'Bootstrap',
    'Webpack',
    'Vite',
  ],
  backEnd: [
    'Node.js',
    'Express.js',
    'Adonis.js',
    'Nest.js',
    'MySQL',
    'Supabase',
    'MongoDB',
    'GraphQL',
    'AWS',
  ],
  deployment: ['AWS', 'EC2', 'RDS', 'Elastic BeanStalk', 'Vercel'],
};

export default Resume;
