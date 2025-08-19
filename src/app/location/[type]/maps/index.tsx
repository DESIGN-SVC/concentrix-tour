"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./maps-components"), {
    ssr: false,
});

type MapsProps = {
    addresses: {
        pin_name: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        city:string;
        active:boolean
    }[];
};
export const Maps = ({ addresses }: MapsProps) => {
    return <Map addresses={addresses} />;
};
