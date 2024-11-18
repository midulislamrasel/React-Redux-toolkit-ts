"use client";

import {
    useDeleteBookMutation,
    useGetBooksQuery,
} from "../redux/features/books/books";

const BookList = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery(undefined);
    const [deleteBook] = useDeleteBookMutation();

    if (isLoading) return <p>Loading books...</p>;
    if (isError) return <p>Failed to fetch books. Please try again later.</p>;

    //=============Delete =====================
    const handleDeleteBook = async (id: string) => {
        console.log("Delete attempt for book ID:", id);
        const isConfirmed = window.confirm(
            "Are you sure you want to delete this book?"
        );
        if (!isConfirmed) {
            console.log("User canceled the delete operation.");
            return; // Exit the function if the user cancels
        }

        try {
            await deleteBook(id);
            alert("Delete Successful");
        } catch (e) {
            console.log("Error Deleting Book", e);
        }
    };

    return (
        <div>
            <ul className="flex flex-wrap p-3">
                {books?.data?.map((data) => (
                    <div
                        key={data.title}
                        className=" border-l-indigo-300 p-4 border-2 m-3 "
                    >
                        <h2>{data.title}</h2>
                        <p className="">Genre{data.genre}</p>
                        <p>PublishedYear: {data.publishedYear}</p>
                        <p>TotalCopies: {data.totalCopies}</p>
                        <p>AvailableCopies: {data.availableCopies}</p>
                        <button
                            onClick={() => handleDeleteBook(data.bookId)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Delete
                        </button>
                        <button
                            className="ml-1 bg-yellow-500 text-white px-4 py-2 rounded"
                            // onClick={() =>
                            //     handleUpdateBook(book.id, {
                            //         availableCopies: book.availableCopies + 1,
                            //     })
                            // }
                        >
                            Edit
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
