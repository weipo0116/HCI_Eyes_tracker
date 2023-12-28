// pages/index.js
//不用看這個

import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Grid,
  Box,
  Heading,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import "./tailwind.css"; // Import the Tailwind CSS

const Home = () => {
  return (
    <div>
      <Head>
        <title>My E-Commerce Website</title>
        <meta name="description" content="Welcome to our online store!" />
      </Head>

      <header className="bg-gray-800 text-white py-4">
        <Container maxW="container.lg">
          <Flex align="center">
            <h1 className="text-4xl font-bold">Online Store</h1>
            <Flex ml={40} mt={16}>
              <Link mr={8} color="white">
                Home
              </Link>
              <Link mr={8} color="white">
                Products
              </Link>
              <Link color="white">Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </header>
      <Flex align="left">
        <Image
          src="/3.jpg"
          alt="Product 1"
          width={800}
          height={100}
          objectFit="cover"
        />
      </Flex>
      <main>
        <Container maxW="container.lg" my={8}>
          <section>
            <Heading as="h2" size="xl" mb="4">
              Featured Products
            </Heading>
            <Grid
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
              gap={6}
            >
              {/* Product 1 */}
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 1"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Laptop
                </Heading>
                <Text mt={2}>Category: Electronics</Text>
                <Text mt={2}>Price: $799.99</Text>
                <Text mt={2}>Notes: High-performance laptop</Text>
              </Box>

              {/* Product 2 */}
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 2"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Sneakers
                </Heading>
                <Text mt={2}>Category: Footwear</Text>
                <Text mt={2}>Price: $59.99</Text>
                <Text mt={2}>Notes: Comfortable sports sneakers</Text>
              </Box>
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 1"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Laptop
                </Heading>
                <Text mt={2}>Category: Electronics</Text>
                <Text mt={2}>Price: $799.99</Text>
                <Text mt={2}>Notes: High-performance laptop</Text>
              </Box>

              {/* Product 2 */}
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 2"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Sneakers
                </Heading>
                <Text mt={2}>Category: Footwear</Text>
                <Text mt={2}>Price: $59.99</Text>
                <Text mt={2}>Notes: Comfortable sports sneakers</Text>
              </Box>

              {/* Add more featured products as needed */}
            </Grid>
          </section>

          <section>
            <Heading as="h2" size="xl" mb="4">
              Recommended Products
            </Heading>
            <Grid
              templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
              gap={6}
            >
              {/* Product 3 */}
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 3"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Smartwatch
                </Heading>
                <Text mt={2}>Category: Wearables</Text>
                <Text mt={2}>Price: $129.99</Text>
                <Text mt={2}>Notes: Fitness and health tracking</Text>
              </Box>

              {/* Product 4 */}
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 4"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Backpack
                </Heading>
                <Text mt={2}>Category: Accessories</Text>
                <Text mt={2}>Price: $39.99</Text>
                <Text mt={2}>Notes: Stylish and spacious</Text>
              </Box>
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 1"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Laptop
                </Heading>
                <Text mt={2}>Category: Electronics</Text>
                <Text mt={2}>Price: $799.99</Text>
                <Text mt={2}>Notes: High-performance laptop</Text>
              </Box>

              {/* Product 2 */}
              <Box
                p={4}
                boxShadow="md"
                borderWidth="1px"
                borderRadius="md"
                overflow="hidden"
              >
                <Image
                  src="/1.jpg"
                  alt="Product 2"
                  width={400}
                  height={250}
                  objectFit="cover"
                />
                <Heading as="h3" size="md" mt={2}>
                  Sneakers
                </Heading>
                <Text mt={2}>Category: Footwear</Text>
                <Text mt={2}>Price: $59.99</Text>
                <Text mt={2}>Notes: Comfortable sports sneakers</Text>
              </Box>

              {/* Add more recommended products as needed */}
            </Grid>
          </section>

          {/* Add more sections as needed, such as banners, promotions, etc. */}
        </Container>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <Container maxW="container.lg">
          <p>&copy; 2023 My E-Commerce Website</p>
          {/* Add additional footer information */}
        </Container>
      </footer>
    </div>
  );
};

export default Home;
