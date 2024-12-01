import LineChartA from "@/src/components/line-charts/line-chart-a";

export default function FirstRow() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div>
                <LineChartA />
            </div>
            <div>
                <LineChartA />
            </div>
            <div>
                <LineChartA />
            </div>
        </div>
    );
}