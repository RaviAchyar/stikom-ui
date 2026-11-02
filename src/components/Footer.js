"use client";

import Link from "next/link";
import styled from "styled-components";

const FooterWrap = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.subheading.md};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const LinkLabel = styled(Link)`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.muted};
`;

const BottomBar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  color: ${({ theme }) => theme.colors.muted};
`;

export default function Footer() {
  return (
    <FooterWrap>
      <FooterInner>
        <Brand>
          <Title>STIKOM PGRI Banyuwangi</Title>
          <Text>
            Mini Design System untuk representasi modern identitas institusi pendidikan teknologi yang menerapkan
            pendekatan akademik, profesional, dan berorientasi pada kebutuhan industri.
          </Text>
        </Brand>

        <List>
          <Title as="span">Navigasi</Title>
          <LinkLabel href="/">Beranda</LinkLabel>
          <LinkLabel href="/#profil">Profil</LinkLabel>
          <LinkLabel href="/#program-studi">Program Studi</LinkLabel>
          <LinkLabel href="/#berita">Berita</LinkLabel>
          <LinkLabel href="/catalog">Katalog Komponen</LinkLabel>
        </List>

        <Info>
          <Title as="span">Kontak</Title>
          <span>Website: stikombanyuwangi.ac.id</span>
          <span>Email: info@stikombanyuwangi.ac.id</span>
          <span>PMB: Pendaftaran Mahasiswa Baru</span>
          <span>© 2026 STIKOM PGRI Banyuwangi</span>
        </Info>
      </FooterInner>
      <BottomBar>Mini Design System • STIKOM UI</BottomBar>
    </FooterWrap>
  );
}
