import LineChartWidget from "@/src/components/charts/widgets/line-chart-widget";

export default function FirstRow() {
    return (
        <div className="grid grid-cols-3 gap-5">
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
    );
}