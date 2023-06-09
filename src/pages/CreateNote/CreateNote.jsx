import React, { useRef, useState } from "react";
import useCreateDate from "../../components/CustomHooks/useCreateDate";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { v4 as uuid } from "uuid";

import "./CreateNote.css";

const CreateNote = ({ setNotes }) => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const date = useCreateDate();
    const navigate = useNavigate();

    const titleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title || detail) {
            const note = { id: uuid(), title, detail, date };

            // add this note to notes array
            setNotes((prevNotes) => [note, ...prevNotes]);
            console.log(note);

            // redirect to home page
            navigate("/");
        } else {
            console.warn("Chua nhap du lieu !");
        }

        titleRef.current.focus();
        setTitle("");
        setDetail("");
    };

    return (
        <section className="create-note__wrapper">
            <div className="create-note__container">
                <header className="create-note__header">
                    <Link to={"/"} className="btn">
                        <IoIosArrowBack />
                    </Link>
                    <button className="btn lg primary" onClick={handleSubmit}>
                        Save
                    </button>
                </header>

                <form className="create-note__form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title ..."
                        autoFocus
                        value={title}
                        ref={titleRef}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <textarea
                        rows="28"
                        placeholder="Details ..."
                        value={detail}
                        onChange={(e) => {
                            setDetail(e.target.value);
                        }}
                    ></textarea>
                </form>
            </div>
        </section>
    );
};

export default CreateNote;
