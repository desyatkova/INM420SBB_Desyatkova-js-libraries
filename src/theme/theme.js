import { createSystem, defaultConfig } from '@chakra-ui/react';

const theme = createSystem(defaultConfig, {
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      },
    },
  },
  colors: {
    brand: {
      50: '#ffe2ec',
      100: '#ffb3c5',
      200: '#fc8ba0',
      300: '#f5607a',
      400: '#ec3956',
      500: '#d31c3c',
      600: '#a31730',
      700: '#741224',
      800: '#470b16',
      900: '#1f030a',
    },
    festival: {
      purple: '#8B5CF6',
      pink: '#EC4899',
      blue: '#3B82F6',
      teal: '#14B8A6',
      orange: '#F97316',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  breakpoints: {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'full',
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
  },
});

export default theme;