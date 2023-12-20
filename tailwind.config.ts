import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'bg-white': '#FFFFFF',
        'bg-grayI': '#E1E1E1',
        'bg-blue': '#54AFE3',
        'bg-grayT': '#767676',
        'primary-color': '#54AFE3',
        'bannerExplore': '#DEE7F9',
        'purpleTitleBanner': '#246590',
        'yellowBtn': '#FFFB9E',
        'whiteSeachField': '#F8F8F8',
        'blueBtnFooter': '#3298C6'
      },
      boxShadow: {
        'cardBook': '4px 4px 5px rgba(0, 0, 0, 0.3)'
      },
      spacing: {
        'cardSpacing': '34rem'
      }
    },
  },
  plugins: [],
}
export default config
