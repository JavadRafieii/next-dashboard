import { getTranslations } from 'next-intl/server';

import Form from '@/src/components/form';

export default async function AuthenticatePage({ params, searchParams }) {
    const { locale } = await params;
    const { mode } = await searchParams;

    const t = await getTranslations('Authenticate');

    return (
        <section className="h-[100vh] container flex items-center justify-center">
            <div className="bg-boxes border border-boxes-line w-full max-w-96 mx-auto py-10 px-5 rounded-lg">
                <h1 className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-3xl text-white text-center mb-10`}>
                    {t('title')}
                </h1>
                <Form locale={locale} mode={mode} />
            </div>
        </section>
    );
}