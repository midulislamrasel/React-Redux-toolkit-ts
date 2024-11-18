import * as yup from "yup";

export const bookValidationSchema = yup.object().shape({
    // bookId: yup.string().required("Book ID is required"),
    title: yup.string().required("Title is required"),
    genre: yup.string().required("Genre is required"),
    // author: yup.string().required("Author is required"),
    availableCopies: yup
        .number()
        .typeError("Available Copies must be a number")
        .required("Available Copies are required")
        .min(0, "Available Copies cannot be negative"),
    totalCopies: yup
        .number()
        .typeError("Total Copies must be a number")
        .required("total Copies are required")
        .min(0, "Total Copies cannot be negative"),
    publishedYear: yup
        .number()
        .typeError("Published Year must be a valid year")
        .required("total Copies are required")
        .min(2, "Published Year must be a 2-digit year"),
    // .max(
    //     new Date().getFullYear(),
    //     "Published Year cannot be in the future"
    // ),
});
