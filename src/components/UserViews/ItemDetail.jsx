import styled from "styled-components";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getById, cleanDetail } from "../../redux/actions";
const Loading = lazy(() => import("../Loading"));

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  overflow-y: scroll;
`;
const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.87);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80rem;
  max-height: 80rem;
  border: solid grey;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: -10px 1px 6px rgba(0, 0, 0, 0.1),
    -10px 15px 6px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
    max-height: none;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Align items to the start (left) */
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
const Image = styled.img`
  max-width: 60rem;
  max-height: 70rem;
  margin-top: 1rem;
  align-self: center;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: auto;
  }
`;

const Link = styled.p`
  width: 10%;
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    width: 50%;
    font-size: 14px;
    padding: 6px;
  }
`;
const Text = styled.p`
  text-align: justify;
  font-family: sans-serif;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 1em;
    padding: 1rem;
  }
`;

export default function ItemDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const item = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loading);
  //console.log('hay algo aca? ',item)
  useEffect(() => {
    dispatch(getById(id));

    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  const goBack = () => {
    navigate(`/detalle/${item.pageId}`);
  };

  return (
    <Suspense fallback={<Loading />}>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Card>
            <Content>
              <Image src={item.img} alt="Not found" />
            </Content>
            <Text>{item.text}</Text>
            <Link onClick={goBack}>Volver</Link>
          </Card>
        </Container>
      )}
    </Suspense>
  );
}
