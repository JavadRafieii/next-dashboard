import BasicColumnChart from "@/src/components/charts/basic-column-chart/basic-column-chart"

export default function SecondRow() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <BasicColumnChart />
            </div>
            <div></div>
        </div>
    )
}