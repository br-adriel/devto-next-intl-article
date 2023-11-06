'use client';

import { useTranslations } from 'next-intl';
import LinkCard from './LinkCard';

export default function DeployCard() {
  const t = useTranslations('home.page');

  return (
    <LinkCard
      content={t('deploy.content')}
      link='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
      title={t('deploy.title')}
    />
  );
}
