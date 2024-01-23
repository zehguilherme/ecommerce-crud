import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    fontSize: {
      sm: ["12px", "14.5px"],
      base: ["14px", "16.9px"],
      lg: ["16px", "19.4px"],
      xl: ["20px", "24.2px"],
      "2xl": ["22px", "27px"],
      "3xl": ["24px", "29px"],
    },
    extend:{
      colors:{
        black:{
          black1: '#5E6366',
          black2: '#2B2F32',
          black3: '#130F26',
          black4: '#000000'
        },
        gray: {
          gray1: '#CFD3D4',
          gray2: '#ABAFB1',
          gray3: '#83898C',
          gray4: '#D9D9D9',
          gray5: '#DDE2E5',
          gray6: '#EFF1F9',
          gray7: '#F2F4F5',
        },
        red: {
          red1: '#F57E77',
          red2: '#FCF3F2'
        },
        blue: {
          blue1: '#007BFF',
          blue2: '#E9ECF8'
        },
        green: {
          gree1: '#32936F',
          gree2: '#E5F6ED',
        },
        purple: '#5570F1',
        white: '#ffffff'
      }
    }
  },
  plugins: [],
}
export default config
