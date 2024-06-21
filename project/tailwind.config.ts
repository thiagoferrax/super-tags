import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.6) 100%), url('(public)/images/background-pattern.webp')",
      },
    },
  },
  plugins: [],
} satisfies Config
