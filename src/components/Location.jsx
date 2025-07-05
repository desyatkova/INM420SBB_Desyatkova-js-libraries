import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  Button,
} from '@chakra-ui/react';
import {
  FaMapMarkerAlt,
  FaParking,
  FaBus,
  FaHotel,
  FaUtensils,
  FaWifi,
} from 'react-icons/fa';

const Location = () => {
  const amenities = [
    { icon: FaParking, title: 'Free Parking', description: '10,000+ spots available' },
    { icon: FaBus, title: 'Shuttle Service', description: 'From major transit hubs' },
    { icon: FaHotel, title: 'Camping', description: 'On-site camping available' },
    { icon: FaUtensils, title: 'Food Courts', description: '50+ food vendors' },
    { icon: FaWifi, title: 'Free WiFi', description: 'Throughout the venue' },
    { icon: FaMapMarkerAlt, title: 'Easy Access', description: 'Near major highways' },
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl" px={4}>
        <VStack gap={{ base: 8, md: 12 }}>
          <VStack gap={4} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="black"
              color="gray.900"
            >
              Location & Venue
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">
              Join us at the beautiful Sunset Park in California
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, md: 12 }} w="full">
            <VStack align="stretch" gap={6}>
              <Box>
                <Heading size="lg" mb={4}>
                  Sunset Park
                </Heading>
                <VStack align="start" gap={3}>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} color="purple.500" />
                    <Text>1234 Festival Way, Los Angeles, CA 90028</Text>
                  </HStack>
                  <Text color="gray.600">
                    Sunset Park is Southern California's premier outdoor venue, featuring 500 acres
                    of beautiful landscape perfect for our 3-day music festival. With multiple stages,
                    art installations, and plenty of space to explore, it's the ideal location for
                    an unforgettable festival experience.
                  </Text>
                </VStack>
              </Box>

              <Box>
                <Heading size="md" mb={4}>
                  Venue Amenities
                </Heading>
                <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                  {amenities.map((amenity, idx) => (
                    <HStack key={idx} align="start" gap={3}>
                      <Icon as={amenity.icon} color="purple.500" boxSize={5} mt={1} />
                      <VStack align="start" gap={0}>
                        <Text fontWeight="semibold">{amenity.title}</Text>
                        <Text fontSize="sm" color="gray.600">
                          {amenity.description}
                        </Text>
                      </VStack>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>

              <Button size="lg" colorScheme="purple">
                Get Directions
              </Button>
            </VStack>

            <Box>
              <Box
                position="relative"
                w="full"
                h={{ base: '300px', md: '400px' }}
                borderRadius="xl"
                overflow="hidden"
                bg="gray.200"
              >
                <Box
                  position="absolute"
                  inset={0}
                  bgImage="url('https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800')"
                  bgSize="cover"
                  bgPosition="center"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="blackAlpha.400"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack gap={4} color="white" textAlign="center">
                    <Heading size="lg">Interactive Map</Heading>
                    <Button colorScheme="whiteAlpha" variant="outline">
                      View Full Map
                    </Button>
                  </VStack>
                </Box>
              </Box>

              <VStack align="stretch" gap={4} mt={6}>
                <Box p={4} bg="blue.50" borderRadius="md" borderWidth="1px" borderColor="blue.200">
                  <HStack gap={3}>
                    <Icon as={FaBus} color="blue.500" />
                    <Text fontSize="sm">
                      <Text as="span" fontWeight="semibold">Free shuttles</Text> run every 30 minutes
                      from Union Station and LAX
                    </Text>
                  </HStack>
                </Box>
                <Box p={4} bg="green.50" borderRadius="md" borderWidth="1px" borderColor="green.200">
                  <HStack gap={3}>
                    <Icon as={FaParking} color="green.500" />
                    <Text fontSize="sm">
                      <Text as="span" fontWeight="semibold">Parking passes</Text> can be purchased
                      in advance for $20/day
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Location;