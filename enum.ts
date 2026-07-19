enum Status  {
  draft,
  private,
  public
};

type article ={
    id:number,
    title:string,
    status:Status
}

const article1 : article={
    id:1,
    title:"understanding typescript Enums",
    status:Status.draft
}

const article2 : article = {
    id:2,
    title:"Advance ts",
    status:Status.private
}
const article3 : article ={
    id:3,
    title:"pro ts",
    status:Status.public
}

console.log(article3)