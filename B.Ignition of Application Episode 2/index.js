import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1",{id:"heading"},"Namaste Soham")



// -------------------------------------------
// using JSX

// Notes
// JSX => (transpiled before it reaches the JS) - Parcel - Babel
// JSX=> Babel transpiles it to React.createElement => ReactElement - JS object => HTMLElement(render)

const heading = (<h1 className = "header" id = "heading1"> 
    Namaste Soham 
    </h1>)
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(heading)

// Writing react functional component

const elem = <span> React Element </span>
const TitleComponent = () =>(
    (<div id ="title" className = "Titlecomponent">
            <h1 id= "heading 1" >Component Composition </h1>
    </div>)
);

// Inserted component inside elelement and crearted a title elelement
const title = (
    <h1 className ="head" tabIndex="5">
    {elem} 
    Namaste React using JSX
    
    </h1>
)
const number = 1000;
const HeadingComponent = () =>(
    
    (<div id ="container">
        <TitleComponent /> {/*Component Composition */}
        {title} {/*Insertring a element inside a component */}
        <h2>{number +100 }</h2>
        <h1>
            Namaste react functional Component
        </h1>
        
    </div>
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)
