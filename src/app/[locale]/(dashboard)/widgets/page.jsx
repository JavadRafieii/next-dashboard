import LineChartWidget from "@/src/components/charts/widgets/line-chart-widget";

export default function WidgetsPage() {
    return (
        <div className='p-5 space-y-5'>
            <div className="grid grid-cols-4 gap-5">
                <div>
                    <LineChartWidget />
                </div>
                <div>
                    <LineChartWidget />
                </div>
                <div>
                    <LineChartWidget />
                </div>
                <div>
                    <LineChartWidget />
                </div>
            </div>
        </div>
    );
}