'use client';

import { useTranslations } from 'next-intl';
import LinkCard from './LinkCard';

export default function TemplatesCard() {
  const t = useTranslations('home.page');

  return (
    <LinkCard
      content={t('docs.content')}
      link='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
      title={t('docs.title')}
    />
  );
}
