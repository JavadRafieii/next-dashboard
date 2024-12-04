'use client'

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { useLocale, useTranslations } from 'next-intl';
import WidgetType1 from '../widgets/widget-type-1';
import WidgetType3 from '../widgets/widget-type-3';

export default function LineChart() {
    const locale = useLocale();
    const t = useTranslations('LineChart');
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            // title: {
            //     text: "Custom Line Chart",
            //     align: "center",
            //     style: {
            //         fontSize: "18px",
            //         color: "#FFFFFF",
            //     },
            // },
            series: [{
                name: t('name'),
                data: [10, -50, 55, -10, 32, -45, 50, -50, 100]
            }],
            chart: {
                id: 'LineChartA',
                with: '100%',
                height: 70,
                type: 'line',
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: false,
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            xaxis: {
                categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                labels: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                colors: ['#FFFFFF'],
                width: 3,
            },
            markers: {
                size: 0,
                colors: ['#FFFFFF'],
                strokeColors: '#FFFFFF',
                strokeWidth: 0,
                fillColors: ['#FFFFFF']
            },
            yaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: "#FFFFFF",
                        fontSize: "12px",
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            xaxis: {
                labels: {
                    show: false,
                    style: {
                        colors: "#FFFFFF",
                        fontSize: "12px",
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            grid: {
                show: false,
                padding: {
                    top: -30,
                    right: 0,
                    bottom: -20,
                    left: 0,
                }
            },
            tooltip: {
                followCursor: true,
                theme: "dark",
                marker: {
                    fillColors: ['#FFFFFF'],
                },
                style: {
                    fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
                },
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className='bg-boxes p-5 pb-0 rounded-lg'>
            <div className='flex items-center justify-between'>
                <WidgetType1 />
                <WidgetType3 />
            </div>
            <div id="chart" ref={chartRef}></div>
        </div>
    );
};