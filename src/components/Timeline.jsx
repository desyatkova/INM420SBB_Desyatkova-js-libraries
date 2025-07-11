import { useState, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack,
  Grid
} from '@chakra-ui/react';
import { useEpg, Epg, Layout } from 'planby';
import FestivalMap from './FestivalMap';

const Timeline = ({ mapRef }) => {
  const [selectedDay, setSelectedDay] = useState('friday');

  // Planby channels (stages)
  const channels = useMemo(() => [
    {
      uuid: 'main-stage',
      logo: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=MS',
      title: 'Main Stage'
    },
    {
      uuid: 'electronic-stage', 
      logo: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ES',
      title: 'Electronic Stage'
    },
    {
      uuid: 'acoustic-stage',
      logo: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=AS', 
      title: 'Acoustic Stage'
    },
    {
      uuid: 'indie-stage',
      logo: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=IS',
      title: 'Indie Stage'
    }
  ], []);

  const isEventActive = (since, till, activeTime = '18:00') => {
    const startHour = parseInt(since.split('T')[1].split(':')[0]);
    const startMinute = parseInt(since.split('T')[1].split(':')[1]);
    const endHour = parseInt(till.split('T')[1].split(':')[0]);
    const endMinute = parseInt(till.split('T')[1].split(':')[1]);
    
    const activeHour = parseInt(activeTime.split(':')[0]);
    const activeMinute = parseInt(activeTime.split(':')[1]);
    
    const startTime = startHour * 60 + startMinute;
    const endTime = endHour * 60 + endMinute;
    const activeTimeMinutes = activeHour * 60 + activeMinute;
    
    return activeTimeMinutes >= startTime && activeTimeMinutes < endTime;
  };

  const epgData = useMemo(() => ({
    friday: [
      {
        id: '1',
        channelUuid: 'main-stage',
        title: 'Arctic Monkeys',
        since: '2025-07-15T17:00:00',
        till: '2025-07-15T18:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Arctic',
        description: 'British rock band performance',
        className: isEventActive('2025-07-15T17:00:00', '2025-07-15T18:30:00') ? 'active-event' : ''
      },
      {
        id: '2',
        channelUuid: 'main-stage',
        title: 'The Weeknd',
        since: '2025-07-15T19:30:00',
        till: '2025-07-15T21:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Weeknd',
        description: 'R&B superstar performance'
      },
      {
        id: '3',
        channelUuid: 'electronic-stage',
        title: 'Calvin Harris',
        since: '2025-07-15T17:00:00',
        till: '2025-07-15T18:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Calvin',
        description: 'Electronic music set',
        className: isEventActive('2025-07-15T17:00:00', '2025-07-15T18:30:00') ? 'active-event' : ''
      },
      {
        id: '4',
        channelUuid: 'electronic-stage',
        title: 'Disclosure',
        since: '2025-07-15T19:00:00',
        till: '2025-07-15T20:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Disclosure',
        description: 'UK garage duo performance'
      },
      {
        id: '5',
        channelUuid: 'indie-stage',
        title: 'Tame Impala',
        since: '2025-07-15T18:30:00',
        till: '2025-07-15T20:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Tame',
        description: 'Psychedelic rock performance'
      },
      {
        id: '6',
        channelUuid: 'indie-stage',
        title: 'Mac DeMarco',
        since: '2025-07-15T17:30:00',
        till: '2025-07-15T18:15:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Mac',
        description: 'Indie rock performance'
      },
      {
        id: '7',
        channelUuid: 'acoustic-stage',
        title: 'Bon Iver',
        since: '2025-07-15T17:30:00',
        till: '2025-07-15T19:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Bon',
        description: 'Indie folk performance',
        className: isEventActive('2025-07-15T17:30:00', '2025-07-15T19:00:00') ? 'active-event' : ''
      },
      {
        id: '8',
        channelUuid: 'acoustic-stage',
        title: 'Phoebe Bridgers',
        since: '2025-07-15T19:30:00',
        till: '2025-07-15T20:45:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Phoebe',
        description: 'Indie singer-songwriter'
      },
      {
        id: '25',
        channelUuid: 'main-stage',
        title: 'Local Opening Band',
        since: '2025-07-15T15:00:00',
        till: '2025-07-15T16:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Local',
        description: 'Opening act'
      },
      {
        id: '26',
        channelUuid: 'electronic-stage',
        title: 'DJ Warm-up',
        since: '2025-07-15T15:30:00',
        till: '2025-07-15T16:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Warmup',
        description: 'Pre-show DJ set'
      },
      {
        id: '27',
        channelUuid: 'electronic-stage',
        title: 'Afterparty DJ',
        since: '2025-07-15T21:00:00',
        till: '2025-07-15T23:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=After',
        description: 'Late night electronic set'
      },
      {
        id: '28',
        channelUuid: 'indie-stage',
        title: 'Night Closer',
        since: '2025-07-15T21:30:00',
        till: '2025-07-15T22:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Closer',
        description: 'Final indie performance'
      }
    ],
    saturday: [
      {
        id: '29',
        channelUuid: 'main-stage',
        title: 'Opening Act',
        since: '2025-07-16T15:00:00',
        till: '2025-07-16T16:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Opening',
        description: 'Festival opening performance'
      },
      {
        id: '30',
        channelUuid: 'electronic-stage',
        title: 'DJ Sunset',
        since: '2025-07-16T15:30:00',
        till: '2025-07-16T16:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Sunset',
        description: 'Early electronic vibes'
      },
      {
        id: '31',
        channelUuid: 'indie-stage',
        title: 'Local Heroes',
        since: '2025-07-16T16:00:00',
        till: '2025-07-16T17:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Heroes',
        description: 'Local indie band showcase'
      },
      {
        id: '9',
        channelUuid: 'main-stage',
        title: 'Billie Eilish',
        since: '2025-07-16T17:00:00',
        till: '2025-07-16T18:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Billie',
        description: 'Pop sensation performance',
        className: isEventActive('2025-07-16T17:00:00', '2025-07-16T18:30:00') ? 'active-event' : ''
      },
      {
        id: '10',
        channelUuid: 'main-stage',
        title: 'Kendrick Lamar',
        since: '2025-07-16T19:00:00',
        till: '2025-07-16T21:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Kendrick',
        description: 'Hip hop legend performance'
      },
      {
        id: '11',
        channelUuid: 'electronic-stage',
        title: 'Flume',
        since: '2025-07-16T17:30:00',
        till: '2025-07-16T19:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Flume',
        description: 'Electronic producer set'
      },
      {
        id: '12',
        channelUuid: 'electronic-stage',
        title: 'ODESZA',
        since: '2025-07-16T19:30:00',
        till: '2025-07-16T21:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=ODESZA',
        description: 'Electronic duo performance'
      },
      {
        id: '13',
        channelUuid: 'indie-stage',
        title: 'Dua Lipa',
        since: '2025-07-16T18:00:00',
        till: '2025-07-16T19:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Dua',
        description: 'Pop superstar performance',
        className: isEventActive('2025-07-16T18:00:00', '2025-07-16T19:30:00') ? 'active-event' : ''
      },
      {
        id: '14',
        channelUuid: 'indie-stage',
        title: 'Vampire Weekend',
        since: '2025-07-16T20:00:00',
        till: '2025-07-16T21:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Vampire',
        description: 'Indie rock band'
      },
      {
        id: '15',
        channelUuid: 'acoustic-stage',
        title: 'Lorde',
        since: '2025-07-16T17:00:00',
        till: '2025-07-16T18:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Lorde',
        description: 'Alternative pop artist'
      },
      {
        id: '16',
        channelUuid: 'acoustic-stage',
        title: 'James Blake',
        since: '2025-07-16T19:00:00',
        till: '2025-07-16T20:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=James',
        description: 'Electronic soul artist'
      }
    ],
    sunday: [
      {
        id: '32',
        channelUuid: 'main-stage',
        title: 'Sunday Opener',
        since: '2025-07-17T15:00:00',
        till: '2025-07-17T16:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Sunday',
        description: 'Festival finale opening act'
      },
      {
        id: '33',
        channelUuid: 'electronic-stage',
        title: 'Afternoon Vibes',
        since: '2025-07-17T15:30:00',
        till: '2025-07-17T16:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Afternoon',
        description: 'Chill electronic afternoon set'
      },
      {
        id: '34',
        channelUuid: 'indie-stage',
        title: 'Closing Weekend',
        since: '2025-07-17T16:00:00',
        till: '2025-07-17T17:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Closing',
        description: 'Weekend wrap-up indie performance'
      },
      {
        id: '17',
        channelUuid: 'main-stage',
        title: 'Post Malone',
        since: '2025-07-17T17:00:00',
        till: '2025-07-17T18:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Post',
        description: 'Hip hop and pop performance',
        className: isEventActive('2025-07-17T17:00:00', '2025-07-17T18:30:00') ? 'active-event' : ''
      },
      {
        id: '18',
        channelUuid: 'main-stage',
        title: 'Tyler, The Creator',
        since: '2025-07-17T19:00:00',
        till: '2025-07-17T20:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Tyler',
        description: 'Alternative hip hop artist'
      },
      {
        id: '19',
        channelUuid: 'electronic-stage',
        title: 'CHVRCHES',
        since: '2025-07-17T17:30:00',
        till: '2025-07-17T19:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=CHVRCHES',
        description: 'Synth-pop performance'
      },
      {
        id: '20',
        channelUuid: 'electronic-stage',
        title: 'Porter Robinson',
        since: '2025-07-17T19:30:00',
        till: '2025-07-17T21:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Porter',
        description: 'Electronic music producer'
      },
      {
        id: '21',
        channelUuid: 'indie-stage',
        title: 'FKA twigs',
        since: '2025-07-17T17:00:00',
        till: '2025-07-17T18:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=FKA',
        description: 'Alternative R&B artist'
      },
      {
        id: '22',
        channelUuid: 'indie-stage',
        title: 'Glass Animals',
        since: '2025-07-17T19:00:00',
        till: '2025-07-17T20:30:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Glass',
        description: 'Indie electronic band'
      },
      {
        id: '23',
        channelUuid: 'acoustic-stage',
        title: 'Clairo',
        since: '2025-07-17T17:30:00',
        till: '2025-07-17T19:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Clairo',
        description: 'Bedroom pop artist'
      },
      {
        id: '24',
        channelUuid: 'acoustic-stage',
        title: 'Kali Uchis',
        since: '2025-07-17T19:30:00',
        till: '2025-07-17T21:00:00',
        image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Kali',
        description: 'R&B and reggaeton artist'
      }
    ]
  }), []);

  const getSelectedDate = () => {
    const dates = {
      friday: '2025-07-15',
      saturday: '2025-07-16', 
      sunday: '2025-07-17'
    };
    return dates[selectedDay];
  };


  const { getEpgProps, getLayoutProps } = useEpg({
    channels,
    epg: epgData[selectedDay] || [],
    startDate: `${getSelectedDate()}T15:00:00`,
    endDate: `${getSelectedDate()}T23:00:00`,
    dayWidth: 1200,
    itemHeight: 90,
    sidebarWidth: 120,
    isTimeline: true,
    isLine: true,
    isSidebar: true,
    height: 440
  });

  const days = [
    { key: 'friday', label: 'Friday 15', date: 'July 15' },
    { key: 'saturday', label: 'Saturday 16', date: 'July 16' },
    { key: 'sunday', label: 'Sunday 17', date: 'July 17' }
  ];

  return (
    <Box py={{ base: 16, md: 24 }} bg="gray.50">
      <Container maxW="container.xl" px={4} mx="auto">
        <VStack gap={{ base: 8, md: 12 }}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="black"
              color="gray.900"
            >
              LINE-UP
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="2xl">
              Discover amazing artists performing across our festival stages
            </Text>
          </VStack>

          {/* Day Selector */}
          <HStack gap={4} flexWrap="wrap" justify="center">
            {days.map((day) => (
              <Box
                key={day.key}
                as="button"
                onClick={() => setSelectedDay(day.key)}
                px={6}
                py={3}
                borderRadius="full"
                bg={selectedDay === day.key ? 'purple.500' : 'white'}
                color={selectedDay === day.key ? 'white' : 'gray.700'}
                fontWeight="semibold"
                boxShadow="sm"
                transition="all 0.3s"
                _hover={{
                  bg: selectedDay === day.key ? 'purple.600' : 'gray.50',
                  transform: 'translateY(-2px)',
                  boxShadow: 'md'
                }}
              >
                <VStack gap={0}>
                  <Text fontSize="sm">{day.label}</Text>
                  <Text fontSize="xs" opacity={0.8}>{day.date}</Text>
                </VStack>
              </Box>
            ))}
          </HStack>

          {/* Planby EPG Timeline */}
          <Box w="full" bg="gray.900" borderRadius="xl" p={6} boxShadow="lg">
            <Heading fontSize="2xl" color="white" mb={6} textAlign="center">
              FESTIVAL SCHEDULE
            </Heading>
            
            <Box h="440px" bg="gray.800" borderRadius="md" overflow="hidden" position="relative">
              <Epg {...getEpgProps()}>
                <Layout {...getLayoutProps()} />
              </Epg>
              {/* Custom active time line at 18:00 */}
              <Box
                position="absolute"
                top="0"
                bottom="0"
                left="calc(120px + (18 - 15) * 150px)"
                width="2px"
                bg="red.500"
                zIndex={10}
                boxShadow="0 0 10px rgba(255, 0, 0, 0.5)"
              />
            </Box>
          </Box>

          {/* Interactive Festival Map */}
          <VStack gap={4} w="full" ref={mapRef}>
            <VStack gap={2} textAlign="center">
              <Heading fontSize="2xl" color="gray.900">
                FESTIVAL MAP
              </Heading>
              <Text fontSize="md" color="gray.600">
                Explore stage locations and current events
              </Text>
            </VStack>
            
            <FestivalMap selectedDay={selectedDay} />
            
            {/* Map Legend */}
            <Box w="full" bg="white" p={4} borderRadius="lg" boxShadow="sm" maxW="800px">
              <Text fontSize="sm" fontWeight="semibold" mb={3} color="gray.700">
                Festival Map Legend
              </Text>
              
              {/* Stages */}
              <Text fontSize="xs" fontWeight="semibold" mb={2} color="purple.600">
                PERFORMANCE STAGES
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={2} fontSize="xs" mb={3}>
                <HStack>
                  <Box w={4} h={4} borderRadius="full" bg="#8B5CF6" />
                  <Text>Main Stage</Text>
                </HStack>
                <HStack>
                  <Box w={4} h={4} borderRadius="full" bg="#3B82F6" />
                  <Text>Electronic Stage</Text>
                </HStack>
                <HStack>
                  <Box w={4} h={4} borderRadius="full" bg="#14B8A6" />
                  <Text>Indie Stage</Text>
                </HStack>
                <HStack>
                  <Box w={4} h={4} borderRadius="full" bg="#F97316" />
                  <Text>Acoustic Stage</Text>
                </HStack>
              </Grid>
              
              {/* Festival Areas */}
              <Text fontSize="xs" fontWeight="semibold" mb={2} color="teal.600">
                FESTIVAL AREAS
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={2} fontSize="xs">
                <HStack>
                  <Box w={3} h={3} borderRadius="full" bg="#EC4899" />
                  <Text>Rainbow Gate</Text>
                </HStack>
                <HStack>
                  <Box w={3} h={3} borderRadius="full" bg="#10B981" />
                  <Text>Sunset Plaza</Text>
                </HStack>
                <HStack>
                  <Box w={3} h={3} borderRadius="full" bg="#F59E0B" />
                  <Text>Vibes Village</Text>
                </HStack>
                <HStack>
                  <Box w={3} h={3} borderRadius="full" bg="#9333EA" />
                  <Text>Healing Garden</Text>
                </HStack>
                <HStack>
                  <Box w={3} h={3} borderRadius="full" bg="#06B6D4" />
                  <Text>Neon Lounge</Text>
                </HStack>
                <HStack>
                  <Box w={3} h={3} borderRadius="full" bg="#22C55E" />
                  <Text>Mystic Woods</Text>
                </HStack>
              </Grid>
            </Box>
          </VStack>

        </VStack>
      </Container>
    </Box>
  );
};

export default Timeline;