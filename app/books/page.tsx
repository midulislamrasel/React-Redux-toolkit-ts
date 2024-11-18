import React from "react";
import BookList from "../components/BookList";

export default function books() {
    return (
        <div>
            <h1 className="text-2xl text-center">All Books</h1>
            <BookList />
        </div>
    );
}
