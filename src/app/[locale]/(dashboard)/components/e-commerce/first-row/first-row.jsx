import LineChartA from "@/src/components/charts/line-chart/line-chart";

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