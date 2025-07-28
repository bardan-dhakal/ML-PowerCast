/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(var(--primary))',
        'accent': 'hsl(var(--accent))',
        'energy-warning': 'hsl(var(--energy-warning))',
        'energy-success': 'hsl(var(--energy-success))',
        'energy-grid': 'hsl(var(--energy-grid))',
        'card': 'hsl(var(--card))',
        'border': 'hsl(var(--border))',
        'muted': 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'foreground': 'hsl(var(--foreground))',
        'background': 'hsl(var(--background))',
      },
      boxShadow: {
        'elevated': '0 10px 25px rgba(0, 0, 0, 0.2)',
        'region': '0 4px 12px rgba(59, 130, 246, 0.1)',
        'region-hover': '0 16px 48px rgba(59, 130, 246, 0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
        'gradient-map': 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))',
      },
    },
  },
  plugins: [],
} 