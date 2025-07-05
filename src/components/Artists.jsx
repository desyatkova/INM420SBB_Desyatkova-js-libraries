import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Badge,
  HStack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

const Artists = () => {
  const artists = [
    {
      name: 'Arctic Monkeys',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      day: 'Friday',
      genre: 'Rock',
      headliner: true,
    },
    {
      name: 'Billie Eilish',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
      day: 'Saturday',
      genre: 'Pop',
      headliner: true,
    },
    {
      name: 'The Weeknd',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
      day: 'Sunday',
      genre: 'R&B',
      headliner: true,
    },
    {
      name: 'Glass Animals',
      image: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=400&h=400&fit=crop',
      day: 'Friday',
      genre: 'Indie',
    },
    {
      name: 'Dua Lipa',
      image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&h=400&fit=crop',
      day: 'Saturday',
      genre: 'Pop',
    },
    {
      name: 'Tame Impala',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop',
      day: 'Sunday',
      genre: 'Psychedelic',
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box py={{ base: 16, md: 24 }} bg="white">
      <Container maxW="container.xl" px={4}>
        <VStack gap={{ base: 8, md: 12 }}>
          <VStack gap={4} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="black"
              color="gray.900"
            >
              ARTIST LINEUP
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">
              Get ready for an unforgettable weekend with world-class artists across multiple genres
            </Text>
          </VStack>

          <SimpleGrid columns={columns} gap={{ base: 6, md: 8 }} w="full">
            {artists.map((artist, index) => (
              <Box
                key={index}
                position="relative"
                overflow="hidden"
                borderRadius="xl"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-4px)', shadow: 'xl' }}
                cursor="pointer"
                bg="gray.50"
              >
                <Image
                  src={artist.image}
                  alt={artist.name}
                  w="full"
                  h={{ base: '300px', md: '350px' }}
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, blackAlpha.800, transparent)"
                />
                <VStack
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  p={6}
                  align="start"
                  gap={2}
                  color="white"
                >
                  {artist.headliner && (
                    <Badge colorScheme="yellow" fontSize="xs">
                      HEADLINER
                    </Badge>
                  )}
                  <Heading size="lg">{artist.name}</Heading>
                  <HStack gap={3}>
                    <Badge colorScheme="purple" variant="subtle">
                      {artist.day}
                    </Badge>
                    <Text fontSize="sm">{artist.genre}</Text>
                  </HStack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Button size="lg" variant="outline" colorScheme="purple">
            View Full Lineup
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Artists;