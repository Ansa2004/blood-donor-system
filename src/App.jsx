import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddDonor from "./pages/AddDonor";
import ViewDonors from "./pages/ViewDonors";
import EditDonor from "./pages/EditDonor";
import SearchDonors from "./pages/SearchDonors";

import Statistics from "./pages/Statistics";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import UserRegistration from "./pages/UserRegistration";
import UserLogin from "./pages/UserLogin";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-donor" element={<AddDonor />} />
        <Route path="/view-donors" element={<ViewDonors />} />
        <Route path="/edit-donor/:id" element={<EditDonor />} />
        <Route path="/search-donors" element={<SearchDonors />} />
        <Route path="/statistics" element={<Statistics />}/>
        <Route path="/reports" element={<Reports />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/user-register" element={<UserRegistration />}/>
        <Route path="/user-login" element={<UserLogin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;