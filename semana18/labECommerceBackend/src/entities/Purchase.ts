export class Purchase {
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        public quantity: number,
        public totalValue: number
    ){ }

    public getId (): string{
        return this.id
    }

    public getUserId (): string{
        return this.userId
    }

    public getProductId (): string{
        return this.productId
    }

}