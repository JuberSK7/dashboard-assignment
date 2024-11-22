import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Loading from "./components/Loading";
import Header from "./components/Header";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Articles = lazy(() => import("./pages/Articles"));
const Report = lazy(() => import("./pages/Report"));
const Institution = lazy(() => import("./pages/Institution"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const Logout = lazy(() => import("./pages/Logout"));

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <BrowserRouter>
      <Header onSearch={setSearchTerm}/>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Dashboard searchTerm={searchTerm}/>} />
          <Route path="/article" element={<Articles />} />
          <Route path="/report" element={<Report />} />
          <Route path="/institution" element={<Institution />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
