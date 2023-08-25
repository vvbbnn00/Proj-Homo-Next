import {updatePV} from "@/utils/data-storage";

export default function RootLayout({children, params}) {
    updatePV().then(r => console.log("[PV] Updated."));

    return (
        <html lang={params.lang}>
        {children}
        </html>
    )
}
