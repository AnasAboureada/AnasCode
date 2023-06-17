/** @type {import('tailwindcss').Config} */


module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:
    {
      'dark-shade': '#4a5d79',
      'brand-color': '#1d3557',
      'light-accent': '#f1faee',
      'dark-accent': '#C62939',
      'light-shade': '#a8dadc',
      'gray-4': '#495057',
      'gray-3': '#acb5bd',
      'gray-2': '#dde2e5',
      'gray-1': '#f8f9fa',
      error: '#ef4444',
      success: '#1B8821',
      notification: '#eab308',
      white: '#ffffff'
    },
    fontSize:
    {
      base: '0.75rem',
      lg: '0.875rem',
      xl: '1rem',
      '2xl': '1.125rem',
      '3xl': '1.25rem',
      '4xl': '1.5rem',
      '5xl': '1.875rem',
      '6xl': '2.25rem',
      '7xl': '3rem',
      '8xl': '3.75rem'
    },
    fontFamily:
    {
      heading: 'Montserrat',
      body: 'Roboto',
      meta: 'Lato',
      handwriting: 'Handlee'
    },
    boxShadow:
    {
      'Card Shadow': '0px 2px 4px 0px rgba(33,36,41,0.05)',
      'Drop Shadow': 'inset 0px 4px 4px 0px rgba(0,0,0,0.25)'
    },
    borderRadius:
    {
      none: '0',
      xs: '0.3125rem',
      sm: '0.375rem',
      default: '0.5rem',
      lg: '0.625rem',
      xl: '0.75rem',
      '2xl': '0.9375rem',
      '3xl': '1.25rem',
      '4xl': '1.5rem',
      '5xl': '2rem',
      '6xl': '3.5rem',
      full: '9999px'
    },
    extend: {
      animation: {
        bounce200: 'bounce 3s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      height: {
        '3/4-screen': '75vh',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      }
    }
  },
  plugins: [],
}
