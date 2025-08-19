"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { cx } from "cva";
import { Link } from "@/components";
import { Chevron, Pin } from "@/icons";

const svgMarker = (label: string, color: string = "#003D5B", size: [number, number] = [27, 37]) =>
    L.divIcon({
        className: "custom-svg-marker",
        html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="37" viewBox="0 0 27 37" fill="none">
                <path d="M12.4389 36.4752C12.0069 35.9348 11.6613 35.4926 11.4021 35.1485C3.8007 25.2939 0 18.0809 0 13.5093C0 9.92642 1.42232 6.49028 3.95406 3.95679C6.4858 1.4233 9.91958 0 13.5 0C17.0804 0 20.5142 1.4233 23.0459 3.95679C25.5777 6.49028 27 9.92642 27 13.5093C27 18.0827 23.1948 25.3048 15.5844 35.1756C15.327 35.5088 14.9859 35.9456 14.5611 36.486C14.4347 36.6462 14.2737 36.7757 14.0902 36.8647C13.9066 36.9537 13.7053 37 13.5013 37C13.2974 37 13.0961 36.9537 12.9125 36.8647C12.729 36.7757 12.568 36.6462 12.4416 36.486L12.4389 36.4752Z" 
                fill="${color}"/>
                <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="12" font-weight="bold" dy=".3em">
                ${label}
                </text>
            </svg>
    `,
        iconSize: size,
        iconAnchor: [5, 37],
        popupAnchor: [0, -37],
    });
type MapsProps = {
    addresses: {
        pin_name: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        city: string;
        active: boolean;
    }[];
};
export default function MapsComponents({ addresses }: MapsProps) {
    const address_center = addresses.filter((_, index) => index === 0)[0];
    return (
        <MapContainer
            center={address_center.coordinates}
            zoom={16}
            scrollWheelZoom={false}
            style={{
                width: "100%",
                height: "478px",
            }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {addresses?.map(({ coordinates, pin_name, city, active }) => (
                <Marker
                    key={pin_name}
                    icon={svgMarker(
                        pin_name,
                        active ? "#51E8D6" : "#003D5B",
                        active ? [49, 68] : [27, 37]
                    )}
                    position={coordinates}
                >
                    <Popup>
                        <div
                            className={cx(" rounded-3xl", "py-4 px-5 w-full ")}
                        >
                            <h6
                                className={cx(
                                    "font-semibold text-blue-900",
                                    "text-base",
                                    "lg:text-xl"
                                )}
                            >
                                {pin_name}
                            </h6>
                            <div
                                className={cx(
                                    "mt-3 mb-4 px-2 py-1",
                                    "bg-blue-500 rounded-full",
                                    "text-xs",
                                    "flex items-center gap-2"
                                )}
                            >
                                <Pin />
                                <span>Endereço</span>
                            </div>
                            <Link
                                appearance={"secondary"}
                                href={`/location/${city}?building=${pin_name}`}
                                className="w-full justify-between"
                            >
                                Saiba mais <Chevron className="size-3" />
                            </Link>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
