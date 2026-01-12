/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gov-blue': '#1b3a6d', // Dark blue for headers
        'nav-blue': '#004b93', // Navigation bar blue
        'banner-blue': '#0066cc', // Main banner blue
        'gov-red': '#cc0000', // Red for helpdesk
        'sidebar-bg': '#f0f2f5', // Light gray for sidebar
      },
    },
  },
  plugins: [],
}
