import logo from "./logo.svg";
import "./App.css";
import BasicExample from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Modal from "./components/modal/Modal";
import LoginScreen from "./screens/LoginScreen";
import SignUp from "./screens/SignUp";
import AdminCreatePost from "./screens/AdminScreens/AdminCreatePost";
import AdminList from "./screens/AdminScreens/AdminList";
import VideoUpload from "./screens/videos/VideoUpload";
import PersistentDrawerLeft from "./screens/AdminScreens/AdminDashboard";
import AdminCreateNewsCat from "./screens/AdminScreens/newsBlog/AdminCreateNewsCat";
import CreateRoles from "./screens/AdminScreens/AdminRoles/CreateRoles";
import UserLIstScreen from "./screens/AdminScreens/AdminRoles/UserListScreen";
import AssignRoles from "./screens/AdminScreens/AdminRoles/AssignRoles";
import AssignAdmin from "./screens/AdminScreens/AdminRoles/AssignAdmin";
import AdminImageGallery from "./screens/AdminScreens/AdminImageGallery/AdminImageGallery";
import NewsDetails from "./screens/NewsDetails";
import GameSchedule from "./pages/Schedule/GameSchedule";
import Teams from "./pages/Teams/Teams";
import AdminCreateTeams from "./screens/AdminScreens/AdminTeams/AdminCreateTeams";
import AdminGetTeams from "./screens/AdminScreens/AdminTeams/AdminGetTeams";
import AdminTournament from "./screens/AdminScreens/AdminTournament/AdminTournament";
import AdminCreateLeague from "./screens/AdminScreens/AdminLeague/AdminCreateLeague";
import AdminGetLeagues from "./screens/AdminScreens/AdminLeague/AdminGetLeagues";
import AdminGetPost from "./screens/AdminScreens/newsBlog/AdminGetPost";
import CheckOutSteps from "./pages/CheckOutSteps/CheckOutSteps";
import TheGame from "./pages/CheckOutSteps/TheGame";
import Positions from "./pages/CheckOutSteps/Positions";
import Kicks from "./pages/CheckOutSteps/Kicks";
import Fields from "./pages/CheckOutSteps/Fields";
import { News } from "./pages/News/News";

function App() {
  const Admin = localStorage.getItem("isAdmin") === "true";
  return (
    <div style={{ background: "rgb(255, 255, 255)" }}>
      {/* <div style={{ background: "#D9D9D9" }}></div> */}
      {/* <BasicExample /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/admin/:id"
          element={Admin ? <PersistentDrawerLeft /> : <HomePage />}
        />

        <Route path="/createPost" element={<AdminCreatePost />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leagues" element={<GameSchedule />} />
        <Route path="/newspost" element={<AdminGetPost />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/nafaRules"
          element={<TheGame step1 step2 step3 step4 step5 />}
        />
        <Route path="/theGame" element={<TheGame />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/kicks" element={<Kicks />} />
        <Route path="/field" element={<Fields />} />
        <Route path="/createTeam" element={<AdminCreateTeams />} />
        <Route path="/createLeague" element={<AdminCreateLeague />} />
        <Route path="/getLeague" element={<AdminGetLeagues />} />
        <Route path="/getTournament" element={<AdminTournament />} />
        <Route path="/updatePost" element={<VideoUpload />} />
        <Route path="/newscatcreate" element={<AdminCreateNewsCat />} />
        <Route path="/createRole" element={<CreateRoles />} />
        <Route path="/getTeam" element={<AdminGetTeams />} />
        <Route path="/userRole" element={<UserLIstScreen />} />
        <Route path="/admin/user/:id/edit" element={<AssignRoles />} />
        <Route path="/newsDetails/:id" element={<NewsDetails />} />
        <Route path="/admin/user/:id/adminedit" element={<AssignAdmin />} />
        <Route path="/AdminImageGallery" element={<AdminImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
