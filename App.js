//  This is episode 2  I hope you will enjoy it

const heading1 = React.createElement("h1",{},"I am in h1 tag");
const heading3 = React.createElement("h1",{},"I am in h1 tag");
const heading2 = React.createElement("h2",{},"I am in h2 tag");
const heading4 = React.createElement("h2",{},"I am in h2 tag");


const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id: "child"},[heading1,heading2])
,
React.createElement("div", {
    id:"child2"
},[heading3,heading4])
);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(root)
