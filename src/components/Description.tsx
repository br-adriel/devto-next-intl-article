'use client';

import styles from '@/app/page.module.css';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Description() {
  const t = useTranslations('home.page');

  return (
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
  );
}
