/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B5A1E5',
        onPrimary: '#100E17',
        background: '#131214',
        onBackground: '#EAE6F2',
        surface: '#1D1C1F',
        onSurface: '#DDDAE5',
        onSurfaceVariant: '#7B7980',
        onSurfaceVariant2: '#B9B6BF',
        outline: '#3E3D40',
        bgAqi1: '#89E589',
        onBgAqi1: '#1F331F',
        bgAqi2: '#E5DD89',
        onBgAqi2: '#33311F',
        bgAqi3: '#E5C089',
        onBgAqi3: '#332B1F',
        bgAqi4: '#E58989',
        onBgAqi4: '#331F1F',
        bgAqi5: '#E589B7',
        onBgAqi5: '#331F29',
        white: 'hsl(0, 0%, 100%)',
        whiteAlpha4: 'hsla(0, 0%, 100%, 0.04)',
        whiteAlpha8: 'hsla(0, 0%, 100%, 0.08)',
        blackAlpha10: 'hsla(0, 0%, 0%, 0.1)',
        gradient1: 'linear-gradient(180deg, hsla(270, 5%, 7%, 0) 0%, hsla(270, 5%, 7%, 0.8) 65%, hsl(270, 5%, 7%) 100%)',
        gradient2: 'linear-gradient(180deg, hsla(260, 5%, 12%, 0) 0%, hsla(260, 5%, 12%, 0.8) 65%, hsl(260, 5%, 12%) 100%)',
      },
      fontFamily: {
        nunitoSans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        heading: '5.6rem',
        title1: '2rem',
        title2: '1.8rem',
        title3: '1.6rem',
        body1: '2.2rem',
        body2: '2rem',
        body3: '1.6rem',
        label1: '1.4rem',
        label2: '1.2rem',
      },
      fontWeight: {
        regular: 400,
        semiBold: 600,
      },
      boxShadow: {
        buttonPrimary: '7px 5px 56px -14px #B5A1E5',
        buttonSecondary: '7px 5px 56px -10px #B5A1E5',
      },
      borderRadius: {
        radius28: '28px',
        radius16: '16px',
        radiusPill: '500px',
        radiusCircle: '50%',
      },
    },
  },
  plugins: [],
}