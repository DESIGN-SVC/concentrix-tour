'use client'

import { Button } from "@/components";
import { Chevron } from "@/icons";
import { useRouter } from "next/navigation";

export const AddressButtonRouter = () => {
    const router = useRouter();
    return (
        <Button
            onClick={() => router.back()}
            appearance={"ghost"}
            size={"small"}
            className="text-white border-white hover:text-blue-900"
        >
            <Chevron className="-rotate-180" />
        </Button>
    );
};
