"use client";

import styled, { css } from "styled-components";

const variantStyles = {
  primary: css`
    background: ${({ theme }) => `${theme.colors.primary}1A`};
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => `${theme.colors.primary}33`};
  `,
  success: css`
    background: ${({ theme }) => `${theme.colors.success}1A`};
    color: ${({ theme }) => theme.colors.success};
    border-color: ${({ theme }) => `${theme.colors.success}33`};
  `,
  warning: css`
    background: ${({ theme }) => `${theme.colors.warning}1A`};
    color: ${({ theme }) => theme.colors.warning};
    border-color: ${({ theme }) => `${theme.colors.warning}33`};
  `,
  neutral: css`
    background: ${({ theme }) => `${theme.colors.neutral}1A`};
    color: ${({ theme }) => theme.colors.neutral};
    border-color: ${({ theme }) => `${theme.colors.neutral}33`};
  `,
};

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.typography.caption};
  font-weight: 700;
  letter-spacing: 0.02em;
  ${({ $variant }) => variantStyles[$variant] || variantStyles.primary};
`;

export default function Badge({ children, variant = "primary" }) {
  return <StyledBadge $variant={variant}>{children}</StyledBadge>;
}
