"use client";

import styled from "styled-components";
import Link from "next/link";
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

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.xl} 0 ${theme.spacing.xl}`};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  line-height: 1.02;
  letter-spacing: -0.06em;
  color: ${({ theme }) => theme.colors.text};
`;

const HeroDescription = styled.p`
  max-width: 620px;
  font-size: ${({ theme }) => theme.typography.body.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.muted};
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const HeroVisual = styled.div`
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  min-height: 500px;
  object-fit: cover;
  display: block;
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: 0 26px 55px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeroOverlay = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(4, 57, 117, 0.82);
  color: #fff;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  strong {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.typography.subheading.md};
  }
`;

const Section = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.9rem, 2.5vw, 2.6rem);
  line-height: 1.2;
  letter-spacing: -0.04em;
`;

const EditorialGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const EditorialContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const EditorialText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.8;
  font-size: ${({ theme }) => theme.typography.body.md};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  min-height: 120px;
  justify-content: center;
`;

const StatValue = styled.strong`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const ProfileVisual = styled.div`
  position: relative;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
  display: block;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 22px 45px ${({ theme }) => theme.colors.shadow};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ProgramCardBody = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  height: 100%;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.surface} 0%, ${({ theme }) => `${theme.colors.surface}`} 100%);
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ProgramName = styled.h3`
  font-size: ${({ theme }) => theme.typography.subheading.md};
`;

const ProgramList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.muted};
`;

const ProgramListItem = styled.li`
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};
  line-height: 1.7;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NewsLayout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const LeadNews = styled(Card)`
  overflow: hidden;
  padding: 0;
`;

const LeadImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
`;

const LeadBody = styled.div`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg} ${theme.spacing.xl}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NewsColumn = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NewsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
`;

const NewsBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NewsMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.caption};
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.subheading.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureText = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`;

const FeatureIcon = styled.div`
  display: inline-flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => `${theme.colors.primary}14`};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTAWrap = styled(Card)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  border: none;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CTATitle = styled.h2`
  color: #fff;
  font-size: clamp(1.8rem, 3vw, 2.7rem);
  line-height: 1.2;
  letter-spacing: -0.04em;
`;

