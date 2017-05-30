const reactContainer = document.getElementById("react");

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
    props.squares.map((agv,i)=>{
        arr.push (ColorSquare({key: i, style: {backgroundColor: agv.backgroundColor, color: agv.color}}))
    })
    return RCE('div', null, arr
    )
}

const ColorSquare=(props)=>{
    props.style.height = '100px'
    props.style.width = '100px'
    props.style.display = "inline-block"
    return RCE('p', props, `${props.style.color} on ${props.style.backgroundColor}`)
}
renderReact()
