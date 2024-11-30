import { getCookie } from '@/src/lib/cookie';
import { redirect } from 'next/navigation';

export default async function HomePage({ params }) {
  const { locale } = await params;
  const token = await getCookie("token");

  if (!token) {
    redirect("/authenticate");
  }
  
  return null;
}