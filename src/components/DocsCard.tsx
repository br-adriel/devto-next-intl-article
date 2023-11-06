'use client';

import { useTranslations } from 'next-intl';
import LinkCard from './LinkCard';

export default function DocsCard() {
  const t = useTranslations('home.page');

  return (
    <LinkCard
      content={t('docs.content')}
      link='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
      title={t('docs.title')}
    />
  );
}
