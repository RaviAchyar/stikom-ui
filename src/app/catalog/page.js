"use client";

import styled from "styled-components";
import Button from "@/components/Button";
import Badge from "@/components/Badge";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PageWrap = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: clamp(1.8rem, 2.6vw, 2.6rem);
  margin-top: ${({ theme }) => theme.spacing.sm};
  letter-spacing: -0.04em;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

const ShowcaseCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SwatchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Swatch = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ color }) => color};
`;

const TokenList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const TokenCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TypographyExample = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export default function CatalogPage() {
  return (
    <PageWrap>
      <Navbar />
      <Container>
        <Section>
          <SectionHeader>
            <Badge variant="primary">Design Tokens</Badge>
            <Title>Color Palette & Scale System</Title>
          </SectionHeader>
          <TokenList>
            <TokenCard>
              <SwatchRow>
                <Swatch color="#043975" />
                <Swatch color="#0384D6" />
                <Swatch color="#FFBF1B" />
              </SwatchRow>
              <strong>Primary / Secondary / Accent</strong>
            </TokenCard>
            <TokenCard>
              <SwatchRow>
                <Swatch color="#FFFFFF" />
                <Swatch color="#F5F7FB" />
                <Swatch color="#10233B" />
              </SwatchRow>
              <strong>Surface / Background / Text</strong>
            </TokenCard>
            <TokenCard>
              <TypographyExample>
                <span style={{ fontSize: "2rem", fontWeight: 700 }}>Heading</span>
                <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>Subheading</span>
                <span style={{ fontSize: "1rem" }}>Body text</span>
                <span style={{ fontSize: "0.75rem" }}>Caption</span>
              </TypographyExample>
            </TokenCard>
            <TokenCard>
              <TypographyExample>
                <span>Spacing: xs 4px, sm 8px, md 16px</span>
                <span>Radius: sm 4px, md 8px, lg 12px, full 9999px</span>
              </TypographyExample>
            </TokenCard>
          </TokenList>
        </Section>

        <Section>
          <SectionHeader>
            <Badge variant="primary">Button Showcase</Badge>
            <Title>Variants & Sizes</Title>
          </SectionHeader>
          <Grid>
            <ShowcaseCard>
              <Button variant="primary" size="small">Primary Small</Button>
              <Button variant="primary" size="medium">Primary Medium</Button>
              <Button variant="secondary" size="small">Secondary Small</Button>
              <Button variant="secondary" size="medium">Secondary Medium</Button>
            </ShowcaseCard>

            <ShowcaseCard>
              <Button variant="outline" size="small">Outline Small</Button>
              <Button variant="outline" size="medium">Outline Medium</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </ShowcaseCard>
          </Grid>
        </Section>

        <Section>
          <SectionHeader>
            <Badge variant="success">Card Showcase</Badge>
            <Title>Reusable Content Cards</Title>
          </SectionHeader>
          <Grid>
            <Card>
              <h3>Program Studi</h3>
              <p>Informasi akademik yang dirancang agar mudah dibaca dan konsisten secara visual.</p>
            </Card>
            <Card>
              <h3>Keunggulan Kampus</h3>
              <p>Highlight utama untuk memamerkan nilai, inovasi, dan pengalaman belajar mahasiswa.</p>
            </Card>
            <Card>
              <h3>Berita Kampus</h3>
              <p>Konten promosi dan pengumuman yang mudah dikelola dalam sistem desain terstruktur.</p>
            </Card>
          </Grid>
        </Section>

        <Section>
          <SectionHeader>
            <Badge variant="warning">Badge Showcase</Badge>
            <Title>Badge Variants</Title>
          </SectionHeader>
          <SwatchRow>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </SwatchRow>
        </Section>

        <Section>
          <SectionHeader>
            <Badge variant="neutral">Theme Showcase</Badge>
            <Title>Light Mode & Dark Mode</Title>
          </SectionHeader>
          <Grid>
            <ShowcaseCard>
              <h3>Light Theme</h3>
              <SwatchRow>
                <Swatch color="#043975" />
                <Swatch color="#0384D6" />
                <Swatch color="#FFBF1B" />
                <Swatch color="#F5F7FB" />
              </SwatchRow>
            </ShowcaseCard>
            <ShowcaseCard>
              <h3>Dark Theme</h3>
              <SwatchRow>
                <Swatch color="#5EA4FF" />
                <Swatch color="#7CC8FF" />
                <Swatch color="#FFCB4D" />
                <Swatch color="#0B1220" />
              </SwatchRow>
            </ShowcaseCard>
          </Grid>
        </Section>
      </Container>
      <Footer />
    </PageWrap>
  );
}
