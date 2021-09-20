export default class User {
    constructor(
        private id: string,
        public name: string,
        public email: string,
        public cypherPassword: string,
        public role: string
    ){};

    public getId(): string {
        return this.id
    };
};