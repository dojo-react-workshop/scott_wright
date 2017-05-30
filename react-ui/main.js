const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

listItems = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]


function renderReact(){
    ReactDOM.render(
        React.createElement('h1', null, 'Hello Dojo!',
            React.createElement('ul',null,'Things I need to do:',
                React.createElement('li',null,listItems[0]),
                React.createElement('li',null,listItems[1]),
                React.createElement('li',null,listItems[2]),
                React.createElement('li',null,listItems[3])
            )
        ),
        reactContainer
    )
}

renderReact()
// function renderJS() {
// jsContainer.innerHTML=`
//     <div class="demo">
//         Hello JS
//         <input />
//         <p>${new Date()}</p>
//     </div>
//     `;
// }

// function renderReact() {
// ReactDOM.render(
//     React.createElement(
//         'div', 
//         { className: 'demo'}, 
//         'Hello React',
//         React.createElement('input'),
//         React.createElement("p",null,new Date().toString())
//     )
//     ,reactContainer)
// }
// setInterval(renderJS,1000)
// setInterval(renderReact,1000)