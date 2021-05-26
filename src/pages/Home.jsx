import React from "react";
import Header from "../components/Header";
import SneackersList from "../components/SneackersList";
import sneakers from "../utils/sneakers.json";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      sneakers: [],
    };
  }

  handleFilterSneackers(event) {
    const filterSneackers = this.state.sneakers.filter(
      (sneaker) => sneaker.id > 4
    );
    this.setState({ sneakers: filterSneackers });
  }

  handleFilterSneackersName(event) {
    const filterSneackersName = this.state.sneakers.filter(
      (sneaker) => sneaker.name.length > 9
    );
    this.setState({ sneakers: filterSneackersName });
  }

  handleSortSneakers(event) {
    const sortSneakers = this.state.sneakers.sort((elem1, elem2) => {
      if (elem1.price < elem2.price) {
        return -1;
      }
      if (elem1.price > elem2.price) {
        return 1;
      }

      return 0;
    });
    this.setState({ sneakers: sortSneakers });
  }

  componentDidMount() {
    this.setState({ sneakers: sneakers });
  }

  render() {
    return (
      <div>
        <Header />
        <SneackersList
          sneakers={this.state.sneakers}
          handleFilterSneackers={(event) => this.handleFilterSneackers(event)}
          handleFilterSneackersName={(event) =>
            this.handleFilterSneackersName(event)
          }
          handleSortSneakers={(event) => this.handleSortSneakers(event)}
        />
      </div>
    );
  }
}

export default Home;