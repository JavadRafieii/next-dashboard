import { getCookie } from '@/src/lib/cookie';
import { redirect } from 'next/navigation';
import FirstRow from './components/e-commerce/first-row/first-row';
import SecondRow from './components/e-commerce/second-row/second-row';
import ThirdRow from './components/e-commerce/third-row/third-row';
import FourthRow from './components/e-commerce/fourth-row/fourth-row';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const token = await getCookie("token");

  if (!token) {
    redirect("/authenticate");
  }

  return (
    <div className='p-5 space-y-5'>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
      <FourthRow />
    </div>
  );
}