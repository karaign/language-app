export default class User {
    private static cache = {};

    constructor(
        public id: string,
        public createdAt: Date,
        public bio: string,
        public location: string,
        public languages: string[]
    ) {}
}