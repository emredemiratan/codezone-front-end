import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            blackblack: 'var(--blackblack)',
            'blackblack-500': 'var(--blackblack-500)',
            'blackblack-700': 'var(--blackblack-700)',
            'blackblack-800': 'var(--blackblack-800)',
            'blackblack-900': 'var(--blackblack-900)',
            'blackblack-950': 'var(--blackblack-950)',
            blackwhite: 'var(--blackwhite)',
            yellow: 'var(--yellow)',
         },
         fontFamily: {
            'saira-14-bold': 'var(--saira-14-bold-font-family)',
            'saira-14-reg': 'var(--saira-14-reg-font-family)',
            'saira-16-bold': 'var(--saira-16-bold-font-family)',
            'saira-16-reg': 'var(--saira-16-reg-font-family)',
            'saira-cond-25-bold': 'var(--saira-cond-25-bold-font-family)',
            'saira-cond-40-bold': 'var(--saira-cond-40-bold-font-family)',
            'saira-cond-display': 'var(--saira-cond-display-font-family)',
         },
         backgroundImage: {
            'hero-pattern': "url('https://c.animaapp.com/fWtWwMnc/img/hip-hop-singer-stage-during-concertative-ai-2.png')",
            'live-stream-pattern': "url('https://c.animaapp.com/fWtWwMnc/img/group-5771.png')",
            'trend-1': "url('https://c.animaapp.com/fWtWwMnc/img/group@2x.png')",
            'trend-2': "url('https://c.animaapp.com/fWtWwMnc/img/group-2@2x.png')",
            'trend-3': "url('https://c.animaapp.com/fWtWwMnc/img/group-3@2x.png')",
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
};

export default config;
