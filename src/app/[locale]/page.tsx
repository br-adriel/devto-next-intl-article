'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from '../page.module.css';

export default function Home() {
  const t = useTranslations('home.page');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {t('get-started')}&nbsp;
          <code className={styles.code}>src/app/[locale]/page.tsx</code>
        </p>
        <div>
          <a
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('by') + ' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

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
        <a
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            {t('docs.title')} <span>-&gt;</span>
          </h2>
          <p>{t('docs.content')}</p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            {t('learn.title')}
            <span>-&gt;</span>
          </h2>
          <p>{t('learn.content')}</p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            {t('templates.title')} <span>-&gt;</span>
          </h2>
          <p>{t('templates.content')}</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2>
            {t('deploy.title')} <span>-&gt;</span>
          </h2>
          <p>{t('deploy.content')}</p>
        </a>
      </div>
    </main>
  );
}
