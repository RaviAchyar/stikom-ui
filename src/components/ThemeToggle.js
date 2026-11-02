"use client";

import styled from "styled-components";
import { useTheme } from "@/components/ThemeProvider";

const ToggleButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px ${({ theme }) => theme.colors.shadow};
  }
`;

export default function ThemeToggle() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} type="button" aria-label="Toggle theme">
      {themeMode === "light" ? "🌙 Dark" : "☀️ Light"}
    </ToggleButton>
  );
}
