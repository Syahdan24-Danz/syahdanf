/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        mac: {
          bg: '#1e1e1e',
          sidebar: '#2d2d2d',
          titlebar: '#3c3c3c',
          border: '#404040',
          text: '#cccccc',
          accent: '#0a84ff',
          red: '#ff5f57',
          yellow: '#febc2e',
          green: '#28c840',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'cursor-blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
