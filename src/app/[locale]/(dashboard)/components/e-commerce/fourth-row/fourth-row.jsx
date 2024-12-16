import SingleBasicColumnChartWidget from "@/src/components/charts/widgets/single-basic-column-chart-widget";

export default function FourthRow() {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div>
                <SingleBasicColumnChartWidget />
            </div>
            <div></div>
            <div></div>
        </div>
    );
}