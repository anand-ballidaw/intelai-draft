import { Suspense } from "react";
import CheckoutSuccessClient from "./success-client";

export default function CheckoutSuccessPage() {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <CheckoutSuccessClient />
        </Suspense>
    );
}