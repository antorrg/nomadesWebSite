import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext/AuthContext";
import { Suspense, useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../redux/actions";
import Navbar from "../components/UserViews/NavbaUser";
import Loading from "../components/Loading";
import Carousel from "../components/UserViews/Carousel";
const FrontCards = lazy(() => import("../components/UserViews/FrontCards"));

export default function Landing() {
  const { authenticated } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.info);
  const load = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getInfo());
  }, []);
  const goGo = () => {
    authenticated ? navigate("/home") : navigate("/login");
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar goGo={goGo} />
        <hr></hr>
        {!load ? (
          <>
            <Carousel projects={projects} />
            <br></br>
            <FrontCards projects={projects} />
          </>
        ) : (
          <Loading />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <strong
            style={{ alignSelf: "center", color: "blue", fontSize: "30" }}
          >
            Landing page de GameWorld e-commerce
          </strong>
          {/* <a onClick={goGo} style={{color:'blue', cursor:'pointer', textDecoration:'underline'}}><h1>Yo soy la landing page</h1></a> */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/misitioweb-d59d3.appspot.com/o/images%2FcarruselGame.png?alt=media&token=be46ecb5-db71-4bfa-b61b-1edbc60b6f04"
            alt="Image from Firebase"
            style={{ maxWidth: "600px", alignSelf: "center" }}
          />
        </div>
      </Suspense>
    </>
  );
}
