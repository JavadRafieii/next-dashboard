import PolarAreaChartWidget from "@/src/components/charts/widgets/polar-area-chart-widget";

export default function ThirdRow() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <PolarAreaChartWidget />
            </div>
            <div></div>
        </div>
    );
}