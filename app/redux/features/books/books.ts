import { apiSlice } from "../../api/apiSlice";

export interface Book {
    id?: number;
    title: string;
    author: string;
    availableCopies: number;
}

export const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: () => "books",
        }),
        getBookById: builder.query<Book, number>({
            query: (id) => `books/${id}`,
        }),
        addBook: builder.mutation<Book, Partial<Book>>({
            query: (book) => ({
                url: "books",
                method: "POST",
                body: book,
            }),
        }),
        updateBook: builder.mutation<Book, { id: number; data: Partial<Book> }>(
            {
                query: ({ id, data }) => ({
                    url: `books/${id}`,
                    method: "PUT",
                    body: data,
                }),
            }
        ),
        deleteBook: builder.mutation<void, number>({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
