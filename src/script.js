import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
const RestCard = (props) => {
  return (
    <div className="rest">
      <img
        className="restlogo"
        alt="restlogo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ33OMmjLKGZb0y2rcO02C2EEDOE7uoFgJyw&s"
      />
      <div className="r">
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.3 stars</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-cont">
        <RestCard
          resName="meghana food"
          cuisine="biryani, north indian, asian"
        />
        <RestCard resName="kfc" cuisine="ice cream, indian" />
        <RestCard resName="amigoes" cuisine="bappa, soup" />
        <RestCard
          resName="meghana food"
          cuisine="biryani, north indian, asian"
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
