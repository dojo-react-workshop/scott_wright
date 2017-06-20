function boxes(o1, o2){

    let newLX=Math.max(o1.x,o2.x)
    let newRX=Math.min(o1.x+o1.w,o2.x+o2.w)
    let newTY=Math.min(o1.y+o1.h,o2.y+o2.h)
    let newBY=Math.max(o1.y,o2.y)

    let newW=newRX-newLX
    let newH=newTY-newBY

    if (newW <=0 || newH <=0){
        return{
            x:null,
            y:null,
            w:null,
            h:null     
        }
    }
    return{
        x:newLX,
        y:newBY,
        w:newW,
        h:newH
    }

}

//base test
console.log(boxes({x:1,y:2,w:3,h:4},{x:2,y:4,w:1,h:3}))

//touching not overlap
console.log(boxes({x:-1,y:-2,w:3,h:4},{x:-2,y:-4,w:2,h:3}))

function boxes(o1, o2){

    let newLX=Math.max(o1.x,o2.x)
    let newRX=Math.min(o1.x+o1.w,o2.x+o2.w)
    let newTY=Math.min(o1.y+o1.h,o2.y+o2.h)
    let newBY=Math.max(o1.y,o2.y)

    let newW=newRX-newLX
    let newH=newTY-newBY

    if (newW <=0 || newH <=0){
        return{
            x:null,
            y:null,
            w:null,
            h:null     
        }
    }
    return{
        x:newLX,
        y:newBY,
        w:newW,
        h:newH
    }

}

//base test
console.log(boxes({x:1,y:2,w:3,h:4},{x:2,y:4,w:1,h:3}))

//touching not overlap
console.log(boxes({x:-1,y:-2,w:3,h:4},{x:-2,y:-4,w:2,h:3}))
