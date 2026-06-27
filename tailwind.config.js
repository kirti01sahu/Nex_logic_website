export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        // Sandstone Luxury Palette
        sandstone: {
          DEFAULT: '#E6DED3',
          light: '#F5F1ED',
          dark: '#D2C8BB',
        },
        taupe: {
          DEFAULT: '#D2C8BB',
          light: '#E0D8CC',
          dark: '#C0B8AC',
        },
        charcoal: {
          DEFAULT: '#1F1F1F',
          light: '#2D2D2D',
          dark: '#0F0F0F',
        },
        'brown-grey': {
          DEFAULT: '#6F6A63',
          light: '#8B8680',
          dark: '#5A5650',
        },
        // Brand Identity Colors for eGovTalent Centric Premium Design
        'sage-green': '#A8B5A2',
        'dark-olive': '#384F3E',
        'cream': '#F9F6F2',
        'sandstone-light': '#F5F1ED',
        primary: {
          DEFAULT: '#1F1F1F', // Charcoal for primary actions
          dark: '#0F0F0F',
          light: '#2D2D2D',
        },
        accent: {
          DEFAULT: '#A8B5A2',
          sage: '#A8B5A2',
          'sage-light': '#C5D3C0',
          'sage-dark': '#8B9B87',
          highlight: '#E6DED3',
          deep: '#6B7A6F',
        },
        background: {
          light: '#E6DED3', // Sandstone
          dark: '#1F1F1F', // Charcoal
          beige: '#F5F1ED',
          cream: '#F9F6F2',
        },
        section: {
          light: '#F5F1ED',
          dark: '#1F1F1F',
          card: '#FAF8F4',
          sage: '#C5D3C0',
          taupe: '#D2C8BB',
        },
        card: {
          light: '#FFFFFF',
          beige: '#F5F1ED',
          sage: '#C5D3C0',
          dark: '#1F1F1F',
          taupe: '#D2C8BB',
        },
        text: {
          primary: '#1F1F1F',
          muted: '#6F6A63',
          dark: '#E6DED3',
          'dark-muted': '#C5C0BB',
        },
        border: {
          light: '#E8E4DF',
          dark: '#3D3530',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1F1F1F 0%, #0F0F0F 100%)',
        'gradient-sage': 'linear-gradient(135deg, #C5D3C0 0%, #A8B5A2 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F9F6F2 0%, #F5F1ED 100%)',
        'gradient-sandstone': 'radial-gradient(circle at center, rgba(210, 200, 187, 0.4) 0%, rgba(230, 222, 211, 1) 100%)',
        'gradient-hero': 'linear-gradient(to bottom right, rgba(168, 181, 162, 0.08), transparent)',
        'gradient-hero-dark': 'linear-gradient(to bottom right, rgba(31, 31, 31, 0.4), rgba(31, 31, 31, 0.7))',
      },
      boxShadow: {
        'warm': '0 2px 8px rgba(31, 31, 31, 0.06)',
        'card': '0 4px 16px rgba(31, 31, 31, 0.08)',
        'elevated': '0 8px 24px rgba(31, 31, 31, 0.12)',
        'hover': '0 12px 32px rgba(31, 31, 31, 0.15)',
        '2xl': '0 25px 50px -12px rgba(31, 31, 31, 0.25)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
        'widest-3xl': '0.3em',
        'widest-4xl': '0.4em',
        'widest-5xl': '0.5em',
      },
    },
  },
  plugins: [],
}
