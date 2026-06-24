import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'noir-profond': '#0A0A0A',
        'noir-carte': '#141414',
        'noir-leger': '#1E1E1E',
        'rouge-sang': '#C0392B',
        'rouge-fonce': '#962D22',
        'blanc-casse': '#F5F0E8',
        'blanc-attenue': '#C8C0B0',
        'or-mat': '#8B7355',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
