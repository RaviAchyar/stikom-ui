import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";
import { ThemeProvider } from "@/components/ThemeProvider";
import GlobalStyles from "@/styles/GlobalStyles";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "STIKOM UI | Mini Design System",
  description: "Mini Design System STIKOM UI built with Next.js and Styled Components.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={montserrat.variable}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
