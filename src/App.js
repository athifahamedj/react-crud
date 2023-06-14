import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import Create from "./Create";
import Edit from "./Edit";
import View from "./View";
function App() {
  return (
    <div className="App">
      <h1>R CRUD</h1>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}></Route>
          <Route path="/view/:id" element={<View />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
