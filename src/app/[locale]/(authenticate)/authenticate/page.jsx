import Image from 'next/image';

import Form from '@/src/components/form';

import Logo from "@/public/images/logo.png"

export default async function AuthenticatePage({ params, searchParams }) {
    const { locale } = await params;
    const { mode } = await searchParams;

    return (
        <section className="h-[100vh] container flex items-center justify-center">
            <div className="bg-boxes border border-boxes-line w-full max-w-96 mx-auto py-10 px-5 rounded-lg">
                <div className='flex justify-center mb-10'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        width={50}
                        height={50}
                        priority
                    />
                </div>
                <Form locale={locale} mode={mode} />
            </div>
        </section>
    );
}