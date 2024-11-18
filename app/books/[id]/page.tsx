"use client";
import { useParams } from "next/navigation";
import BooksUpdate from "@/app/components/BooksUpdate";

export default function Page() {
    const router = useParams();
    return (
        <div>
            <BooksUpdate bookId={router.id} />
        </div>
    );
}
