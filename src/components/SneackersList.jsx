import React from "react";
import SneackersItem from "./SneackersItem";
import "../components/SneackersList.css";

function SneackersList(props) {
  function FilterSneackers(event) {
    props.handleFilterSneackers(event);
  }

  function FilterSneackersByName(event) {
    props.handleFilterSneackersName(event);
  }

  function SortSneackersByPrice(event) {
    props.handleSortSneakers(event);
  }

  const { sneakers } = props;
  return (
    <div>
      <div className="container">
        <div className="col-12-buttons col-md-4">
          <button type="button" onClick={FilterSneackers}>
            Filtrează după id
          </button>
          <button id="name" type="button" onClick={FilterSneackersByName}>
            Filtrează după nume
          </button>
          <button id="price" type="button" onClick={SortSneackersByPrice}>
            Sorteaza după preț
          </button>
        </div>
        <div className="row">
          {sneakers.map((sneacker, index) => {
            return (
              <SneackersItem
                image={sneacker.image}
                name={sneacker.name}
                size1={sneacker.size1}
                size2={sneacker.size2}
                size3={sneacker.size3}
                size4={sneacker.size4}
                price={sneacker.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SneackersList;