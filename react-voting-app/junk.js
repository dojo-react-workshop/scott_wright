   const reactContainer = document.getElementById("react");
            ReactDOM.render(
                (<h1>Vote Your JS Library!</h1>),
                VoteComponent(),
                reactContainer
            )
            const VoteComponent=(props)=>{
                let {style} = props
                style.height = '100px'
                style.width = '300px'
                style.display = "inline-block"
                return(<div style={style}> a div  </div>)
            }