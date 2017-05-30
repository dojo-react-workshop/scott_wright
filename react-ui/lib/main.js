'use strict';

var reactContainer = document.getElementById("react");

var RCE = React.createElement;

function renderReact() {
    ReactDOM.render(ThreeSquares({ squares: [{ backgroundColor: 'blue', color: 'white' }, { backgroundColor: 'red', color: 'blue' }, { backgroundColor: 'pink', color: 'green' }] }), reactContainer);
}

var ThreeSquares = function ThreeSquares(props) {
    var arr = props.squares.map(function (agv, i) {
        return ColorSquare({ key: i, style: { backgroundColor: agv.backgroundColor, color: agv.color } });
    });
    return React.createElement(
        'div',
        null,
        arr
    );
};

var ColorSquare = function ColorSquare(props) {
    props.style.height = '100px';
    props.style.width = '100px';
    props.style.display = "inline-block";
    return React.createElement(
        'p',
        { style: props.style },
        props.style.color + ' on ' + props.style.backgroundColor
    );
};
renderReact();
//# sourceMappingURL=main.js.map