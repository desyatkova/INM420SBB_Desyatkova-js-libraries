import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  VStack,
  IconButton,
  SimpleGrid,
  Heading,
  Button,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaSpotify,
} from 'react-icons/fa';

const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const footerLinks = {
    'Festival': ['About Us', 'Artists', 'Schedule', 'Tickets', 'FAQ'],
    'Info': ['Getting There', 'Accommodation', 'Rules', 'Sustainability', 'Partners'],
    'Legal': ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Refund Policy'],
  };

  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', href: '#' },
    { icon: FaTwitter, label: 'Twitter', href: '#' },
    { icon: FaFacebook, label: 'Facebook', href: '#' },
    { icon: FaYoutube, label: 'YouTube', href: '#' },
    { icon: FaSpotify, label: 'Spotify', href: '#' },
  ];

  return (
    <Box bg="gray.900" color="white" pt={{ base: 12, md: 16 }} pb={8}>
      <Container maxW="container.xl" px={4}>
        <VStack gap={{ base: 8, md: 12 }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} w="full">
            <VStack align={{ base: 'center', md: 'start' }} gap={4}>
              <Heading
                size="lg"
                color="white"
              >
                SUMMER FEST
              </Heading>
              <Text color="gray.400" textAlign={{ base: 'center', md: 'left' }}>
                3 days of unforgettable music, art, and memories.
              </Text>
              <HStack gap={2}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    as={Link}
                    href={social.href}
                    aria-label={social.label}
                    icon={<social.icon />}
                    variant="ghost"
                    colorScheme="whiteAlpha"
                    size="lg"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  />
                ))}
              </HStack>
            </VStack>

            {Object.entries(footerLinks).map(([category, links]) => (
              <VStack
                key={category}
                align={{ base: 'center', md: 'start' }}
                gap={3}
                display={{ base: category === 'Legal' ? 'none' : 'flex', md: 'flex' }}
              >
                <Text fontWeight="bold" fontSize="lg">
                  {category}
                </Text>
                {links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                    fontSize={{ base: 'sm', md: 'md' }}
                  >
                    {link}
                  </Link>
                ))}
              </VStack>
            ))}

            {!isMobile && (
              <VStack align="start" gap={4}>
                <Text fontWeight="bold" fontSize="lg">
                  Stay Updated
                </Text>
                <Text color="gray.400" fontSize="sm">
                  Get the latest news and exclusive offers
                </Text>
                <Stack gap={2} w="full">
                  <Input
                    placeholder="Enter your email"
                    bg="whiteAlpha.100"
                    border="none"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    _focus={{ bg: 'whiteAlpha.200', borderColor: 'purple.500' }}
                  />
                  <Button colorScheme="purple" size="sm" w="full">
                    Subscribe
                  </Button>
                </Stack>
              </VStack>
            )}
          </SimpleGrid>

          <Box borderTopWidth="1px" borderColor="whiteAlpha.300" w="full" />

          <Stack
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align="center"
            w="full"
            gap={4}
          >
            <Text fontSize="sm" color="gray.400" textAlign={{ base: 'center', md: 'left' }}>
              © 2025 Summer Festival. All rights reserved.
            </Text>
            <HStack gap={4} display={{ base: 'none', md: 'flex' }}>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: 'white' }}>
                Terms
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: 'white' }}>
                Privacy
              </Link>
              <Link href="#" fontSize="sm" color="gray.400" _hover={{ color: 'white' }}>
                Cookies
              </Link>
            </HStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;