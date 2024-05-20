export interface Album 
{
    _id?:string,
    idclassification:string,
    name:string,
    artist:string,
    genre:string,
    description:string,
    quantity:number,
    format:string,
    price:number,
    releaseYear:number,
    addedDate?:Date,
    image:string,
    discount:number
}