"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./maps"), {
    ssr: false,
});

type Addresses = {
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
export const Addresses = ({ addresses }: Addresses) => {
    return <Map addresses={addresses} />;
};
