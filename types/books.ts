export interface Book {
    bookId: string;
    title: string;
    genre: string;
    author: string;
    availableCopies: number;
    totalCopies?: number;
    publishedYear?: number;
    createdAt?: string;
}

export interface BookUpdate {
    title: string;
    genre: string;
    availableCopies: number;
    totalCopies: number;
    publishedYear: number;
}
