import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
const League = () => {
  const [poster, setPoster] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/league/");
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  return (
    <div className="leagues-container">
      <div style={{ marginTop: "30px" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">Failed</Message>
        ) : (
          <div>
            <h6 className="Div-h6-v">League</h6>
            <hr className="hr" />
            {/* <Carousel> */}

            <div className="leagues-container">
              {poster?.leagues?.map((posty) => (
                <div key={posty._id} style={{ marginBottom: "20px" }}>
                  <img
                    src={posty?.image}
                    alt="jjf"
                    style={{ width: "auto", height: "20vh" }}
                  />
                  <div>{posty?.tournament} </div>
                  <div>{posty?.leagueName} </div>
                  <div>{posty?.abrv} </div>
                </div>
              ))}
            </div>
            {/* </Carousel> */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default League;
