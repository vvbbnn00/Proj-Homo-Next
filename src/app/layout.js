import {updatePV} from "@/utils/data-storage";

export default async function RootLayout({children, params}) {
    const resolvedParams = await params
    const lang = resolvedParams?.lang ?? 'en'
    const isBuildTime = process.env.npm_lifecycle_event === 'build' || process.env.NEXT_PHASE === 'phase-production-build'
    if (!isBuildTime) {
        updatePV()
            .then(() => console.log("[PV] Updated."))
            .catch(err => console.error("[PV] Update failed.", err))
    }

    return (
        <html lang={lang}>
        {children}
        </html>
    )
}
