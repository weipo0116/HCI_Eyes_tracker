// components/Navbar.js

import { Container, Flex, Link, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <nav>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" py="4">
          <Heading as="h1" size="lg" color="white">
            My E-Commerce
          </Heading>
          <Flex>
            <Link color="white" mx="4">
              Home
            </Link>
            <Link color="white" mx="4">
              Products
            </Link>
            <Link color="white" mx="4">
              About
            </Link>
            {/* Add more navigation links as needed */}
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
