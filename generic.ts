const fruit : string []=["mango","orange","apple"]
const number : number []=[12,34,54]

function gerFristItem<T>(item:T[]):T{
    return item[0]
}

const f = gerFristItem(fruit).toLocaleUpperCase()
const n = gerFristItem(number).toFixed()
console.log(f,n)