const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

listItems = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
RCE = React.createElement

function renderReact(){
    ReactDOM.render(
        RCE('h1', null, 'Hello Dojo!',
            RCE('ul',null,'Things I need to do:',
                RCE('li',null,listItems[0]),
                RCE('li',null,listItems[1]),
                RCE('li',null,listItems[2]),
                RCE('li',null,listItems[3])
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