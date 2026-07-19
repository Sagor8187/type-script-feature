const order = new Map<string,number>()

function addOrder(juice:string){
    const quantity = (order.get(juice)??0)+1
    order.set(juice,quantity)
}
addOrder("mango")
addOrder("mango")
addOrder("mango")
addOrder("apple")
addOrder("apple")
addOrder("apple")
addOrder("banana")
console.log(order)