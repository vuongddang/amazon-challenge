module.exports = {
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#cd9042',
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}