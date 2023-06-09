import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes/Notes";
import EditNote from "./pages/EditNote/EditNote";
import CreateNote from "./pages/CreateNote/CreateNote";
import dummyNotes from "./dummy_notes";

import React, { useState } from "react";

const App = () => {
    const [notes, setNotes] = useState([]);
    console.log(notes);
    return (
        <div id="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Notes notes={notes} />} />
                    <Route
                        path="/create-note"
                        element={<CreateNote setNotes={setNotes} />}
                    />
                    <Route path="/edit-note/:id" element={<EditNote />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
