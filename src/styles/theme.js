export const baseColors = {
  primary: "#043975",
  secondary: "#0384D6",
  accent: "#FFBF1B",
  background: "#F5F7FB",
  surface: "#FFFFFF",
  text: "#10233B",
  muted: "#5F6F8A",
  border: "#D9E2F1",
};

export const lightTheme = {
  name: "light",
  colors: {
    primary: "#043975",
    secondary: "#0384D6",
    accent: "#FFBF1B",
    background: "#F5F7FB",
    surface: "#FFFFFF",
    text: "#10233B",
    muted: "#5F6F8A",
    border: "#D9E2F1",
    success: "#1E8E5A",
    warning: "#E79B00",
    neutral: "#5A6475",
    shadow: "rgba(4, 57, 117, 0.12)",
    hover: "rgba(4, 57, 117, 0.08)",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    heading: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
      lg: "3.25rem",
    },
    subheading: {
      sm: "1.125rem",
      md: "1.5rem",
      lg: "2rem",
    },
    body: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    caption: "0.75rem",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
};

export const darkTheme = {
  name: "dark",
  colors: {
    primary: "#5EA4FF",
    secondary: "#7CC8FF",
    accent: "#FFCB4D",
    background: "#0B1220",
    surface: "#131E2E",
    text: "#EEF4FF",
    muted: "#AEC0D8",
    border: "#27354A",
    success: "#34C77B",
    warning: "#FFB524",
    neutral: "#A6B2C5",
    shadow: "rgba(10, 18, 32, 0.4)",
    hover: "rgba(94, 164, 255, 0.12)",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    heading: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2.5rem",
      lg: "3.25rem",
    },
    subheading: {
      sm: "1.125rem",
      md: "1.5rem",
      lg: "2rem",
    },
    body: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    caption: "0.75rem",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
    full: "9999px",
  },
};

export const themeMap = {
  light: lightTheme,
  dark: darkTheme,
};
