/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './app.js',
    './webApp/index.html',
    './webApp/app.js',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'app-bg': '#F2F5F3',          // Light Mode Background (Soft Mint Grey)
        'app-bg-dark': '#0C1210',     // Dark Mode Background (Deep Forest)

        // Cards / Surfaces
        'surface-light': '#FFFFFF',   // Light Mode Card (Pure White)
        'surface-dark': '#14201D',    // Dark Mode Card (Matte Deep Green)

        // Typography
        'text-main': '#111827',       // Light Mode Text (Near Black)
        'text-inv': '#ECFDF5',        // Dark Mode Text (Mint White)
        'text-muted': '#6B7280',      // Light Mode Secondary Text
        'text-muted-dark': '#6E8E85', // Dark Mode Secondary Text

        // Accents (Shared across modes)
        'brand-green': '#10B981',     // Vibrant Spring Green (Buttons/Icons)
        'brand-hover': '#059669',     // Darker Green for hover states
        'danger': '#EF4444',          // Red for Delete/Error
        'warning-bg': '#FFEDD5',      // Light Orange bg for expiring
        'warning-text': '#C2410C',    // Dark Orange text for expiring
        'neutral-dark': '#1F2E28',
        'neutral-light': '#E8F3F0',
        'secondary-light': '#F3F4F6',
        'tertiary-dark': '#1F2937',
        'primary-dark': '#059669',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      borderRadius: {
        'card': '1.5rem',  // 24px - Large rounded corners for cards
        'pill': '9999px',  // Full rounded for buttons
      }
    },
  },
  plugins: [],
}
