const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

// listItems = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
RCE = React.createElement

function renderReact(){
    ReactDOM.render(
        ThreeSquares({squares: [
                {backgroundColor: 'blue', color: 'white'},
                {backgroundColor: 'red', color: 'blue'},
                {backgroundColor: 'pink', color: 'green'}
                ]}),
        reactContainer
    )
}

const ThreeSquares=(props)=>{
    const arr = []
    props.squares.map((agv)=>{
        arr.push (ColorSquare({style: {backgroundColor: agv.backgroundColor, color: agv.color}}))
    })
    return RCE('div', props, arr
    )
}

const ColorSquare=(props)=>{
    props.style.height = '100px'
    props.style.width = '100px'
    props.style.display = "inline-block"
    return RCE('p', props, `${props.style.color} on ${props.style.backgroundColor}`)
}

// const Component=(props)=>{
//     let arr=[]
//     props.forEach((val, i)=>{
//         arr.push(RCE('li',{key: i},val))
//     })
//     return arr
// }

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