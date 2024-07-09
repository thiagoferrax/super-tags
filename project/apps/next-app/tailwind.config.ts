import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%), url('../../public/background-pattern.webp')",
      },
      fontSize: {
        '2xs': '.813rem',  // 13px
        '2sm': '.938rem',  // 15px
      },
      zIndex: {
        '1': '1',
        '2': '2',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config
