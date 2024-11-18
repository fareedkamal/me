import { Box, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';

export const metadata = {
  title: 'BotBlogR | Work',
};

const tech = [
  'React.js',
  'Material UI',
  'Tailwind CSS',
  'OpenAI',
  'Fast API',
  'Tiptap Editor',
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
        <Link href="/work">
          <ArrowBack sx={{ color: 'white', cursor: 'pointer' }} />
        </Link>
        <Typography mb={1} color={'white'} fontSize={styles.fontSize.xlg}>
          AI SaaS for SEO Analysis & Content Generation
        </Typography>
        <Link
          target="_blank"
          href="https://botblogr.com"
          style={{ textDecoration: 'none' }}
        >
          <Box
            className="bg-amber-600"
            sx={{
              width: 'fit-content',
              color: 'white',
              fontWeight: 500,
              p: 1,
              px: 2,
              mb: 2,
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

        <div className="mb-4 flex flex-wrap gap-4">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full text-[10px] sm:text-[15px] px-5 py-1 bg-blue-600 text-white font-medium"
            >
              {item}
            </div>
          ))}
        </div>

        <Box
          className="space-y-4"
          color={styles.newPallette[2]}
          fontSize={styles.fontSize.md}
          mb={3}
        >
          {/* Overview */}
          <div>
            <p className="text-3xl text-white mb-2">Overview</p>
            <p className="mb-2">
              I had the opportunity to develop BotBlogr, a cutting-edge SaaS
              platform for bloggers and website owners. The application
              streamlines content generation, optimization, and analysis,
              empowering users to dominate SEO rankings and create engaging,
              high-quality blog posts.
            </p>
            <p>
              This project required a blend of modern frameworks and advanced
              API integrations, resulting in a powerful tool that simplifies and
              accelerates the content creation process.
            </p>
          </div>
          {/* REquirements */}
          <div className="space-y-2">
            <p className="text-3xl text-white ">Requirements</p>
            <p className="">
              The client needed a skilled developer to bring their vision of
              BotBlogr to life, as the project involved several technical
              complexities:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Building a robust content editor capable of advanced text
                editing and formatting, with a seamless user experience.
              </li>
              <li>
                API integrations for OpenAI to enable features like generative
                content, competitor analysis, and SEO optimization.
              </li>
              <li>
                Custom algorithms for real-time SEO analysis and recommendations
                to improve Google rankings.
              </li>
            </ul>
          </div>
          {/* Solution */}
          <div className="space-y-2">
            <p className="text-3xl text-white ">Solutions</p>
            <p className="">
              I delivered a fully-functional BotBlogr SaaS platform that met all
              client expectations:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Content Editor Development: Leveraged the TipTap editor
                framework to build a rich-text editing interface. Implemented
                custom integrations to enhance functionality and user
                experience.
              </li>
              <li>
                Generative Content Features: Integrated OpenAI APIs to enable
                users to generate high-value blog posts up to 10x faster.
                Designed algorithms to analyze competitors and provide
                actionable insights for SEO optimization.
              </li>
              <li>
                SEO Optimization: Automated content optimization for SEO,
                ensuring articles are web-ready without extra effort. Developed
                tools for real-time guidance on crafting content fully adapted
                for online success.
              </li>
              <li>
                End-to-End Solution: Delivered a cohesive platform that allows
                users to: Generate comprehensive competitor analyses within
                seconds. Create standout content while maintaining full creative
                control. Optimize blog posts to rank higher on Google.
              </li>
            </ul>
          </div>
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
  '/me/work/botblogr/bbr6.png',
  '/me/work/botblogr/bbr3.png',
  '/me/work/botblogr/bbr8.png',
  '/me/work/botblogr/bbr2.png',
  '/me/work/botblogr/bbr1.png',
  '/me/work/botblogr/bbr4.png',
];

export default Page;
