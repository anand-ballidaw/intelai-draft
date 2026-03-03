import { RankingsTable } from "@/components/dashboard/rankings-table";

export default function RankingsPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-semibold">Student Rankings</h1>
                <p className="mt-2 text-muted-foreground">
                    View and analyze student performance rankings.
                </p>
            </div>

            <RankingsTable />
        </div>
    );
}