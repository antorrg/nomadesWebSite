import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getProductById} from "../redux/actions";
import * as Cmt from "../components/IndexComponents";

const Detail = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.ProductId);
  const info = response.info;
  const items = response.items;
  const { id } = useParams();
   
  useEffect(() => {
    dispatch(getProductById(id));
   
  }, [id, dispatch]);
  return (
    <div>
      <Cmt.Header />
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Proyecto: {info?.title}</h1>
            <p className="lead.text-muted">{info?.infoBody}</p>
            <Link className="btn btn-secondary my-2" to="/">
              Volver
            </Link>
          </div>
        </div>
      </section>
      <section className="album.py-5.bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {items?.map((item) => (
              <Cmt.Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      <Cmt.Footer />
    </div>
  );
};

export default Detail;
