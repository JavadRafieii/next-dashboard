import BasicColumnChartWidget from "@/src/components/charts/widgets/basic-column-chart-widget";
import TopProductsWidget from "@/src/components/products/widgets/top-products-widget";

export default function SecondRow() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <BasicColumnChartWidget />
            </div>
            <div>
                <TopProductsWidget />
            </div>
        </div>
    )
}