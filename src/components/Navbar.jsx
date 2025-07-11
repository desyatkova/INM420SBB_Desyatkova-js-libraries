import {
  Box,
  Flex,
  IconButton,
  Button,
  VStack,
  HStack,
  Text,
  Container,
} from '@chakra-ui/react';
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerCloseTrigger,
  DrawerBody,
} from '@chakra-ui/react/drawer';
import { FaBars, FaTimes } from 'react-icons/fa';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const menuItems = ['Home', 'Artists', 'Schedule', 'Tickets', 'Location', 'Info'];

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="purple.800"
      boxShadow="lg"
    >
      <Container maxW="container.xl" px={4} mx="auto">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            Eventarium
          </Text>

          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {menuItems.map((item) => (
              <Button 
                key={item} 
                variant="ghost" 
                size="sm"
                color="white"
                _hover={{ bg: 'purple.700', color: 'white' }}
              >
                {item}
              </Button>
            ))}
            <Button 
              size="sm" 
              bg="white" 
              color="purple.800"
              _hover={{ bg: 'gray.100' }}
              px={4}
            >
              Get Tickets
            </Button>
          </HStack>

          <Button
            size="md"
            display={{ md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            color="white"
            _hover={{ bg: 'purple.700' }}
            borderRadius="md"
            p={2}
          >
            <svg
              width="20"
              height="15"
              viewBox="0 0 20 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="2" fill="white"/>
              <rect y="6.5" width="20" height="2" fill="white"/>
              <rect y="13" width="20" height="2" fill="white"/>
            </svg>
          </Button>
        </Flex>
      </Container>

{isOpen && (
        <>
          {/* Backdrop */}
          <Box
            position="fixed"
            inset={0}
            bg="blackAlpha.600"
            zIndex={9998}
            onClick={onClose}
          />
          
          {/* Drawer Content */}
          <Box
            position="fixed"
            right={0}
            top={0}
            h="100vh"
            w="280px"
            bg="white"
            borderLeftRadius="xl"
            shadow="2xl"
            zIndex={9999}
            transform={isOpen ? "translateX(0)" : "translateX(100%)"}
            transition="transform 0.3s ease-in-out"
          >
            {/* Close Button */}
            <IconButton
              position="absolute"
              top={4}
              right={4}
              size="sm"
              icon={<FaTimes />}
              variant="ghost"
              color="gray.500"
              fontSize="lg"
              onClick={onClose}
              aria-label="Close Menu"
            />
            
            {/* Menu Content */}
            <VStack gap={2} align="stretch" pt={16} pb={8} px={6}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="lg"
                  justifyContent="start"
                  onClick={onClose}
                  fontWeight="medium"
                  color="gray.700"
                  _hover={{ bg: 'purple.50', color: 'purple.600' }}
                  borderRadius="lg"
                >
                  {item}
                </Button>
              ))}
              <Button 
                size="lg" 
                colorScheme="purple" 
                onClick={onClose}
                mt={4}
                borderRadius="lg"
                fontWeight="bold"
              >
                Get Tickets
              </Button>
            </VStack>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Navbar;