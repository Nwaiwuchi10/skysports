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
// import PersistentDrawerLeft from "./screens/AdminScreens/AdminTournament/AdminTourna";
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
import AdminLogin from "./screens/AdminLogin";
import AdminTourna from "./screens/AdminScreens/AdminTournament/AdminTourna";
import AdminPostMatch from "./screens/AdminScreens/AdminMatch/AdminPostMatc";
import CheckOutGame from "./screens/AdminScreens/AdminMatch/CheckOutGame";
import AdminGetMatch from "./screens/AdminScreens/AdminMatch/AdminGetMatch";

import LiveGame from "./components/LiveGame/LiveGame";
import LivesGames from "./LiveGames/LivesGames";
import AdminUpdateMatch from "./screens/AdminScreens/AdminMatch/AdminUpdateMatch";
import ErrorNotAdmin from "./screens/ErrorNotAdmin";
import AdminPostPlayers from "./screens/AdminScreens/AdminPlayer/AdminPostPlayers";
import AdminGetPlayers from "./screens/AdminScreens/AdminPlayer/AdminGetPlayers";
import Players from "./components/Players/Players";
import PlayersDetails from "./components/Players/PlayersDetails";

function App() {
  const Admin = localStorage.getItem("isAdmin") === "true";
  return (
    <div style={{ background: "rgb(255, 255, 255)" }}>
      {/* <div style={{ background: "#D9D9D9" }}></div> */}
      {/* <BasicExample /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/error/notAnAdmin" element={<ErrorNotAdmin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/admin/:id"
          element={Admin ? <PersistentDrawerLeft /> : <HomePage />}
        />
        <Route path="/playerProfile/:id" element={<PlayersDetails />} />
        {/* <Route path="/admin/:id" element={<PersistentDrawerLeft />} /> */}
        <Route path="/createPost" element={<AdminCreatePost />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/getPlayers" element={<AdminGetPlayers />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/leagues" element={<GameSchedule />} />
        <Route path="/newspost" element={<AdminGetPost />} />
        <Route path="/news" element={<News />} />
        <Route path="/createPlayer" element={<AdminPostPlayers />} />
        <Route
          path="/nafaRules"
          element={<TheGame step1 step2 step3 step4 step5 />}
        />
        <Route path="/theGame" element={<TheGame />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/kicks" element={<Kicks />} />
        <Route path="/postGame" element={<CheckOutGame />} />
        <Route path="/field" element={<Fields />} />
        <Route path="/createTeam" element={<AdminCreateTeams />} />
        <Route path="/createLeague" element={<AdminCreateLeague />} />
        <Route path="/getLeague" element={<AdminGetLeagues />} />
        <Route path="/getGameFixtures" element={<AdminGetMatch />} />
        {/* <Route path="/getTournament" element={<AdminTournament />} /> */}
        <Route path="/getTournament" element={<AdminTourna />} />

        <Route path="/updatePost" element={<VideoUpload />} />
        <Route path="/newscatcreate" element={<AdminCreateNewsCat />} />
        <Route path="/createRole" element={<CreateRoles />} />
        <Route path="/getTeam" element={<AdminGetTeams />} />
        <Route path="/userRole" element={<UserLIstScreen />} />
        <Route path="/admin/user/:id/edit" element={<AssignRoles />} />
        <Route path="/newsDetails/:id" element={<NewsDetails />} />
        <Route path="/admin/user/:id/adminedit" element={<AssignAdmin />} />
        <Route path="/admin/fixtures/:id/edit" element={<AdminUpdateMatch />} />
        <Route path="/AdminImageGallery" element={<AdminImageGallery />} />
        <Route path="/livegames" element={<LivesGames />} />
      </Routes>
    </div>
  );
}

export default App;
