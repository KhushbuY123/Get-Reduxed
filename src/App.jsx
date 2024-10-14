import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudData from "./component/CrudData";
import { store } from './app/store';
import CrudForm from "./component/CrudForm";
import TodoApp from "./component/TodoApp";
import EditData from "./component/EditData";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/crud" element={<CrudData />} />
          <Route path="/crud/add" element={<CrudForm />} />
          <Route path="/crud/edit/:id" element={<EditData />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
