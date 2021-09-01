export class Product {
    constructor(
        private id: string,
        public name: string,
        public description: string,
        public price: number,
        public ticketId?: string
    ){ }

    public getId(): string {
        return this.id
    }
}