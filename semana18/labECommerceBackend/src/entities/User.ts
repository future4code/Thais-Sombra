export default class User {
    constructor(
        private id: string,
        public name: string,
        public email: string
    ){
        console.log("Constructor da classe User")
            this.id = id
            this.name = name
            this.email = email
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }
}