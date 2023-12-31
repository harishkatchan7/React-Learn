{/* <div id="parent">
    <div id="child">
        <h1>This is H1</h1>
        <h2>This is H2</h2>
    </div>
</div> */}
const parent = React.createElement(
    "div",
    {"id":"parent"},
   React.createElement("div",{"id":"child"},
   [React.createElement("h1",{},"This is H1"),React.createElement("h2",{},"This is H2")])
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);