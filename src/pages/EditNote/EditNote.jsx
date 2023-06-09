import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import "./EditNote.css";

const EditNote = () => {
    return (
        <section className="edit-note__wrapper">
            <div className="edit-note__container">
                <header className="edit-note__header">
                    <Link to={"/"} className="btn">
                        <IoIosArrowBack />
                    </Link>
                    <button className="btn lg primary">Save</button>
                    <button className="btn danger">
                        <RiDeleteBin6Line />
                    </button>
                </header>

                <form className="edit-note__form">
                    <input type="text" placeholder="Title ..." autoFocus />
                    <textarea rows="28" placeholder="Details ..."></textarea>
                </form>
            </div>
        </section>
    );
};

export default EditNote;
