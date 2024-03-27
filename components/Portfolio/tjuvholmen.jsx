import { Box, Divider, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';

const tech = [
  'React.js',
  'Material UI',
  'CK Editor',
  'Ag Grid',
  'Axios',
  'Redux',
  'Node.js',
  'Adonis.js',
  'MySQL',
  'AWS',
];

const Tjuvholmen = () => {
  return (
    <Section sx={{ py: 5 }}>
      <Box
        sx={{
          p: { sm: 5, xs: 2 },
          borderRadius: 4,
          bgcolor: styles.newPallette[1],
        }}
      >
        <Box mb={3}>
          <Typography mb={1} color={'white'} fontSize={styles.fontSize.xlg}>
            CMS for Equity Research Agency
          </Typography>
          <Typography
            sx={{ whiteSpace: 'pre-line' }}
            color={styles.newPallette[2]}
            fontSize={styles.fontSize.md}
          >
            It is a comprehensive SaaS solution that enhances user access to
            stock reports, analysis, and valuable market insights, coupled with
            a feature-rich admin dashboard for seamless management of user
            interactions, report uploads, and subscriptions.
          </Typography>
        </Box>

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
        {details.map((i) => (
          <Box mb={3} key={i.id}>
            <Box mb={3}>
              <Typography mb={1} color={'white'} fontSize={styles.fontSize.xlg}>
                {i.title}
              </Typography>
              <Typography
                sx={{ whiteSpace: 'pre-line' }}
                color={styles.newPallette[2]}
                fontSize={styles.fontSize.md}
              >
                {i.desc}
              </Typography>
            </Box>
            {i.images.map((img) => (
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
            <Divider color='white' sx={{ my: 5 }} />
          </Box>
        ))}
      </Box>
    </Section>
  );
};

const images = [];

export default Tjuvholmen;
