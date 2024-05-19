export interface Order {
    _id?:string,
    iduser: string,
    idalbum: string,
    createdAt: Date,
    arrivalDate?: Date,
    amount: number,
}
