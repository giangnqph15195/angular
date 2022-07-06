export interface Iblog {
    id?:number,
    name:string,
    image:string,
    desc:string,
    productdetail:[
        {
            id?:number,
            name:string,
            image:string,
            desc:string,
            productId:number
        }
    ]
}