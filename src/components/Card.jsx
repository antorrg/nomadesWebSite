import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img className="card-img-top" src={item.img} alt="Card image" />
        <div className="card-body">
          <p className="card-text">{item.text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link className="btn btn-sm btn-outline-secondary" to={`/detalle/item/${item.id}`}>
                Ver mas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

//- const rows = chunk(items, 3);
//           each row in rows
//             .row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3
//               each item in row
//                 .col
//                   .card.shadow-sm
//                     img.card-img-top(src=item.img, alt='Card image')
//                     .card-body
//                       p.card-text= item.text
//                       .d-flex.justify-content-between.align-items-center
//                         .btn-group
//                a.btn.btn-sm.btn-outline-secondary(href=`/detalles?img=${item.img}&id=${item.id}`) Ver mas
