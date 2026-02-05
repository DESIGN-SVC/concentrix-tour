// src/app/location/[type]/page.tsx
import { findBuildings } from "@/hooks/findBuildings";
import { LocationClient } from "./location-client";

export async function generateStaticParams() {
  const allBuildings = await findBuildings({});
  const uniqueCities = [...new Set(allBuildings.map((b) => b.city))];

  return uniqueCities.map((city) => ({
    type: city,
  }));
}

interface locationFindOnePageProps {
  params: Promise<{ type: string }>;
}

export default async function locationFindOnePage({
  params,
}: locationFindOnePageProps) {
  const { type } = await params;
  const locationFindAll = await findBuildings({});

  return <LocationClient city={type} allBuildings={locationFindAll} />;
}
