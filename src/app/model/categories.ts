export interface Icategories {
    createdAt: string,
    name: string,
    id?:number,
    works:[
        {
            id?:number,
            image:string,
            desc: string,
            categoryId?:number
        }
    ]
}