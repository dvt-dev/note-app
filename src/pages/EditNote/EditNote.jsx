import React, { useEffect, useState } from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./EditNote.css";
import useCreateDate from "../../components/CustomHooks/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [detail, setDetails] = useState("");

    const date = useCreateDate();
    const navigate = useNavigate();

    useEffect(() => {
        const note = notes.find((item) => item.id == id);
        if (note) {
            setTitle(note.title);
            setDetails(note.detail);
        }
        console.log(note);
    }, [id, notes]);

    const handelForm = (e) => {
        e.preventDefault();

        if (title && detail) {
            const newNote = notes.find((item) => item.id == id);
            if (newNote) {
                newNote.title = title;
                newNote.detail = detail;
                newNote.date = date;
            }
            const newNotes = notes.map((item) => {
                if (item.id == id) {
                    item = newNote;
                }
                return item;
            });

            setNotes(newNotes);
        }

        // redirect to home page
        navigate("/");
    };

    const handleDelete = () => {
        const newNotes = notes.filter((item) => item.id != id);
        console.log("Prev notes: ", notes);
        console.log("New notes: ", newNotes);
        setNotes(newNotes);

        navigate("/");
    };

    //

    return (
        <section className="edit-note__wrapper">
            <div className="edit-note__container">
                <header className="edit-note__header">
                    <Link to={"/"} className="btn">
                        <IoIosArrowBack />
                    </Link>
                    <button className="btn lg primary" onClick={handelForm}>
                        Save
                    </button>
                    <button className="btn danger" onClick={handleDelete}>
                        <RiDeleteBin6Line />
                    </button>
                </header>

                <form className="edit-note__form" onSubmit={handelForm}>
                    <input
                        type="text"
                        placeholder="Title ..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p className="note-date">{date}</p>
                    <textarea
                        rows={28}
                        placeholder="Details ..."
                        value={detail}
                        onChange={(e) => setDetails(e.target.value)}
                    ></textarea>
                </form>
            </div>
        </section>
    );
};

export default EditNote;
