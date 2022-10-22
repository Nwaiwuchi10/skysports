import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";

import { FaCheck, FaEdit, FaTimes, FaTrash } from "react-icons/fa";
import axios from "axios";
import Message from "../../../components/Message";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import BasicExample from "../../../components/navbar/NavBar";
import { BsArrow90DegLeft } from "react-icons/bs";
import AdminDashboard from "../AdminDashboard";
const AdminGetMatch = () => {
  const [user, setUser] = useState([]);
  const [news, setNews] = useState([]);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/match/matchDays/1"
      );
      console.log(data);
      setUser(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://nafasports.herokuapp.com/api/match/matchDays/2"
      );
      console.log(data);
      setNews(data);
      setLoading(false);
      setError(false);
      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <BasicExample />
      {/* <AdminDashboard /> */}

      <div
        style={{
          broder: "1px solid grey",
          borderRadius: "8px",
          color: "#171744",
          backgroundColor: "whitesmoke",
          width: "50px",
          height: "50px",
          display: "flex",
          textDecoration: "none",
          textAlign: "center",
          alignItems: "center",
          borderColor: "grey",
          justifyContent: "flex-start",
          marginBottom: "30px",
        }}
      >
        <Link
          to={`/admin/${localStorage.getItem("isAdmin")}`}
          style={{
            display: "flex",
            alignItem: "center",
            fontSize: "20px",
            justifyContent: "center",
            texAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <BsArrow90DegLeft />
        </Link>{" "}
      </div>
      <h1 style={{ fontSize: "25px" }}>Game Fixtures & Result </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>

              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>MATCH DAY </th>
              <th>TIME</th>
              <th>DATE</th>
              <th>SEASON</th>
              <th>HOME TEAM</th>
              <th>AWAY TEAM</th>
              <th>HOME TEAM SCORE</th>
              <th>AWAY TEAM SCORE</th>
              <th>REFEREE</th>
              <th>COACH HOME TEAM</th>
              <th>COACH AWAY TEAM</th>
              <th>HALFS</th>
              <th>STATUS</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user?.gameFixtures?.map((usery) => (
              <tr key={usery._id}>
                <td>{usery._id}</td>

                <td>{usery.tournament}</td>
                <td>{usery.league}</td>
                <td>{usery.matchDay}</td>
                <td>{usery.time}</td>
                <td>{usery.date}</td>
                <td>{usery.season}</td>
                <td>{usery.team1}</td>
                <td>{usery.team2}</td>
                <td>{usery.scoresTeam1}</td>
                <td>{usery.scoresTeam2}</td>
                <td>{usery.referee}</td>
                <td>{usery.coachTeam1}</td>
                <td>{usery.coachTeam2}</td>
                <td>{usery.halfs}</td>
                <td>{usery.status}</td>

                <td>
                  <Link to={`/admin/fixtures/${usery._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" className="btn-sm">
                    <FaTrash />
                  </Button>
                </td>
                <td>
                  <Link to={`/admin/fixtures/commentary/${usery._id}/edit`}>
                    Update Commentary
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/fixtures/lineup/${usery._id}/edit`}>
                    Update Lineup
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/fixtures/Stats/${usery._id}/edit`}>
                    Update Stats
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <br />
      <h4>Match Day2</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>

              <th>TOURNAMENT</th>
              <th>LEAGUE NAME</th>
              <th>MATCH DAY </th>
              <th>TIME</th>
              <th>DATE</th>
              <th>SEASON</th>
              <th>HOME TEAM</th>
              <th>AWAY TEAM</th>
              <th>HOME TEAM SCORE</th>
              <th>AWAY TEAM SCORE</th>
              <th>REFEREE</th>
              <th>COACH HOME TEAM</th>
              <th>COACH AWAY TEAM</th>
              <th>HALFS</th>
              <th>STATUS</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {news?.gameFixtures?.map((usery) => (
              <tr key={usery._id}>
                <td>{usery._id}</td>

                <td>{usery.tournament}</td>
                <td>{usery.league}</td>
                <td>{usery.matchDay}</td>
                <td>{usery.time}</td>
                <td>{usery.date}</td>
                <td>{usery.season}</td>
                <td>{usery.team1}</td>
                <td>{usery.team2}</td>
                <td>{usery.scoresTeam1}</td>
                <td>{usery.scoresTeam2}</td>
                <td>{usery.referee}</td>
                <td>{usery.coachTeam1}</td>
                <td>{usery.coachTeam2}</td>
                <td>{usery.halfs}</td>
                <td>{usery.status}</td>

                <td>
                  <Link to={`/admin/fixtures/${usery._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" className="btn-sm">
                    <FaTrash />
                  </Button>
                </td>
                <td>
                  <Link to={`/admin/fixtures/commentary/${usery._id}/edit`}>
                    Update Commentary
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/fixtures/lineup/${usery._id}/edit`}>
                    Update Lineup
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/fixtures/Stats/${usery._id}/edit`}>
                    Update Stats
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminGetMatch;
