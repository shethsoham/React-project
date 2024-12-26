/*
 div id = "parent"
    div id ="child"
        <h1> I am a child1 <h1>
        <h2> I am child2 <h2>
    </div>
</div>
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "I am a child1 "
        ),
        React.createElement(
            "h2",
            {},
            "I am a child1 "
        )]
))

console.log(parent)
const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)