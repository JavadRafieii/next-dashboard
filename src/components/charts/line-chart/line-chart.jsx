'use client'

import React, { useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import ApexCharts from 'apexcharts';

export default function LineChart() {
    const locale = useLocale();
    const t = useTranslations('LineChart');
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
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

    return <div id="chart" ref={chartRef}></div>
};