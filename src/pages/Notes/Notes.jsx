import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import "./Notes.css";
import dummyNotes from "../../dummy_notes";
import NoteItem from "../../components/NoteItem/NoteItem";

const Notes = () => {
    return (
        <section className="notes__wrapper">
            <div className="notes__container">
                <header className="notes__header">
                    <div className="header__heading">
                        <Link to={"/creat-note"} className="btn btn__add">
                            <BsPlusLg />
                        </Link>
                        <h2 className="notes__heading">Notes</h2>

                        <button className="btn">
                            <CiSearch />
                        </button>
                    </div>
                    {/* <div className="header__search">
                        <input type="text" autoFocus placeholder="Keyword..." />
                    </div> */}
                </header>

                <div className="notes__content">
                    {dummyNotes.map((note) => (
                        <NoteItem key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Notes;
