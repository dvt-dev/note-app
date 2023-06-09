import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./CreateNote.css";

const CreateNote = () => {
    return (
        <section className="create-note__wrapper">
            <div className="create-note__container">
                <header className="create-note__header">
                    <Link to={"/"} className="btn">
                        <IoIosArrowBack />
                    </Link>
                    <button className="btn lg primary">Save</button>
                </header>

                <form className="create-note__form">
                    <input type="text" placeholder="Title ..." autoFocus />
                    <textarea rows="28" placeholder="Details ..."></textarea>
                </form>
            </div>
        </section>
    );
};

export default CreateNote;
