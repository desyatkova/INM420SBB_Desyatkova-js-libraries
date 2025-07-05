import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
  Badge,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  List,
  ListItem,
} from '@chakra-ui/react/list';
import { FaCheck } from 'react-icons/fa';

const Tickets = () => {
  const tickets = [
    {
      name: 'Early Bird',
      price: '$149',
      badge: 'Limited Time',
      badgeColor: 'red',
      features: [
        '3-Day Festival Pass',
        'Access to all stages',
        'Festival wristband',
        'Mobile app access',
      ],
    },
    {
      name: 'VIP Pass',
      price: '$299',
      badge: 'Most Popular',
      badgeColor: 'green',
      featured: true,
      features: [
        'Everything in Early Bird',
        'VIP viewing areas',
        'Exclusive lounge access',
        'Fast-track entry',
        'VIP parking',
        'Complimentary drinks',
      ],
    },
    {
      name: 'Premium',
      price: '$499',
      badge: 'All Inclusive',
      badgeColor: 'purple',
      features: [
        'Everything in VIP',
        'Artist meet & greets',
        'Backstage tours',
        'Premium camping',
        'Concierge service',
        'Exclusive merchandise',
      ],
    },
  ];

  const columns = useBreakpointValue({ base: 1, md: 3 });

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
              Get Your Tickets
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">
              Choose the perfect pass for your festival experience
            </Text>
          </VStack>

          <SimpleGrid columns={columns} gap={{ base: 6, md: 8 }} w="full">
            {tickets.map((ticket, index) => (
              <Box
                key={index}
                position="relative"
                bg="white"
                borderRadius="xl"
                p={{ base: 6, md: 8 }}
                shadow={ticket.featured ? 'xl' : 'md'}
                borderWidth={ticket.featured ? '2px' : '1px'}
                borderColor={ticket.featured ? 'purple.500' : 'gray.200'}
                transform={ticket.featured ? { md: 'scale(1.05)' } : 'none'}
                transition="all 0.3s"
                _hover={{ shadow: 'lg' }}
              >
                {ticket.badge && (
                  <Badge
                    position="absolute"
                    top={-3}
                    right={4}
                    colorScheme={ticket.badgeColor}
                    fontSize="sm"
                    px={3}
                    py={1}
                  >
                    {ticket.badge}
                  </Badge>
                )}

                <VStack gap={6} align="stretch">
                  <VStack gap={2}>
                    <Text fontSize="xl" fontWeight="bold" color="gray.700">
                      {ticket.name}
                    </Text>
                    <HStack>
                      <Text fontSize={{ base: '3xl', md: '4xl' }} fontWeight="black" color="purple.500">
                        {ticket.price}
                      </Text>
                      <Text color="gray.500">/person</Text>
                    </HStack>
                  </VStack>

                  <List.Root gap={3}>
                    {ticket.features.map((feature, idx) => (
                      <ListItem key={idx}>
                        <HStack>
                          <Box as={FaCheck} color="green.500" />
                          <Text fontSize={{ base: 'sm', md: 'md' }}>{feature}</Text>
                        </HStack>
                      </ListItem>
                    ))}
                  </List.Root>

                  <Button
                    size="lg"
                    colorScheme={ticket.featured ? 'purple' : 'gray'}
                    variant={ticket.featured ? 'solid' : 'outline'}
                    w="full"
                  >
                    Select Pass
                  </Button>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <Text fontSize="sm" color="gray.600" textAlign="center">
            All sales are final. Tickets are non-refundable and non-transferable.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Tickets;