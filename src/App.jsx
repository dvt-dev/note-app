import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/create-note" element={<CreateNote />} />
                <Route path="/edit-note/:id" element={<EditNote />} />
            </Routes>
        </Router>
    );
}

export default App;
