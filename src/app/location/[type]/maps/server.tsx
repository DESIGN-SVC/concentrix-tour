import { findBuildings } from "@/app/hooks/findBuildings";
import { Addresses } from ".";
import { cx } from "cva";

interface LocationPageProps {
    building: string;
}


export const ServerPage = async ({building}:LocationPageProps) => {
    const location = await findBuildings({});
    const addresses = location.flatMap((el) => {
        return {
            pin_name: el.names.short,
            coordinates: el.address.coordinates,
            city: el.city,
            active: building === el.names.short
        };
    });

    return (
        <section className="bg-white w-full">
            <div className="container py-14 space-y-8">
                <h2
                    className={cx(
                        "text-blue-900 font-semibold text-[2rem]/[2.4rem]"
                    )}
                >
                    Localização
                </h2>
                <Addresses addresses={addresses} />
            </div>
        </section>
    );
};
