import { Box, Typography } from '@mui/material';
import Section from '@/components/shared/Section';
import { styles } from '@/style/styles';
import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';

export const metadata = {
  title: 'Damned Designs E-commerce Store | Work',
};

const tech = [
  'Next.js',
  'Material UI',
  'GraphQL',
  'Woocommerce',
  'Tailwind CSS',
  'API Integrations',
  'NMI Payment Gateway',
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
          Next.js Woocommerce Store
        </Typography>
        <Link
          target="_blank"
          href="https://damneddesigns.com"
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
              For a medium-sized merchandise business owner, I transformed a
              sluggish WooCommerce store into a seamless, efficient e-commerce
              platform. The client sought a robust and user-friendly shopping
              experience, leading to a complete revamp using Next.js for the
              frontend while retaining WooCommerce as the backend.
            </p>
            <p>
              This project combined modern frontend development with complex
              backend integrations, achieving a scalable, high-performance
              solution tailored to the client's business needs.
            </p>
          </div>
          {/* REquirements */}
          <div className="space-y-2">
            <p className="text-3xl text-white ">Requirements</p>
            <p className="">
              The client’s WooCommerce store faced significant issues,
              including:
            </p>
            <ul className="pl-4 list-disc">
              <li>Poor performance with frequent lags and bugs.</li>
              <li>
                An outdated and clunky UI that hindered customer experience.
              </li>
              <li>
                Lack of flexibility for customization and integration with
                modern tools.
              </li>
            </ul>
            <p className="">
              The client requested a clean, modern frontend built using Next.js,
              seamlessly integrated with WooCommerce to retain backend
              functionality. Key requirements included:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Integration of product listing, add-to-cart, billing, coupon
                management, and payment systems (NMI and Sezzle).
              </li>
              <li>
                Custom APIs for WooCommerce plugins like custom order numbers
                and parallel cart session stock checks.
              </li>
              <li>
                A stable, efficient, and user-friendly interface to drive
                customer satisfaction.
              </li>
            </ul>
          </div>
          {/* Solution */}
          <div className="space-y-2">
            <p className="text-3xl text-white ">Solutions</p>
            <p className="">
              To address the challenges, I developed a robust Next.js frontend
              connected to WooCommerce via GraphQL using the WooGraphQL plugin.
              Here's how I approached the project:
            </p>
            <ul className="pl-4 list-disc">
              <li>
                Frontend Development: Built a fast, modern, and intuitive
                interface using Next.js to elevate the user experience.
              </li>
              <li>
                WooCommerce Integration: Established a GraphQL-based connection
                for seamless data exchange between the frontend and backend.
              </li>
              <li>
                Feature Implementation: Enabled essential features like product
                listing, cart management, billing, and coupon application.
                Integrated NMI and Sezzle for smooth payment processing. Added
                custom functionalities, including API support for custom order
                numbers and real-time parallel cart session stock validation.
              </li>
              <li>
                Debugging & Optimization: Tackled numerous development
                complexities, optimizing for performance, and ensuring bug-free
                operation.
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
  '/me/work/damneddesigns/dd2.png',
  '/me/work/damneddesigns/dd3.png',
  '/me/work/damneddesigns/dd4.png',
  '/me/work/damneddesigns/dd5.png',
];

export default Page;
