import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(99.08deg, rgba(191, 133, 237, 0.2) 8.78%, rgba(106, 219, 255, 0.2) 54.15%, rgba(154, 106, 255, 0.2) 96.61%, rgba(255, 133, 106, 0.2) 125.11%)',
        'section-background': "url('/sectionBackground.webp')",
        'post-background': "url('/postBackground.webp')",
    },
    scrollbarHide: {
      'scrollbar-hide': {
        'scrollbar-width': 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.scrollbar-hide': {
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari, and Edge */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};
export default config;
