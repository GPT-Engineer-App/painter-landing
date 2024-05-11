import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaPaintBrush, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="white">
        <VStack spacing={8} p={8}>
          <Heading color="blue.600" fontSize="4xl">
            John Doe Paintings
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Bringing colors to life with every stroke!
          </Text>
          <Image src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwYWludGVyJTIwYXQlMjB3b3JrfGVufDB8fHx8MTcxNTQ0MjQxOHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" boxSize="300px" objectFit="cover" />
          <Button leftIcon={<FaPaintBrush />} colorScheme="blue" variant="solid" size="lg">
            View Gallery
          </Button>
          <Button leftIcon={<FaPhone />} colorScheme="green" variant="outline" size="lg">
            Contact Us
          </Button>
        </VStack>
        <Box as="footer" py={10}>
          <Flex justify="space-between" w="full" maxW="container.md" px={8}>
            <Link href="#" fontSize="sm" color="gray.600">
              Privacy Policy
            </Link>
            <Link href="#" fontSize="sm" color="gray.600">
              Terms of Service
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
