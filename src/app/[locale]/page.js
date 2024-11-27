import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';

export default function HomePage({ params }) {
  const { locale } = params;
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1 className={`${locale === "fa" ? 'font-IranSans': 'font-Roboto-Thin'} text-4xl`}>{t('title')}</h1>
    </div>
  );
}