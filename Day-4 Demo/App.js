import React from "react";
import ReactDOM from "react-dom/client";

const jsx = <h1 className="heading">Heading</h1>

const Title = () => {
    return <h2>React Course</h2>;
};

const number = 5500;
const TopContainer = () => (
        <div id="container">
            {number}
            <Title />
            <Title></Title>
            
            {jsx}
          <p>Hey! What's up?</p>
        </div>
      );
// const heading = React.createElement("h1", { id: "heading"}, "Hello Team!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TopContainer />);
