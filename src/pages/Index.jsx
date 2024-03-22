import { Box, Flex, Heading, Text, Image, Button, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bg="linear-gradient(to right, #7928CA, #FF0080)" color="white" py={20} px={10} justifyContent="center" alignItems="center">
        <Box maxW="800px" textAlign="center">
          <Heading size="4xl" mb={6}>
            Welcome to Beyoncé's Personal Website
          </Heading>
          <Text fontSize="xl" mb={8}>
            Discover the latest news, music, and more from the Queen B.
          </Text>
          <Button colorScheme="pink" variant="solid" size="lg" mr={4}>
            Listen to Music
          </Button>
          <Button colorScheme="pink" variant="outline" size="lg">
            Watch Videos
          </Button>
        </Box>
      </Flex>

      {/* About Section */}
      <Box py={20} px={10}>
        <Flex alignItems="center" mb={10}>
          <Image src="https://images.unsplash.com/photo-1603633247906-4746fea3141a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZXlvbmNlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzExMTE1NjQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beyoncé" borderRadius="full" boxSize="200px" mr={10} />
          <Box>
            <Heading size="2xl" mb={4}>
              About Beyoncé
            </Heading>
            <Text fontSize="lg">Beyoncé is an American singer, songwriter, and actress. She is one of the most influential and successful entertainers of our time, known for her powerful vocals, captivating performances, and empowering messages.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Social Media Section */}
      <Box bg="gray.100" py={20} px={10}>
        <Heading size="2xl" mb={8} textAlign="center">
          Connect with Beyoncé
        </Heading>
        <Flex justifyContent="center" mb={8}>
          <Link href="https://www.instagram.com/beyonce/" isExternal mr={6}>
            <Icon as={FaInstagram} boxSize={8} />
          </Link>
          <Link href="https://twitter.com/Beyonce" isExternal mr={6}>
            <Icon as={FaTwitter} boxSize={8} />
          </Link>
          <Link href="https://www.facebook.com/beyonce" isExternal mr={6}>
            <Icon as={FaFacebook} boxSize={8} />
          </Link>
          <Link href="https://www.youtube.com/user/beyonce" isExternal>
            <Icon as={FaYoutube} boxSize={8} />
          </Link>
        </Flex>
        <Text fontSize="lg" textAlign="center">
          Follow Beyoncé on her social media channels to stay up-to-date with the latest news, music, and more.
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
