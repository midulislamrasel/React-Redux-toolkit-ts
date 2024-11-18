"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { bookValidationSchema } from "../utilities/BooksFrom";
import { Book, BookUpdate } from "@/types/books";
import {
    useGetBookByIdQuery,
    useUpdateBookMutation,
} from "../redux/features/books/books";

// -----------------------------import End-----------------------------------
const initialBookState: BookUpdate = {
    title: "",
    genre: "",
    availableCopies: 0,
    totalCopies: 0,
    publishedYear: 0,
};

const EditBookPage = ({ bookId }: { bookId: string }) => {
    const { data: book, isLoading, error } = useGetBookByIdQuery(bookId);
    const [updateBook] = useUpdateBookMutation();
    const router = useRouter();

    const [initialValues, setInitialValues] =
        useState<BookUpdate>(initialBookState);

    useEffect(() => {
        if (book) {
            setInitialValues({
                title: book.data.title || "",
                genre: book.data.genre || "",
                availableCopies: book.data.availableCopies || 0,
                totalCopies: book.data.totalCopies || 0,
                publishedYear: book.data.publishedYear || 0,
            });
        }
    }, [book]);

    const handleUpdate = async (values: Book) => {
        console.log(values);
        try {
            const result = await updateBook({
                id: bookId,
                data: values,
            }).unwrap();
            console.log(result);
            router.push("/books");
        } catch (error) {
            console.error("Failed to update book:", error);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p>Loading book details...</p>
            </div>
        );
    }

    if (error) {
        return <p>Failed to load book details. Please try again later.</p>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center text-black">
            <div className="max-w-md w-full bg-white p-6 rounded shadow">
                <h1 className="text-xl font-semibold mb-4 text-center">
                    Edit Book
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={bookValidationSchema}
                    enableReinitialize={true}
                    onSubmit={handleUpdate}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label>Title</label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="w-full border px-2 py-1 rounded"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label>Genre</label>
                                <Field
                                    type="text"
                                    name="genre"
                                    className="w-full border px-2 py-1 rounded"
                                />
                                <ErrorMessage
                                    name="genre"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label>Available Copies</label>
                                <Field
                                    type="number"
                                    name="availableCopies"
                                    className="w-full border px-2 py-1 rounded"
                                />
                                <ErrorMessage
                                    name="availableCopies"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label>Total Copies</label>
                                <Field
                                    type="number"
                                    name="totalCopies"
                                    className="w-full border px-2 py-1 rounded"
                                />
                                <ErrorMessage
                                    name="totalCopies"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label>Published Year</label>
                                <Field
                                    type="number"
                                    name="publishedYear"
                                    className="w-full border px-2 py-1 rounded"
                                />
                                <ErrorMessage
                                    name="publishedYear"
                                    component="div"
                                    className="text-red-500"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                            >
                                Update Book
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default EditBookPage;
