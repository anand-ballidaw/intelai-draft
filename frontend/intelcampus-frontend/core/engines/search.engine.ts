export interface SearchItem {

    id: string

    title: string

    type: string

    route?: string

}

class SearchEngine {

    private index: SearchItem[] = []

    indexItem(item: SearchItem) {

        this.index.push(item)

    }

    search(query: string): SearchItem[] {

        const q = query.toLowerCase()

        return this.index.filter(item =>
            item.title.toLowerCase().includes(q)
        )

    }

    getAll(): SearchItem[] {

        return this.index

    }

}

export const searchEngine = new SearchEngine()