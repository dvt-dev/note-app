import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./CreateNote.css";

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const titleRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title || detail) {
            console.log(title, detail);
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
