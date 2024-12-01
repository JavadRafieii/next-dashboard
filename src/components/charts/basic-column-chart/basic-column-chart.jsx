'use client'

import { useRef, useEffect } from "react";
import ApexCharts from 'apexcharts';
import { useTranslations, useLocale } from 'next-intl';
import WidgetType1 from "../widgets/widget-type-1";
import WidgetType2 from "../widgets/widget-type-2";


export default function BasicColumnChart() {
    const chartRef = useRef(null);
    const t = useTranslations('BasicColumnChart');
    const locale = useLocale();

    useEffect(() => {
        var options = {
            series: [{
                name: t('nameOne'),
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: t('nameTwo'),
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: t('nameThree'),
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            colors: ['#ffffff59', '#FFFFFF', '#ffffff26'],
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
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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

    return (
        <div className="bg-boxes p-5 rounded-lg">
            <div className="mb-5">
                <WidgetType2 />
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div>
                    <WidgetType1 />
                </div>
                <div>
                    <WidgetType1 />
                </div>
                <div>
                    <WidgetType1 />
                </div>
            </div>
            <div id="basic-column-chart" ref={chartRef}></div>
        </div>
    );
}