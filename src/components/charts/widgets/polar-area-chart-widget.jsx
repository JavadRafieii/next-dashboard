import { useTranslations, useLocale } from 'next-intl';
import PolarAreaChart from "../polar-area-chart/polar-area-chart";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function PolarAreaChartWidget() {
    const t = useTranslations('PolarAreaChartWidget');
    const locale = useLocale();
    
    return (
        <div className="bg-boxes p-5 rounded-lg">
            <div className='mb-5'>
                <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-2xl`}>{t('title')}</h4>
                <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center gap-x-1`}><BsCalendar2DateFill className='text-sm mb-1' />{t('subTitle')}</p>
            </div>
            <PolarAreaChart />
        </div>
    );
}