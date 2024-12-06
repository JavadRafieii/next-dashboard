import { useTranslations, useLocale } from 'next-intl';
import BasicColumnChart from "../basic-column-chart/basic-column-chart";
import { TiArrowSortedUp } from "react-icons/ti";
import { BsCalendar2DateFill } from "react-icons/bs";

export default function BasicColumnChartWidget() {
    const t = useTranslations('BasicColumnChartWidget');
    const locale = useLocale();

    return (
        <div className="bg-boxes p-5 pb-0 rounded-lg">
            <div className='mb-5'>
                <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-white text-2xl`}>{t('title')}</h4>
                <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center gap-x-1`}><BsCalendar2DateFill className='text-sm mb-1' />{t('subTitle')}</p>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <div>
                    <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-base`}>{t('title')}</h4>
                    <p className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>${t('price')}</p>
                    <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center`}><TiArrowSortedUp className='text-lg' />{t('description')}</p>
                </div>
                <div>
                    <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-base`}>{t('title')}</h4>
                    <p className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>${t('price')}</p>
                    <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center`}><TiArrowSortedUp className='text-lg' />{t('description')}</p>
                </div>
                <div>
                    <h4 className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-base`}>{t('title')}</h4>
                    <p className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>${t('price')}</p>
                    <p className={`${locale === "en" ? 'font-Roboto-Medium' : 'font-IranSans-Medium'} text-text text-sm flex items-center`}><TiArrowSortedUp className='text-lg' />{t('description')}</p>
                </div>
            </div>
            <BasicColumnChart />
        </div>
    );
}