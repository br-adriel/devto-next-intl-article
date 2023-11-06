import DeployCard from '@/components/DeployCard';
import Description from '@/components/Description';
import DocsCard from '@/components/DocsCard';
import LearnCard from '@/components/LearnCard';
import TemplatesCard from '@/components/TemplatesCard';
import Image from 'next/image';
import styles from '../page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Description />

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <DocsCard />
        <LearnCard />
        <TemplatesCard />
        <DeployCard />
      </div>
    </main>
  );
}
