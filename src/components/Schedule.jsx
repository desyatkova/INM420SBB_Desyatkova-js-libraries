import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  TabsRoot,
  TabsList,
  TabsContent,
  TabsTrigger,
} from '@chakra-ui/react/tabs';

const Schedule = () => {
  const schedule = {
    friday: [
      { time: '2:00 PM', artist: 'Glass Animals', stage: 'Main Stage' },
      { time: '4:00 PM', artist: 'CHVRCHES', stage: 'Sunset Stage' },
      { time: '6:00 PM', artist: 'Foster The People', stage: 'Main Stage' },
      { time: '8:00 PM', artist: 'Arctic Monkeys', stage: 'Main Stage', headliner: true },
      { time: '10:00 PM', artist: 'Flume', stage: 'Electronic Tent' },
    ],
    saturday: [
      { time: '1:00 PM', artist: 'BENEE', stage: 'Sunset Stage' },
      { time: '3:00 PM', artist: 'Dua Lipa', stage: 'Main Stage' },
      { time: '5:00 PM', artist: 'Twenty One Pilots', stage: 'Main Stage' },
      { time: '7:00 PM', artist: 'Billie Eilish', stage: 'Main Stage', headliner: true },
      { time: '9:30 PM', artist: 'Disclosure', stage: 'Electronic Tent' },
    ],
    sunday: [
      { time: '2:00 PM', artist: 'Tame Impala', stage: 'Main Stage' },
      { time: '4:00 PM', artist: 'The 1975', stage: 'Sunset Stage' },
      { time: '6:00 PM', artist: 'Post Malone', stage: 'Main Stage' },
      { time: '8:00 PM', artist: 'The Weeknd', stage: 'Main Stage', headliner: true },
      { time: '10:00 PM', artist: 'Calvin Harris', stage: 'Electronic Tent' },
    ],
  };

  const stageColors = {
    'Main Stage': 'purple',
    'Sunset Stage': 'orange',
    'Electronic Tent': 'blue',
  };

  const ScheduleCard = ({ time, artist, stage, headliner }) => (
    <Box
      bg="white"
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      borderWidth="1px"
      borderColor="gray.200"
      transition="all 0.3s"
      _hover={{ shadow: 'md', borderColor: 'purple.500' }}
    >
      <VStack align="stretch" gap={3}>
        <HStack justify="space-between">
          <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight="semibold" color="gray.600">
            {time}
          </Text>
          <Badge colorScheme={stageColors[stage]} fontSize="xs">
            {stage}
          </Badge>
        </HStack>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight={headliner ? 'black' : 'bold'}
          color={headliner ? 'purple.500' : 'gray.800'}
        >
          {artist}
        </Text>
        {headliner && (
          <Badge colorScheme="yellow" variant="subtle" alignSelf="start">
            HEADLINER
          </Badge>
        )}
      </VStack>
    </Box>
  );

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
              FESTIVAL SCHEDULE
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">
              Plan your festival experience with our detailed daily schedules
            </Text>
          </VStack>

          <Box w="full">
            <TabsRoot defaultValue="friday" variant="enclosed">
              <TabsList justifyContent="center">
                <TabsTrigger value="friday">Friday</TabsTrigger>
                <TabsTrigger value="saturday">Saturday</TabsTrigger>
                <TabsTrigger value="sunday">Sunday</TabsTrigger>
              </TabsList>

              <TabsContent value="friday" px={0} pt={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                  {schedule.friday.map((event, idx) => (
                    <ScheduleCard key={idx} {...event} />
                  ))}
                </SimpleGrid>
              </TabsContent>

              <TabsContent value="saturday" px={0} pt={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                  {schedule.saturday.map((event, idx) => (
                    <ScheduleCard key={idx} {...event} />
                  ))}
                </SimpleGrid>
              </TabsContent>

              <TabsContent value="sunday" px={0} pt={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 4, md: 6 }}>
                  {schedule.sunday.map((event, idx) => (
                    <ScheduleCard key={idx} {...event} />
                  ))}
                </SimpleGrid>
              </TabsContent>
            </TabsRoot>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Schedule;