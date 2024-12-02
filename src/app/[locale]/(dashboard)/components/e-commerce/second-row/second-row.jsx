import BasicColumnChart from "@/src/components/charts/basic-column-chart/basic-column-chart";
import PolarAreaChart from "@/src/components/charts/polar-area-chart/polar-area-chart";

export default function SecondRow() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <BasicColumnChart />
            </div>
            <div>
                <PolarAreaChart />
            </div>
        </div>
    )
}