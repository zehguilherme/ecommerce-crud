import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    fontSize:{

    },
    extend:{
      colors:{
        black:{
          black6: '#000000',
          black5: '#2B2F32',
          black4: '#5E6366',
          black3: '#83898C',
          black2: '#ABAFB1',
          black1: '#CFD3D4'
        },
        gray: {
          gray1: '#DDE2E5',
          gray2: '#D9D9D9'
        },
        red: {
          red1: '#F57E77',
          red2: '#FCF3F2'
        },
        green: '#32936F',
        purple: '#5570F1',
        blue: {
          blue1: '#007BFF',
          blue2: '#E9ECF8'
        },
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}
export default config
