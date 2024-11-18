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

            //  ({
            //     url: "books",
            //     method: "POST",
            //     body: book,
            // }),
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

// export const bookApi = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getBooks: builder.query<Book[], void>({
//             query: () => "books",
//             transformResponse: (response: any[]) =>
//                 response.map((book) => ({
//                     id: book.bookId, // Map `bookId` to `id`
//                     title: book.title,
//                     author: book.author ?? "Unknown Author", // Handle optional fields
//                     availableCopies: book.availableCopies,
//                 })),
//         }),
//         getBookById: builder.query<Book, string>({
//             query: (id) => `books/${id}`,
//             transformResponse: (response: any) => ({
//                 id: response.bookId, // Map `bookId` to `id`
//                 title: response.title,
//                 author: response.author ?? "Unknown Author",
//                 availableCopies: response.availableCopies,
//             }),
//         }),
//         addBook: builder.mutation<Book, Partial<Book>>({
//             query: (book) => ({
//                 url: "books",
//                 method: "POST",
//                 body: {
//                     bookId: book.id, // Map `id` back to `bookId` if needed
//                     title: book.title,
//                     author: book.author,
//                     availableCopies: book.availableCopies,
//                 },
//             }),
//         }),
//         updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>(
//             {
//                 query: ({ id, data }) => ({
//                     url: `books/${id}`,
//                     method: "PUT",
//                     body: {
//                         bookId: id,
//                         ...data,
//                     },
//                 }),
//             }
//         ),
//         deleteBook: builder.mutation<void, string>({
//             query: (id) => ({
//                 url: `books/${id}`,
//                 method: "DELETE",
//             }),
//         }),
//     }),
// });
