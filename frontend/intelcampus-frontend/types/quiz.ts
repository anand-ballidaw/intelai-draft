export interface Quiz {

    id: string

    title: string

    className: string

    teacher: string

    questions: QuizQuestion[]

}

export interface QuizQuestion {

    id: string

    question: string

    options: string[]

    correctAnswer: number

}