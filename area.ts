type ractangular = {
    height : number,
    weidth : number
}

type circle = {
    radius : number
}

type squre = {
    length : number
}

function calculateArea (shape : ractangular | circle | squre):number{
    if('radius' in shape){
        return Math.PI * shape.radius* shape.radius
    }else if('length' in shape){
        return shape.length * shape.length
    }else{
        return shape.height * shape.weidth
    }
}

console.log(calculateArea({radius:39}))
