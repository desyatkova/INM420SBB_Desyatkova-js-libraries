import { useMemo } from 'react';
import { Box, Text, VStack, Badge, HStack } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const createCustomIcon = (color, size = 'medium') => {
  const sizes = {
    small: { width: 20, height: 20, iconSize: [20, 20], iconAnchor: [10, 10] },
    medium: { width: 28, height: 28, iconSize: [28, 28], iconAnchor: [14, 14] },
    large: { width: 35, height: 35, iconSize: [35, 35], iconAnchor: [17, 17] }
  };
  
  const { width, height, iconSize, iconAnchor } = sizes[size];
  
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="
      width: ${width}px;
      height: ${height}px;
      border-radius: 50%;
      background-color: ${color};
      border: 3px solid white;
      box-shadow: 0 3px 8px rgba(0,0,0,0.4);
    "></div>`,
    iconSize,
    iconAnchor
  });
};

const FestivalMap = ({ selectedDay }) => {
  const centerPosition = [34.0522, -118.2437];

  const stageLocations = useMemo(() => [
    {
      id: 'main-stage',
      name: 'Main Stage',
      position: [34.0525, -118.2440],
      color: '#8B5CF6',
      icon: createCustomIcon('#8B5CF6', 'large'),
      description: 'Primary performance stage with the biggest acts'
    },
    {
      id: 'electronic-stage',
      name: 'Electronic Stage',
      position: [34.0520, -118.2435],
      color: '#3B82F6',
      icon: createCustomIcon('#3B82F6', 'large'),
      description: 'Electronic music and DJ performances'
    },
    {
      id: 'indie-stage',
      name: 'Indie Stage',
      position: [34.0523, -118.2433],
      color: '#14B8A6',
      icon: createCustomIcon('#14B8A6', 'large'),
      description: 'Independent artists and emerging acts'
    },
    {
      id: 'acoustic-stage',
      name: 'Acoustic Stage',
      position: [34.0518, -118.2442],
      color: '#F97316',
      icon: createCustomIcon('#F97316', 'large'),
      description: 'Intimate acoustic performances'
    }
  ], []);

  const festivalLocations = useMemo(() => [
    {
      id: 'rainbow-gate',
      name: 'Rainbow Gate',
      position: [34.0510, -118.2450],
      color: '#EC4899',
      icon: createCustomIcon('#EC4899', 'medium'),
      description: 'Main festival entrance with colorful welcome arch'
    },
    {
      id: 'sunset-plaza',
      name: 'Sunset Plaza',
      position: [34.0532, -118.2445],
      color: '#10B981',
      icon: createCustomIcon('#10B981', 'medium'),
      description: 'Food trucks, craft vendors and chill zone'
    },
    {
      id: 'vibes-village',
      name: 'Vibes Village',
      position: [34.0515, -118.2425],
      color: '#F59E0B',
      icon: createCustomIcon('#F59E0B', 'medium'),
      description: 'Artisan market and festival merchandise hub'
    },
    {
      id: 'starlight-camp',
      name: 'Starlight Camp',
      position: [34.0535, -118.2425],
      color: '#8B5A2B',
      icon: createCustomIcon('#8B5A2B', 'medium'),
      description: 'Premium camping experience under the stars'
    },
    {
      id: 'healing-garden',
      name: 'Healing Garden',
      position: [34.0528, -118.2452],
      color: '#9333EA',
      icon: createCustomIcon('#9333EA', 'medium'),
      description: 'Wellness area with yoga, meditation and relaxation'
    },
    {
      id: 'neon-lounge',
      name: 'Neon Lounge',
      position: [34.0515, -118.2455],
      color: '#06B6D4',
      icon: createCustomIcon('#06B6D4', 'medium'),
      description: 'VIP area with exclusive bars and artist meet & greets'
    },
    {
      id: 'crystal-lake',
      name: 'Crystal Lake',
      position: [34.0508, -118.2430],
      color: '#3B82F6',
      icon: createCustomIcon('#3B82F6', 'medium'),
      description: 'Scenic lake area with art installations and chill vibes'
    },
    {
      id: 'mystic-woods',
      name: 'Mystic Woods',
      position: [34.0540, -118.2435],
      color: '#22C55E',
      icon: createCustomIcon('#22C55E', 'medium'),
      description: 'Enchanted forest area with hidden performances'
    }
  ], []);

  const getCurrentEvents = () => {
    const eventData = {
      friday: [
        { stage: 'main-stage', artist: 'Arctic Monkeys', time: '17:00-18:30' },
        { stage: 'electronic-stage', artist: 'Calvin Harris', time: '17:00-18:30' },
        { stage: 'acoustic-stage', artist: 'Bon Iver', time: '17:30-19:00' },
        { stage: 'indie-stage', artist: 'Tame Impala', time: '18:30-20:00' }
      ],
      saturday: [
        { stage: 'main-stage', artist: 'Billie Eilish', time: '17:00-18:30' },
        { stage: 'indie-stage', artist: 'Dua Lipa', time: '18:00-19:30' },
        { stage: 'electronic-stage', artist: 'Flume', time: '17:30-19:00' },
        { stage: 'acoustic-stage', artist: 'Lorde', time: '17:00-18:30' }
      ],
      sunday: [
        { stage: 'main-stage', artist: 'Post Malone', time: '17:00-18:30' },
        { stage: 'indie-stage', artist: 'FKA twigs', time: '17:00-18:30' },
        { stage: 'electronic-stage', artist: 'CHVRCHES', time: '17:30-19:00' },
        { stage: 'acoustic-stage', artist: 'Clairo', time: '17:30-19:00' }
      ]
    };
    return eventData[selectedDay] || [];
  };

  const currentEvents = getCurrentEvents();

  return (
    <Box w="full" h="500px" borderRadius="xl" overflow="hidden" boxShadow="lg">
      <MapContainer
        center={centerPosition}
        zoom={16}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
        />
        
        {/* Stage markers */}
        {stageLocations.map((stage) => {
          const currentEvent = currentEvents.find(event => event.stage === stage.id);
          
          return (
            <Marker 
              key={stage.id}
              position={stage.position}
              icon={stage.icon}
            >
              <Popup>
                <VStack gap={2} align="start" minW="200px">
                  <HStack>
                    <Box
                      w={3}
                      h={3}
                      borderRadius="full"
                      bg={stage.color}
                    />
                    <Text fontWeight="bold" fontSize="lg">
                      {stage.name}
                    </Text>
                  </HStack>
                  
                  <Text fontSize="sm" color="gray.600">
                    {stage.description}
                  </Text>
                  
                  {currentEvent && (
                    <Box>
                      <Badge colorScheme="purple" mb={1}>
                        NOW PLAYING
                      </Badge>
                      <Text fontWeight="semibold">
                        {currentEvent.artist}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {currentEvent.time}
                      </Text>
                    </Box>
                  )}
                </VStack>
              </Popup>
            </Marker>
          );
        })}

        {/* Festival facility markers */}
        {festivalLocations.map((location) => (
          <Marker 
            key={location.id}
            position={location.position}
            icon={location.icon}
          >
            <Popup>
              <VStack gap={2} align="start" minW="180px">
                <HStack>
                  <Box
                    w={3}
                    h={3}
                    borderRadius="full"
                    bg={location.color}
                  />
                  <Text fontWeight="bold">
                    {location.name}
                  </Text>
                </HStack>
                
                <Text fontSize="sm" color="gray.600">
                  {location.description}
                </Text>
              </VStack>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default FestivalMap;