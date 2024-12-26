const heading = React.createElement(
    "h1",
    {id:"heading",xyz:"abc"},// object - we pass the attributes over here
    "Hello Welcome to React World"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading)