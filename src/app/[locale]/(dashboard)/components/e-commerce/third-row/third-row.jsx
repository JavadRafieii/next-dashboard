import TopProductCard from "@/src/components/products/widgets/top-product-card-widget";
import WidgetType2 from "@/src/components/charts/widgets/widget-type-2";

export default function ThirdRow() {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div>
                <div className="bg-boxes p-5 rounded-lg">
                    <div className="mb-5">
                        <WidgetType2 />
                    </div>
                    <ul className="space-y-3">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <TopProductCard key={index} />
                        ))}
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    );
}