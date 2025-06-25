
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'serif': ['Crimson Text', 'serif'],
				'sans': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Luxury Wedding Color Palette
				saffron: {
					50: '#FFF9F0',
					100: '#FFF0DC',
					200: '#FFE4BA',
					300: '#FFD088',
					400: '#FFB84D',
					500: '#FF9933', // Deep Saffron
					600: '#E6841A',
					700: '#CC6600',
					800: '#B85C00',
					900: '#994D00',
				},
				maroon: {
					50: '#FDF2F5',
					100: '#FCE7ED',
					200: '#F9CFD9',
					300: '#F5A8BD',
					400: '#EF7699',
					500: '#E54876',
					600: '#D62E5D',
					700: '#B21E47',
					800: '#6D1A36', // Rich Maroon
					900: '#5A1529',
				},
				gold: {
					50: '#FFFCF0',
					100: '#FFF8DC',
					200: '#FFF0B8',
					300: '#FFE485',
					400: '#FFD54F',
					500: '#D4AF37', // Royal Gold
					600: '#B8941F',
					700: '#9C7A08',
					800: '#806200',
					900: '#664F00',
				},
				rosegold: {
					50: '#FDF4F6',
					100: '#FBEAED',
					200: '#F7D5DB',
					300: '#F1B5C0',
					400: '#E98FA4',
					500: '#B76E79', // Rose Gold
					600: '#A45B66',
					700: '#8F4853',
					800: '#7A3540',
					900: '#65222D',
				},
				// New Jewel Tone Accents
				emerald: {
					50: '#F0FDFA',
					100: '#CCFBF1',
					200: '#99F6E4',
					300: '#5EEAD4',
					400: '#2DD4BF',
					500: '#04675C', // Emerald Green
					600: '#0D9488',
					700: '#0F766E',
					800: '#115E59',
					900: '#134E4A',
				},
				ruby: {
					50: '#FEF2F2',
					100: '#FEE2E2',
					200: '#FECACA',
					300: '#FCA5A5',
					400: '#F87171',
					500: '#C32148', // Ruby Red
					600: '#DC2626',
					700: '#B91C1C',
					800: '#991B1B',
					900: '#7F1D1D',
				},
				indigo: {
					50: '#EEF2FF',
					100: '#E0E7FF',
					200: '#C7D2FE',
					300: '#A5B4FC',
					400: '#818CF8',
					500: '#2B3A67', // Indigo Blue
					600: '#4F46E5',
					700: '#4338CA',
					800: '#3730A3',
					900: '#312E81',
				},
				charcoal: {
					50: '#F8F8F8',
					100: '#F0F0F0',
					200: '#E4E4E4',
					300: '#D1D1D1',
					400: '#B4B4B4',
					500: '#9A9A9A',
					600: '#818181',
					700: '#6A6A6A',
					800: '#3B3B3B', // Warm Charcoal
					900: '#2A2A2A',
				},
				champagne: {
					50: '#F9F6EF', // Champagne/Ivory
					100: '#F5F0E6',
					200: '#EDE4D3',
					300: '#E3D5BB',
					400: '#D7C3A0',
					500: '#C9B087',
					600: '#B89D70',
					700: '#A3895C',
					800: '#8A734A',
					900: '#6F5E3A',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 8px rgba(255, 153, 51, 0.6)' },
					'50%': { boxShadow: '0 0 25px rgba(255, 153, 51, 0.9), 0 0 35px rgba(212, 175, 55, 0.7)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0.4', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'fade-in-scale': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'shimmer': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'sparkle': 'sparkle 2s ease-in-out infinite',
				'slide-in-up': 'slide-in-up 0.8s ease-out',
				'fade-in-scale': 'fade-in-scale 0.6s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
