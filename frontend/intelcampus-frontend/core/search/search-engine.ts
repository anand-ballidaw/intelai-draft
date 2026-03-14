import { SearchRecord, SearchResult } from "./search-types"

export class SearchEngine {

    static search(
        query: string,
        records: SearchRecord[]
    ): SearchResult {

        const normalized = query.toLowerCase()

        const results = records.filter(record => {

            const titleMatch = record.title.toLowerCase().includes(normalized)

            const descMatch =
                record.description?.toLowerCase().includes(normalized)

            return titleMatch || descMatch

        })

        return {

            query,

            results

        }

    }

    static indexRecord(
        records: SearchRecord[],
        newRecord: SearchRecord
    ): SearchRecord[] {

        return [...records, newRecord]

    }

    static removeRecord(
        records: SearchRecord[],
        id: string
    ): SearchRecord[] {

        return records.filter(r => r.id !== id)

    }

}