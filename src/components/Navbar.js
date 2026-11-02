"use client";

import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import ThemeToggle from "@/components/ThemeToggle";

const TopBar = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: ${({ theme }) => theme.typography.caption};
  letter-spacing: 0.02em;
`;

const TopBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const TopBarText = styled.span`
  opacity: 0.9;
`;

const TopBarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background: ${({ theme }) => `${theme.colors.background}CC`};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.subheading.md};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
`;

const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: #fff;
  font-size: 0.8rem;
  box-shadow: 0 10px 18px rgba(4, 57, 117, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: 820px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 820px) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
`;

const MobileMenu = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  display: ${({ $open }) => ($open ? "block" : "none")};

  @media (min-width: 821px) {
    display: none;
  }
`;

const MobileMenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radius.md};

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TopBar>
        <TopBarInner>
          <TopBarText>STIKOM PGRI Banyuwangi • Perguruan Tinggi Teknologi Informasi</TopBarText>
          <TopBarLinks>
            <span>info@stikombanyuwangi.ac.id</span>
            <span>PMB Online</span>
          </TopBarLinks>
        </TopBarInner>
      </TopBar>

      <Nav>
        <NavInner>
          <Brand href="/">
            <BrandMark>S</BrandMark>
            STIKOM UI
          </Brand>

          <NavLinks>
            <NavLink href="/">Beranda</NavLink>
            <NavLink href="/#profil">Profil</NavLink>
            <NavLink href="/#program-studi">Program Studi</NavLink>
            <NavLink href="/#berita">Berita</NavLink>
            <NavLink href="/catalog">Katalog Komponen</NavLink>
            <ThemeToggle />
          </NavLinks>

          <MobileControls>
            <ThemeToggle />
            <MenuButton type="button" aria-label="Toggle menu" onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? "✕" : "☰"}
            </MenuButton>
          </MobileControls>
        </NavInner>

        <MobileMenu $open={isOpen}>
          <MobileMenuList>
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Beranda</MobileNavLink>
            <MobileNavLink href="/#profil" onClick={() => setIsOpen(false)}>Profil</MobileNavLink>
            <MobileNavLink href="/#program-studi" onClick={() => setIsOpen(false)}>Program Studi</MobileNavLink>
            <MobileNavLink href="/#berita" onClick={() => setIsOpen(false)}>Berita</MobileNavLink>
            <MobileNavLink href="/catalog" onClick={() => setIsOpen(false)}>Katalog Komponen</MobileNavLink>
          </MobileMenuList>
        </MobileMenu>
      </Nav>
    </>
  );
}
