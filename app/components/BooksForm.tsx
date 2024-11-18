"use client";
// -----------------------------------
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toast } from "sonner";
import { bookValidationSchema } from "../utilities/BooksFrom";
import { useAddBookMutation } from "../redux/features/books/books";

const initialValues = {
    title: "",
    genre: "",
    availableCopies: 0,
    totalCopies: 0,
    publishedYear: 0,
};
type TFormValues = typeof initialValues;

const CreateAccount = () => {
    const [data, { isLoading, isSuccess }] = useAddBookMutation();

    const handleRegister = async (values: TFormValues) => {
        // console.log(values);

        try {
            const response = await data(values).unwrap();
            console.log(response);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    if (isLoading) return <h2>Loginge...</h2>;
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-[15px] text-black">
            <div className="bg-white p-[25px]  max-w-xl shadow-md rounded-[12px]">
                <h2 className=" font-bold mb-6 text-left text-[35px]">
                    Create an Account
                </h2>
                {isSuccess}
                <Formik
                    initialValues={initialValues}
                    validationSchema={bookValidationSchema}
                    onSubmit={handleRegister}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-primaryTxt text-[18px] font-[600]">
                                    title
                                </label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
                                />
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            {/* ======genre======= */}
                            <div className="mb-4">
                                <label className="block text-primaryTxt text-[18px] font-[600]">
                                    genre
                                </label>
                                <Field
                                    type="text"
                                    name="genre"
                                    className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
                                />
                                <ErrorMessage
                                    name="genre"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            {/* ==========availableCopies==== */}
                            <div className="mb-4">
                                <label className="block text-primaryTxt text-[18px] font-[600]">
                                    availableCopies
                                </label>
                                <Field
                                    type="number"
                                    name="availableCopies"
                                    className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
                                />
                                <ErrorMessage
                                    name="availableCopies"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            {/* =======totalCopies===== */}
                            <div className="mb-4">
                                <label className="block text-primaryTxt text-[18px] font-[600]">
                                    totalCopies
                                </label>
                                <Field
                                    type="number"
                                    name="totalCopies"
                                    className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
                                />
                                <ErrorMessage
                                    name="totalCopies"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            {/*==========publishedYear========= */}
                            <div className="mb-4">
                                <label className="block text-primaryTxt text-[18px] font-[600]">
                                    publishedYear
                                </label>
                                <Field
                                    type="number"
                                    name="publishedYear"
                                    className="mt-1 block w-full px-3 py-2 border border-borderColor rounded-md outline-none"
                                />
                                <ErrorMessage
                                    name="publishedYear"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primaryMat text-white py-[12px] bg-green-400  hover:bg-green-600 rounded-[5px]"
                            >
                                Submit & Register
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default CreateAccount;
