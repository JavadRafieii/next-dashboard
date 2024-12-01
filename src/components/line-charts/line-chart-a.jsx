'use client'

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';
import { useTranslations, useLocale } from 'next-intl';
import { BsFillBasket3Fill } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";

export default function LineChartA() {
    const t = useTranslations('LineChartA');
    const locale = useLocale();
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
                name: 'LineChartA',
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
                    fontSize: "12px",
                    // fontFamily: "Arial",
                },
                custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                    const value = series[seriesIndex][dataPointIndex];
                    if (dataPointIndex === 'bottom') {
                        return null;
                    }
                    return `<div class="custom-tooltip p-3">${value}</div>`;
                }
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
                <div>
                    <h4 className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-text text-base`}>{t('title')}</h4>
                    <p className={`${locale === "en" ? 'font-Roboto-Bold' : 'font-IranSans-Bold'} text-white text-2xl`}>${t('price')}</p>
                    <p className={`${locale === "en" ? 'font-Roboto-Light' : 'font-IranSans-Light'} text-text text-sm flex items-center`}><IoMdArrowDropup className='text-lg'/> 14% {t('description')}</p>
                </div>
                <div className='w-[50px] h-[50px] bg-light-boxes rounded-xl flex items-center justify-center'>
                    <BsFillBasket3Fill className='text-white text-2xl' />
                </div>
            </div>
            <div id="chart" ref={chartRef}></div>
        </div>
    );
};