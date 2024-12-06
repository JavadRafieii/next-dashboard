import { useTranslations, useLocale } from 'next-intl';
import LineChart from "../line-chart/line-chart";
import { TiArrowSortedUp } from "react-icons/ti";
import { BsFillBasket3Fill } from "react-icons/bs";

export default function LineChartWidget() {
    const t = useTranslations('LineChartWidget');
    const locale = useLocale();

    return (
        <div className="bg-boxes p-5 pb-0 rounded-lg">
            <div className='flex items-center justify-between'>
                <div>
                    <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-base`}>{t('title')}</h4>
                    <p className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>${t('price')}</p>
                    <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center`}><TiArrowSortedUp className='text-lg' /> 14% {t('description')}</p>
                </div>
                <div className='w-[50px] h-[50px] bg-light-boxes rounded-xl flex items-center justify-center'>
                    <BsFillBasket3Fill className='text-white text-2xl' />
                </div>
            </div>
            <LineChart />
        </div>
    );
}