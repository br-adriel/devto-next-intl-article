import styles from '@/app/page.module.css';

interface Props {
  link: string;
  title: string;
  content: string;
}

export default function LinkCard({ content, link, title }: Props) {
  return (
    <a
      href={link}
      className={styles.card}
      target='_blank'
      rel='noopener noreferrer'
    >
      <h2>
        {title}
        <span>-&gt;</span>
      </h2>
      <p>{content}</p>
    </a>
  );
}
