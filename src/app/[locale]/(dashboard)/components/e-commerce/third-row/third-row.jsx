import PolarAreaChartWidget from "@/src/components/charts/widgets/polar-area-chart-widget";
import NewCustomersWidget from "@/src/components/customers/widgets/new-customers-widget";

export default function ThirdRow() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <NewCustomersWidget />
            </div>
            <div>
                <PolarAreaChartWidget />
            </div>
        </div>
    );
}