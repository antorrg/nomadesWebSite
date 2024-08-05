import { useNavigate, useParams } from "react-router-dom";
import bstyle from "./styles/Label.module.css";
import { useEffect, useState, Suspense } from "react";
import GenericButton from "../Auth/userComponents/GenericButton/GenericButton";
import { useAuth } from "../Auth/AuthContext/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getInfo,
  getProjectById,
  getUserById,
  getUsers,
} from "../redux/actions";
import comp from "../components/Index";

const Home = () => {
  const { logout, user, authenticated } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //Project
  const infos = useSelector((state) => state.info);
  const response = useSelector((state) => state.singleProject);
  //User
  const infoUsers = useSelector((state) => state.users);
  const infoUser = useSelector((state) => state.detailUsers);
  const load = useSelector((state) => state.loading);
  const [view, setView] = useState("project"); //puede ser 'project',  o 'user'
  const [modal, setModal] = useState(false);
  const [showDel, setShowDel] = useState(false);

  const { id } = useParams();
  const infoEdit = response?.info;
  const onClose = () => {
    setEditPage(false);
    setEditUser(false);
  };
  const onClose3 = () => {
    setModal(false);
  };
  const onShow = () => {
    setModal(true);
  };
  const delPage = () => {
    setShowDel(true);
  };
  const closeDel = () => {
    setShowDel(false);
    navigate("/home");
  };

  const edition = () => {
    if (view === "user" && id) {
      navigate(`/update/${id}?type=user`);
    } else if (view === "project" && id) {
      navigate(`/update/${id}?type=project`);
    } else {
      null;
    }
  };

  //console.log(authenticated)
  //console.log(user)

  useEffect(() => {
    if (id) {
      if (view === "project") {
        dispatch(getProjectById(id));
      } else {
        dispatch(getUserById(id));
      }
    } else {
      if (view === "project") {
        dispatch(getInfo());
      } else {
        dispatch(getUsers());
      }
    }
  }, [dispatch, view, id]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <GenericButton
            buttonText={"LandingPage"}
            onClick={() => {
              navigate(`/`);
            }}
            className={bstyle.button}
          />
          <GenericButton
            buttonText={"Projects"}
            onClick={() => {
              setView("project");
              navigate(`/home`);
            }}
            disabled={!id && view === "project"}
            className={bstyle.button}
          />
          <GenericButton
            buttonText={"Users"}
            onClick={() => {
              setView("user");
              navigate(`/home`);
            }}
            disabled={!id && view === "user"}
            className={bstyle.button}
          />
          <GenericButton
            buttonText={"Editar"}
            onClick={edition}
            disabled={!id}
            className={bstyle.button}
          />
          <GenericButton
            buttonText={"Agregar"}
            onClick={() => {
              navigate("/create");
            }}
            disabled={!id}
            className={bstyle.button}
          />
          <GenericButton
            buttonText={"Eliminar"}
            onClick={delPage}
            disabled={!id}
            className={bstyle.button}
          />
          <GenericButton
            buttonText={"Logout"}
            onClick={() => {
              logout();
              navigate(`/`);
            }}
            disabled={id}
            className={bstyle.button}
          />
        </div>
        {!load ? (
          <>
            {view === "user" ? (
              <comp.UserCards infos={infoUsers} />
            ) : (
              <>
                {!id ? (
                  <comp.Cards infos={infos} setView={setView} />
                ) : (
                  <>
                    <comp.Items response={response} onShow={onShow} />
                    {modal ? (
                      <comp.CreateItem pageId={id} onClose3={onClose3} />
                    ) : null}
                    {showDel ? (
                      <comp.DeleteItem
                        pageId={id}
                        response={response}
                        closeDel={closeDel}
                      />
                    ) : null}
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <comp.Loading />
        )}
        <comp.Footer />
      </Suspense>
    </div>
  );
};

export default Home;
