'use client'

import { useRef, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import ApexCharts from 'apexcharts';


export default function SingleBasicColumnChart() {
    const chartRef = useRef(null);
    const t = useTranslations('SingleBasicColumnChart');
    const locale = useLocale();

    useEffect(() => {
        var options = {
            series: [{
                name: t('nameOne'),
                data: [44, 55, 57, 75, 61, 58, 63, 60]
            }],
            colors: ['#FFFFFF'],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end'
                },
            },
            dataLabels: {
                enabled: false,
                style: {
                    colors: ['#FFFFFF']
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                labels: {
                    style: {
                        colors: '#FFFFFF',
                        fontSize: '12px'
                    }
                },
            },
            yaxis: {
                title: {
                    text: t('subTitle'),
                    style: {
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
                    },
                },
                labels: {
                    style: {
                        colors: '#FFFFFF',
                        fontSize: '12px'
                    }
                },
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                followCursor: true,
                theme: "dark",
                style: {
                    fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
                }
            },
            grid: {
                borderColor: '#ffffff26',
            },
            legend: {
                labels: {
                    colors: '#FFFFFF',
                },
                fontSize: '14px',
                fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };

    }, [])

    return <div id="single-basic-column-chart" ref={chartRef}></div>
}
