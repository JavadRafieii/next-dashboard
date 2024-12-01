import { getCookie } from '@/src/lib/cookie';
import { redirect } from 'next/navigation';
import FirstRow from './components/first-row/first-row';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const token = await getCookie("token");

  if (!token) {
    redirect("/authenticate");
  }

  return (
    <section className='p-5'>
      <FirstRow />
    </section>
  );
}