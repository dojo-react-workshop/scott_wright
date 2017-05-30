const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

listItems = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
RCE = React.createElement

function renderReact(){
    ReactDOM.render(
        RCE('h1', null, 'Hello Dojo!',
            RCE('ul',null,'Things I need to do:',
            Component(listItems)
        )),
        reactContainer
    )
}

const Component=(props)=>{
    let arr=[]
    props.forEach((val, i)=>{
        arr.push(RCE('li',{key: i},val))
    })
    return arr
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