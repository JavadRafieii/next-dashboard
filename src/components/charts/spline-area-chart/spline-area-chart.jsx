'use client'

import { useRef, useEffect } from "react";
import ApexCharts from 'apexcharts';
import { useLocale, useTranslations } from 'next-intl';

export default function SplineAreaChart() {
    const chartRef = useRef(null);
    const locale = useLocale();
    const t = useTranslations('SplineAreaChart');

    useEffect(() => {

        var options = {
            series: [{
                name: t('name'),
                data: [30, 90, 40, 80, 42, 109, 100]
            }],
            colors: ["#ffffff"],
            chart: {
                height: 50,
                type: 'area',
                toolbar: {
                    show: false
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
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                width: 2 
            },
            yaxis: {
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            xaxis: {
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false
                }
            },
            tooltip: {
                followCursor: true,
                theme: "dark",
                style: {
                    fontFamily: locale === "en" ? 'Roboto-Medium' : 'IranSans-Medium',
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
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };

    }, [])

    return (
        <div>
            <div id="basic-column-chart" ref={chartRef}></div>
        </div>
    );
}