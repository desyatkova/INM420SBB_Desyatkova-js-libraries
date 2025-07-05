import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <Box
      position="relative"
      minH="100vh"
      bg="black"
      color="white"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100vw"
        h="100vh"
        zIndex={1}
      >
        {/*<Spline */}
        {/*  scene="https://prod.spline.design/V8lHj76u6-5lZcKZ/scene.splinecode"*/}
        {/*  style={{*/}
        {/*    width: '100%',*/}
        {/*    height: '100%',*/}
        {/*  }}*/}
        {/*/>*/}
        <Spline
          scene="https://prod.spline.design/fbZURuiIHKnqqTEj/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>

      {/* Content Overlay - Centered */}
      <Container 
        maxW="container.xl" 
        position="relative" 
        h="full" 
        zIndex={3}
      >
        <VStack
          justify="center"
          h="100vh"
          gap={8}
          py={32}
          textAlign="center"
          px={4}
        >
          <VStack gap={4}>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
              color="purple.300"
            >
              3 Days of Music & Art
            </Text>
            <Heading
              className="hero-title"
              as="h1"
              fontSize={{ base: '5xl', sm: '6xl', md: '8xl', lg: '9xl' }}
              fontWeight="black"
              lineHeight="0.8"
              mb={4}
            >
              SUMMER
              <br />
              FESTIVAL
            </Heading>
          </VStack>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            align="center"
            fontSize={{ base: 'md', md: 'lg' }}
          >
            <HStack>
              <Box as={FaCalendar} color="purple.400" />
              <Text color="gray.200">July 15-17, 2025</Text>
            </HStack>
            <HStack>
              <Box as={FaMapMarkerAlt} color="purple.400" />
              <Text color="gray.200">Sunset Park, California</Text>
            </HStack>
          </Stack>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            gap={4}
            w={{ base: 'full', sm: 'auto' }}
            px={{ base: 4, sm: 0 }}
          >
            <Button
              size="lg"
              bgGradient="linear(to-r, purple.500, pink.500)"
              color="white"
              _hover={{ 
                bgGradient: "linear(to-r, purple.600, pink.600)",
                transform: "translateY(-2px)",
                shadow: "2xl"
              }}
              px={8}
              fontSize={{ base: 'md', md: 'lg' }}
              h={{ base: 12, md: 14 }}
              borderRadius="full"
              transition="all 0.3s"
              boxShadow="xl"
            >
              Get Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              borderWidth="2px"
              color="white"
              bg="whiteAlpha.100"
              _hover={{ 
                bg: 'whiteAlpha.200',
                transform: "translateY(-2px)",
                shadow: "2xl"
              }}
              px={8}
              fontSize={{ base: 'md', md: 'lg' }}
              h={{ base: 12, md: 14 }}
              borderRadius="full"
              transition="all 0.3s"
            >
              View Lineup
            </Button>
          </Stack>

          <Text
            fontSize={{ base: 'sm', md: 'md' }}
            mt={4}
            fontWeight="medium"
            color="purple.200"
            textShadow="1px 1px 3px rgba(0,0,0,0.8)"
          >
            ⚡ Early Bird Tickets Available Now
          </Text>
        </VStack>
      </Container>

      {/* Dark overlay for better text readability */}
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.400"
        zIndex={2}
      />

      {/* Subtle background effects */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient="radial(circle at 50% 50%, purple.900, transparent 70%)"
        opacity={0.3}
        zIndex={0}
      />
    </Box>
  );
};

export default Hero;