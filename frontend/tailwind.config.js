/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        bgColor: '#FAFAFC',
        white: '#FFFFFF',
        black: '#000000',
        borderForWhite: '#EAEBEE',
        primary: {
            100: '#F4F2FF',
            200: '#D7D5FC',
            300: '#ACADE9',
            400: '#7378B5',
            500: '#2A2F4F',
            600: '#1D2445',
            700: '#151E3B',
            800: '#101A30',
            900: '#0D1626',
        },
        secondary: {
            100: '#FAF2FF',
            200: '#DFBBFE',
            300: '#B87FF5',
            400: '#8544DE',
            500: '#4B10B0',
            600: '#2F058E',
            700: '#1C016B',
            800: '#0E0049',
            900: '#050026',
        },
        gray: {
            100: '#FAFAFC',
            200: '#EAEBEE',
            300: '#DBDCE0',
            400: '#CCCDD2',
            500: '#BCBEC4',
            600: '#94979D',
            700: '#6D7075',
            800: '#474A4E',
            900: '#222426',
        },
        status: {
            pending: {
                border: '#FFA500',
                bg: '#FFEDCC',
            },
            accepted: {
                border: '',
            },
            accepted_border: '#007BFF',
            processing_border: '#FFD700',
            ready_border: '#28A745',
            delivering_border: '#20C997'
        }
      },
    },
    plugins: [],
}