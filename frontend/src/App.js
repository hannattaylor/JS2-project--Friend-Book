import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import FriendPage from "./pages/FriendPage";
import NewFriend from "./pages/NewFriend";
import TableOfFriends from "./pages/TableOfFriends";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "./actions/friendAction";
import EditFriend from "./pages/EditFriend";

function App() {
  const [friends, setFriends] = useState([]);
  const url = "http://localhost:5000/friends.json";

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setFriends(data));
  }, []);

  useEffect(() => {
    friends.map((friend) => {
      dispatch(addFriend(friend));
    });
  }, [friends]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/tableoffriends" element={<TableOfFriends />} />
        <Route path="/friends" element={<FriendPage />} />
        <Route path="/editfriend" element={<EditFriend />} />
        <Route path="/newfriend" element={<NewFriend />} />
      </Routes>
    </Router>
  );
}

export default App;
