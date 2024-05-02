/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // or 'media' or 'class' 
  theme: {
     fontFamily: {
        primary: ['Avenir LT Std'],
        Heading: ['Neo Sans Pro'],
        poppins: ['"Poppins", sans-serif'],   
        montserrat: ['"Montserrat", sans-serif'],   
     },      
     flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        inherit: 'inherit',
        none: 'none',
        '2': '2 2 0%',
        '65': '0 1 65%',
        '35': '0 1 35%',  
     },
     colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        primary: '#9D0B52',
        secondary: '#00b097',
        red: '#FF0000',
        green: '#22BB33',
        bordeaux: '#4C0013',
        pale_pink: '#FADADD',
        skin: '#f6f0e7',
        brown: '#666666',
        grey: {
          100: '#CCC',
          200: '#F7F7F7',
          300: '#EFEFEF',
        },  
     },
     container: {
        padding: '15px',
     },
     zIndex: {
        '-1': '-1',
        0: 0,
        1: 1,
        9: 9,
        10: 10,
        20: 20,
        11: 11,
        12: 12,
        98: 98,
        99: 99,
        100: 100,
        999: 999,
        9999: 9999,
        99999: 99999,
        999999: 999999,
     },
     padding: {
        0: '0px',
        5: '5px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        20: '20px', 
        24: '24px',
        25: '25px',
        26: '26px',
        30: '30px',
        35: '35px',
        40: '40px',
        45: '45px',
        50: '50px',
        55: '55px',
        60: '60px',
        65: '65px',
        70: '70px',
        75: '75px',
        80: '80px',
        85: '85px',
        90: '90px',
        95: '95px',
        100: '100px',
        120: '120px',
        130: '130px',
        150: '150px',
     },
     margin: {
        auto: 'auto',
        0: '0px',
        5: '5px',
        8: '8px',
        10: '10px',
        15: '15px',
        16: '16px',
        20: '20px',
        25: '25px',
        30: '30px',
        35: '35px',
        40: '40px',
        45: '45px',
        50: '50px',
        55: '55px',
        60: '60px',
        65: '65px',
        70: '70px',
        75: '75px',
        80: '80px',
        85: '85px',
        90: '90px',
        95: '95px',
        100: '100px',
        150: '150px',
        'minus-10': '-10px',
        'minus-15': '-15px',

     },
     fontSize: {
        0: '0px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        38: '38px',
        40: '40px',
        48: '48px',
        62: '62px',
        66: '66px',
     },
     lineHeight: {
        0: '0px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        42: '42px',
        44: '44px',
        46: '46px',
        56: '56px',
        full: '100%',
        '150_per': '150%',
     },
     letterSpacing: {
        '01em': '0.01em',
        '02em': '0.02em',
        '05em': '0.05em',
        '06em': '0.06em',
        '08em': '0.08em',
        '015em': '0.15em',
     },
     inset: {
        0: '0px',
        1: '1px', 
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        8: '8px',
        9: '9px',
        10: '10px',
        13: '13px',
        15: '15px',
        16: '16px',
        20: '20px',
        25: '25px',
        30: '30px',
        35: '35px',
        40: '40px',
        50: '50px',
        60: '60px',
        70: '70px',
        75: '75px',
        80: '80px',
        100: '100px',
        '40per': '40%',
        '45per': '45%',
        '50per': '50%',
        '100per': '100%',      
     },
     backgroundImage: theme => ({
        none: 'none',
        'footer_gradient': 'radial-gradient(circle, rgba(157,11,82,0.14329481792717091) 0%, rgba(246,240,231,1) 100%)',
     }),
     borderRadius: {
        none: '0',
        1: '1px',
        2: '2px',
        4: '4px',
        5: '5px',
        8: '8px',
        10: '10px',
        15: '15px',
        30: '30px',
        100: '100px', 
        500: '500px',
        999: '999px',
        50: '50%',
        '100_per': '100%',
     },
     fontWeight: {
        hairline: 100,
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
     },
     translate: {
        0: '0px',
        5: '5px',
        10: '10px',
        '50_per': '50%',
        '100_per': '100%',
        'minus_50': '-50%',
        'minus_100': '-100%',
     },

     keyframes: {
        stickySlideDown: {
           '0%': {
              transform: 'translateY(-100%)',
              opacity: '0.7'
           },
           '100%': {
              transform: 'translateY(0)',
              opacity: '1'
           }
        },
        elementMover: {
            '0%': {
               transform: 'translateY(0)'
            },
            '100%': {
               transform: 'translateY(-10px)'
            }
         }
     },
     animation: {
        none: 'none',
        stickySlideDown: 'stickySlideDown 0.5s',
        elementMover: 'elementMover 1s infinite alternate',
     },
     backgroundSize: {
        100: '100%',
        110: '110%',
        120: '120%',
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
     },
     blur: {

     },
     brightness: {

     },
     borderWidth: {
        1: '1px',
        0.8: '0.8px',
        2: '2px',
        0: '0px',
     },
     boxShadow: {
        none: 'none',
        light_shadow: '0px 13px 37px rgba(0, 0, 0, 0.21)',
        soft_shadow: '0px 8px 24px rgba(149, 157, 165, 0.2)',
        hard_shadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
     },
     dropShadow: {
        none: 'none',
        pressBox: '4px 4px 10px 2px rgba(0, 0, 0, 0.4)',
     },
     contrast: {},
     outline: {
        none: 'none',
     },
     ringOffsetWidth: {},
     ringWidth: {},
     saturate: {},
     sepia: {},
     skew: {},
     strokeWidth: {},
     transformOrigin: {},
     extend: {
        backdropBlur: {
           sm: '4px',
           md: '8px',
           xs: '10px',
        },
        maxWidth: {
           auto: 'auto',
           container: '1400px',
        },
        width: {
           5: '5px',
           10: '10px',
           20: '20px',
           25: '25px',
           30: '30px',
           40: '40px',
           50: '50px',
           '50-per': '50%',
           160: '160px',
           144: '144px',
        },
        height: {
           5: '5px',
           10: '10px',
           20: '20px',
           25: '25px',
           30: '30px',
           40: '40px',
           50: '50px',
           160: '160px',
           144: '144px',
        },
        minHeight: {
           auto: 'auto',
        },
        gap: {
          6: '6px',
          10: '10px',
          16: '16px',
          20: '20px',
          25: '25px',
          30: '30px',
        },
        backgroundOpacity: {

        },
        maxHeight: {

        },
        screens: {
          mobile: { 'min': '425px' },
          xl: { 'min': '1200px' },
          xxl: { 'min': '1366px' },    
          maxscreen2: { 'min': '1920px' },    
          maxscreen: { 'min': '2000px' },    

          desktop2: { 'max': '1600px' },
          large_desktop: { 'max': '1600px' },
          desktop: { 'max': '1440px' },
          desktop_small: { 'max': '1400px' },
          laptop: { 'max': '1366px' },               
          xlscreen: { 'max': '1199.9px' },
          lgscreen: { 'max': '1023px' },
          ipad: { 'max': '991px' },  
          mdscreen: { 'max': '767px' },
          smscreen2: { 'max': '639px' }, 
          smscreen: { 'max': '575px' },         
          xsscreen2: { 'max': '425px' },
          xsscreen: { 'max': '375px' },
          xsscreen3: { 'max': '360px' },    
      },
     }
  },
  variantOrder: [

  ],
  variants: {
     // extend: {},
  },
  plugins: [
   // require('tailwindcss'),
     function ({
        addComponents
     }) {
        addComponents({

           '.container-xl': {
              maxWidth: '100%',
              '@screen sm': {
               maxWidth: '740px',
               },
               '@screen md': {
                  maxWidth: '888px',
               },
               '@screen lg': {
                  maxWidth: '1010px',
               },
               '@screen xl': {
                  maxWidth: '1140px',
               },
              '@screen 2xl': {
                 maxWidth: '1440px',
                 margin: 'auto',
              },
           },


           '.container': {
              maxWidth: '100%',
              '@screen sm': {
                 maxWidth: '740px',
              },
              '@screen md': {
                 maxWidth: '888px',
              },
              '@screen lg': {
                 maxWidth: '1010px',
              },
              '@screen xl': {
                 maxWidth: '1140px',
              },
              '@screen 2xl': {
                 maxWidth: '1320px',
              },
           }
        })
     }

  ],
}