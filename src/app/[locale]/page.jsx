import { getTranslations } from 'next-intl/server';

import { getCookie } from '@/src/lib/cookie';
import { redirect } from 'next/navigation';



export default async function HomePage({ params }) {
  const { locale } = await params;
  const token = await getCookie("token");

  if (!token) {
    redirect("/authenticate");
  }

  const t = await getTranslations('HomePage');
  
  return (
    <div>
      <h1 className={`${locale === "fa" ? 'font-IranSans' : 'font-Roboto-Thin'} text-4xl`}>{t('title')}</h1>
    </div>
  );
}