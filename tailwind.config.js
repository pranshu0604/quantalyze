module.exports = {
  // ...existing config
  theme: {
    extend: {
      // ...other extensions
      animation: {
        'marquee-right': 'marquee-right 25s linear infinite',
        'marquee-left': 'marquee-left 25s linear infinite',
      },
      keyframes: {
        'marquee-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-left': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  // ...rest of config
};
