import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern premium color palette
        background: {
          DEFAULT: "#FAFAFA",
          dark: "#121212",
        },
        primary: {
          DEFAULT: "#111111",
          dark: "#F5F5F5",
        },
        secondary: {
          DEFAULT: "#333333",
          dark: "#E0E0E0",
        },
        accent: {
          DEFAULT: "#0070F3", // Modern blue
          dark: "#3694FF",
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0070F3",
          600: "#005CC4",
          700: "#004494",
          800: "#002D65",
          900: "#001535",
        },
        brutalist: {
          DEFAULT: "#111111",
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#9E9E9E",
          400: "#757575",
          500: "#616161",
          600: "#424242",
          700: "#303030",
          800: "#212121",
          900: "#111111",
        },
        vibrant: {
          DEFAULT: "#FF3D00",
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF3D00",
          600: "#F57C00",
          700: "#EF6C00",
          800: "#E65100",
          900: "#BF360C",
        },
        navy: {
          DEFAULT: "#0A192F",
          50: "#E6F1FF",
          100: "#C5D9F1",
          200: "#A3C1E4",
          300: "#81A9D7",
          400: "#5F91CA",
          500: "#3D79BD",
          600: "#2A5F9E",
          700: "#1D4A7E",
          800: "#10345F",
          900: "#0A192F",
        },
        concrete: {
          DEFAULT: "#F5F5F5",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        // Mailchimp-inspired colors
        cadet: {
          DEFAULT: "#007C89",
          light: "#00A5B5",
          dark: "#004E58",
        },
        mandarin: {
          DEFAULT: "#FFB700",
          light: "#FFCB47",
          dark: "#CC9200",
        },
        persimmon: {
          DEFAULT: "#E31C3D",
          light: "#F15A74",
          dark: "#B01531",
        },
        forest: {
          DEFAULT: "#2C6E49",
          light: "#4C9A72",
          dark: "#1E4B32",
        },
        lavender: {
          DEFAULT: "#9B59B6",
          light: "#BB8FCE",
          dark: "#7D3C98",
        },
      },
      boxShadow: {
        'brutalist': '4px 4px 0px rgba(0, 0, 0, 1)',
        'brutalist-sm': '2px 2px 0px rgba(0, 0, 0, 1)',
        'brutalist-lg': '6px 6px 0px rgba(0, 0, 0, 1)',
        'brutalist-xl': '8px 8px 0px rgba(0, 0, 0, 1)',
        'brutalist-dark': '2px 2px 0px rgba(255, 255, 255, 0.8)',
        'luxury': '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)',
        'luxury-hover': '0 20px 40px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'premium': '0 4px 20px rgba(0, 112, 243, 0.15), 0 1px 3px rgba(0, 112, 243, 0.1)',
        'premium-hover': '0 8px 30px rgba(0, 112, 243, 0.25), 0 2px 6px rgba(0, 112, 243, 0.15)',
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #0070F3 0%, #3694FF 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #FF3D00 0%, #FF9E80 100%)',
        'gradient-modern': 'linear-gradient(135deg, #0A192F 0%, #3D79BD 100%)',
        'gradient-dark': 'linear-gradient(135deg, #121212 0%, #303030 100%)',
        'gradient-premium': 'linear-gradient(135deg, #0070F3 0%, #3694FF 50%, #0070F3 100%)',
        'gradient-cadet': 'linear-gradient(135deg, #004E58 0%, #00A5B5 100%)',
        'gradient-mandarin': 'linear-gradient(135deg, #CC9200 0%, #FFCB47 100%)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
      },
      fontFamily: {
        'sans': ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
        'display': ['var(--font-playfair)', 'Georgia', 'serif'],
        'mono': ['var(--font-space-grotesk)', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        'ui': ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-2': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-3': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-3': ['1.75rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'heading-4': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'heading-5': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
        'heading-6': ['1rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
        'body-xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '400' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.025em',
        'tight': '-0.01em',
        'normal': '0',
        'wide': '0.01em',
        'wider': '0.025em',
        'widest': '0.05em',
        'premium': '0.075em',
        'luxury': '0.1em',
      },
      lineHeight: {
        'tighter': '1.1',
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.6',
        'loose': '1.8',
      },
      spacing: {
        '4.5': '1.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'premium': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};

export default config;