import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";

import "./Notes.css";
import NoteItem from "../../components/NoteItem/NoteItem";

const Notes = ({ notes }) => {
    const [search, setSearch] = useState("");
    const [filterNotes, setFilterNotes] = useState(notes);
    const handleSearch = () => {
        setFilterNotes(
            notes.filter((note) => {
                if (
                    note.title.toLowerCase().match(search.toLocaleLowerCase())
                ) {
                    return note;
                }
            })
        );
    };

    useEffect(handleSearch, [search]);

    return (
        <section className="notes__wrapper">
            <div className="notes__container">
                <header className="notes__header">
                    <div className="header__heading">
                        <h2 className="notes__heading">Notes</h2>
                        <Link to={"/create-note"} className="btn btn__add">
                            <BsPlusLg />
                        </Link>
                    </div>

                    <div className="header__search">
                        <input
                            type="text"
                            placeholder="Keyword..."
                            onChange={(e) => {
                                setSearch(e.target.value);
                                handleSearch;
                            }}
                        />
                        <button className="btn-search">
                            <CiSearch />
                        </button>
                    </div>
                </header>

                <div className="notes__content">
                    {filterNotes.length == 0 && (
                        <p className="empty__notes">No notes.</p>
                    )}
                    {filterNotes.map((note, index) => (
                        <NoteItem key={index} note={note} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Notes;
