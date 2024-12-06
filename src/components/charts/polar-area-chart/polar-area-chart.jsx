'use client'

import { useRef, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import ApexCharts from 'apexcharts';

export default function PolarAreaChart() {
    const chartRef = useRef(null);
    const t = useTranslations('PolarAreaChart');
    const locale = useLocale();

    useEffect(() => {
        var options = {
            series: [42, 47, 52, 58, 65],
            chart: {
                height: 450,
                type: 'polarArea'
            },
            labels: [t('a'), t('b'), t('c'), t('d'), t('e')],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 0,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom',
                labels: {
                    colors: '#FFFFFF',
                },
                fontSize: '14px',
                fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    },
                    spokes: {
                        strokeWidth: 0
                    },
                }
            },
            theme: {
                monochrome: {
                    enabled: false,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            },
            colors: ['#758085', '#cfd1d2', '#758085', '#ffffff59', '#ffffff26'],
            tooltip: {
                style: {
                    fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
                }
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };

    }, []);

    return <div id="basic-column-chart" ref={chartRef}></div>

}