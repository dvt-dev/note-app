import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes/Notes";
import EditNote from "./pages/EditNote/EditNote";
import CreateNote from "./pages/CreateNote/CreateNote";

import React from "react";

const App = () => {
    return (
        <div id="app">
            <Router>
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/create-note" element={<CreateNote />} />
                    <Route path="/edit-note/:id" element={<EditNote />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
