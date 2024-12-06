import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Chair from "@/public/images/chair.png";
import SplineAreaChart from "../../charts/spline-area-chart/spline-area-chart";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function TopProductsWidget() {
    const t = useTranslations('TopProductsWidget');
    const locale = useLocale();

    return (
        <div className="bg-boxes p-5 rounded-lg h-full">
            <div className='mb-5'>
                <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-2xl`}>{t('title')}</h4>
                <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center gap-x-1`}><BsCalendar2DateFill className='text-sm mb-1' />{t('subTitle')}</p>
            </div>
            <ul className="space-y-5">
                {Array.from({ length: 4 }).map((_, index) => (
                    <li key={index} className="flex items-center gap-3 justify-between bg-light-boxes p-3 py-2 rounded-lg border border-line transition hover:-translate-y-1 hover:bg-buttons-hover">
                        <div className="w-[60px] h-[60px] border border-line rounded-lg p-1">
                            <div className="relative w-full h-full">
                                <Image
                                    src={Chair}
                                    alt="Product"
                                    fill
                                    sizes="100"
                                />
                            </div>
                        </div>
                        <div>
                            <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base`}>
                                {t('productTitle')}
                            </h4>
                            <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-sm text-text block`}>
                                {t('price')}
                            </span>
                        </div>
                        <div>
                            <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-base block`}>
                                {t('totalPrice')}
                            </span>
                            <span className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-sm text-text block`}>
                                {t('sales')}
                            </span>
                        </div>
                        <div className="w-40">
                            <SplineAreaChart />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}