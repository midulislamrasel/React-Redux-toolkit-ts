import { Book } from "@/types/books";
import { apiSlice } from "../../api/apiSlice";

export const bookApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getBooks: builder.query<{ data: Book[] }, undefined>({
            query: () => "books",
        }),
        getBookById: builder.query<Book, string>({
            query: (id) => `books/${id}`,
        }),

        addBook: builder.mutation<Book, Partial<Book>>({
            query: (book) => {
                // console.log(book);
                return {
                    url: "books",
                    method: "POST",
                    body: book,
                };
            },
        }),
        updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>(
            {
                query: ({ id, data }) => ({
                    url: `books/${id}`,
                    method: "PUT",
                    body: data,
                }),
            }
        ),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        deleteBook: builder.mutation<Book, string>({
            query: (id) => {
                if (!id) {
                    console.log(id);
                    throw new Error("Books ID is Required");
                }
                return {
                    url: `books/${id}`,
                    method: "DELETE",
                };
            },
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
