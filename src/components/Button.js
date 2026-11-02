"use client";

import styled, { css } from "styled-components";

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: #fff;

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;

    &:hover:not(:disabled) {
      filter: brightness(1.06);
    }
  `,
  outline: css`
    background: transparent;
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.hover};
    }
  `,
};

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.typography.body.sm};
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.typography.body.md};
  `,
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: none;
  text-decoration: none;
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary};
  ${({ $size }) => sizeStyles[$size] || sizeStyles.medium};

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.shadow};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    box-shadow: none;
    transform: none;
  }
`;

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  ...props
}) {
  return (
    <StyledButton $variant={variant} $size={size} onClick={onClick} type="button" {...props}>
      {children}
    </StyledButton>
  );
}
