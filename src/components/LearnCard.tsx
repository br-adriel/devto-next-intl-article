'use client';

import { useTranslations } from 'next-intl';
import LinkCard from './LinkCard';

export default function LearnCard() {
  const t = useTranslations('home.page');

  return (
    <LinkCard
      content={t('learn.content')}
      link='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
      title={t('learn.title')}
    />
  );
}
