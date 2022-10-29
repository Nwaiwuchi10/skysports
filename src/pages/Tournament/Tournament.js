import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
const Tournament = () => {
  const [poster, setPoster] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/tournament/");
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">Failed</Message>
        ) : (
          <div>
            <h6 className="Div-h6-v">Tournament</h6>
            <hr className="hr" />
            {/* <Carousel> */}

            {poster?.tournaments?.map((posty) => (
              <h4 style={{ marginBottom: "30px", fontWeight: "600" }}>
                {posty?.tournament}{" "}
              </h4>
            ))}

            {/* </Carousel> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournament;