export default function HomePage() {
  const featureItems = [
    {
      icon: "🚀",
      title: "Fokus Teknologi dan Inovasi",
      text: "Pembelajaran berbasis industri dengan pendekatan kreatif, analitis, dan adaptif terhadap perkembangan digital.",
    },
    {
      icon: "🤝",
      title: "Kerja Sama dan Magang Industri",
      text: "Mahasiswa dibekali kesempatan praktik yang relevan dengan kebutuhan mitra dan ekosistem kerja saat ini.",
    },
    {
      icon: "🎓",
      title: "Biaya Terjangkau dan Beasiswa",
      text: "Akses pendidikan yang inklusif dan fokus pada peluang pengembangan kompetensi tanpa membebani mahasiswa.",
    },
    {
      icon: "🏫",
      title: "Fasilitas Modern dan Terpadu",
      text: "Lingkungan pembelajaran yang kondusif mendukung kolaborasi, produktivitas, dan kreativitas akademik.",
    },
  ];

  const programs = [
    {
      name: "Teknik Informatika",
      level: "S1",
      badge: "Rekayasa Digital",
      items: [
        "Rekayasa Web & Mobile",
        "Artificial Intelligence",
        "Jaringan dan Cloud Computing",
        "Cyber Security dan Data Science",
      ],
    },
    {
      name: "Manajemen Informatika",
      level: "D3",
      badge: "Sistem Informasi",
      items: [
        "Sistem Informasi Bisnis",
        "Desain UI/UX",
        "Database Administration",
        "Digital Marketing & Analytics",
      ],
    },
  ];

  const newsItems = [
    {
      category: "Acara",
      title: "Pelatihan digital dan inovasi mahasiswa meningkat secara berkelanjutan.",
      text: "Program pendampingan teknologi memberi ruang kolaborasi untuk mendorong kreativitas dan kompetensi digital mahasiswa.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    },
    {
      category: "Prestasi",
      title: "Mahasiswa STIKOM berkontribusi dalam proyek inovasi berbasis teknologi.",
      text: "Pengalaman berbasis proyek memperkuat kemampuan analisis, desain, dan pengembangan solusi nyata.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <PageWrap>
      <Navbar />
      <Container>
        <Hero>
          <HeroText>
            <Badge variant="primary">STIKOM PGRI Banyuwangi</Badge>
            <HeroTitle>Membangun Generasi Digital Masa Depan</HeroTitle>
            <HeroDescription>
              STIKOM PGRI Banyuwangi hadir sebagai perguruan tinggi yang menyiapkan mahasiswa untuk unggul
              dalam teknologi informasi, inovasi, dan adaptasi terhadap kebutuhan industri masa kini.
            </HeroDescription>
            <HeroActions>
              <Link href="https://stikombanyuwangi.ac.id/" target="_blank" rel="noreferrer">
                <Button variant="primary">Kenali Kampus</Button>
              </Link>
              <Link href="#program-studi">
                <Button variant="outline">Lihat Program Studi</Button>
              </Link>
            </HeroActions>
          </HeroText>

          <HeroVisual>
            <HeroImage
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
              alt="Kampus STIKOM PGRI Banyuwangi"
            />
            <HeroOverlay>
              <strong>Academic Excellence</strong>
              <div>Inovasi, kolaborasi, dan teknologi untuk masa depan.</div>
            </HeroOverlay>
          </HeroVisual>
        </Hero>

        <Section id="profil">
          <SectionHeading>
            <Badge variant="neutral">Profil Kampus</Badge>
            <SectionTitle>Sambutan dan identitas STIKOM PGRI Banyuwangi</SectionTitle>
          </SectionHeading>
          <EditorialGrid>
            <EditorialContent>
              <EditorialText>
                STIKOM PGRI Banyuwangi berkomitmen untuk menjadi lembaga pendidikan yang menghasilkan lulusan
                siap kerja, kreatif, dan berdaya saing di bidang teknologi informasi. Dengan pendekatan belajar
                yang aplikatif dan relevan, kampus ini mendorong mahasiswa untuk tumbuh dalam lingkungan akademik
                yang mendukung inovasi dan pengembangan diri.
              </EditorialText>
              <EditorialText>
                Keberadaan program studi yang relevan dengan kebutuhan industri menjadi fondasi utama dalam membangun
                lulusan yang unggul. Kombinasi antara teori, praktik, dan pengalaman kolaboratif menjadi kekuatan
                pembelajaran yang terus dikembangkan di kampus ini.
              </EditorialText>
              <StatsGrid>
                <StatCard>
                  <StatValue>4+</StatValue>
                  <span>Fokus Keahlian</span>
                </StatCard>
                <StatCard>
                  <StatValue>2</StatValue>
                  <span>Program Studi</span>
                </StatCard>
                <StatCard>
                  <StatValue>100%</StatValue>
                  <span>Berorientasi Industri</span>
                </StatCard>
              </StatsGrid>
            </EditorialContent>

            <ProfileVisual>
              <ProfileImage
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Mahasiswa dan lingkungan pendidikan"
              />
            </ProfileVisual>
          </EditorialGrid>
        </Section>

        <Section>
          <SectionHeading>
            <Badge variant="primary">Keunggulan Kampus</Badge>
            <SectionTitle>Lingkungan belajar yang mendorong perkembangan kompetensi.</SectionTitle>
          </SectionHeading>
          <FeatureGrid>
            {featureItems.map((item) => (
              <Card key={item.title}>
                <FeatureIcon>{item.icon}</FeatureIcon>
                <FeatureTitle>{item.title}</FeatureTitle>
                <FeatureText>{item.text}</FeatureText>
              </Card>
            ))}
          </FeatureGrid>
        </Section>

        <Section id="program-studi">
          <SectionHeading>
            <Badge variant="warning">Program Studi</Badge>
            <SectionTitle>Program studi yang relevan dengan kebutuhan industri masa kini.</SectionTitle>
          </SectionHeading>
          <ProgramGrid>
            {programs.map((program) => (
              <ProgramCardBody key={program.name}>
                <MetaRow>
                  <ProgramName>{program.name}</ProgramName>
                  <Badge variant="primary">{program.level}</Badge>
                </MetaRow>
                <Badge variant="success">{program.badge}</Badge>
                <ProgramList>
                  {program.items.map((item) => (
                    <ProgramListItem key={item}>{item}</ProgramListItem>
                  ))}
                </ProgramList>
                <Link href="https://stikombanyuwangi.ac.id/" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="small">
                    Detail
                  </Button>
                </Link>
              </ProgramCardBody>
            ))}
          </ProgramGrid>
        </Section>

        <Section id="berita">
          <SectionHeading>
            <Badge variant="primary">Berita & Informasi</Badge>
            <SectionTitle>Aktivitas terkini kampus, prestasi, dan inovasi mahasiswa.</SectionTitle>
          </SectionHeading>
          <NewsLayout>
            <LeadNews>
              <LeadImage
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Berita kampus utama"
              />
              <LeadBody>
                <NewsMeta>
                  <Badge variant="warning">Berita Utama</Badge>
                  <span>Campus Update</span>
                </NewsMeta>
                <h3>Pelatihan digital dan inovasi mahasiswa terus meningkat melalui program pembelajaran yang relevan.</h3>
                <FeatureText>
                  Program berbasis praktik memperkuat kemampuan berkolaborasi, menyelesaikan masalah, dan menghasilkan
                  solusi digital yang siap diterapkan di dunia kerja.
                </FeatureText>
                <Button variant="secondary" size="small">
                  Baca Selengkapnya
                </Button>
              </LeadBody>
            </LeadNews>

            <NewsColumn>
              {newsItems.map((item) => (
                <NewsCard key={item.title}>
                  <NewsImage src={item.image} alt={item.title} />
                  <NewsBody>
                    <NewsMeta>
                      <Badge variant="warning">{item.category}</Badge>
                      <span>Update</span>
                    </NewsMeta>
                    <h3>{item.title}</h3>
                    <FeatureText>{item.text}</FeatureText>
                    <Button variant="secondary" size="small">
                      Baca Selengkapnya
                    </Button>
                  </NewsBody>
                </NewsCard>
              ))}
            </NewsColumn>
          </NewsLayout>
        </Section>

        <CTAWrap>
          <CTAContent>
            <Badge variant="success">PMB</Badge>
            <CTATitle>Siap menjadi bagian dari ekosistem digital STIKOM PGRI Banyuwangi?</CTATitle>
          </CTAContent>
          <Link href="https://stikombanyuwangi.ac.id/" target="_blank" rel="noreferrer">
            <Button variant="secondary">Daftar PMB</Button>
          </Link>
        </CTAWrap>
      </Container>
      <Footer />
    </PageWrap>
  );
}
