class URL{
    constructor(shortenedId: string, originalUrl: string, visits: number){
        this.originalUrl = originalUrl;
        this.shortenedId = shortenedId;
        this.visits = visits;
    }
    shortenedId: string;
    originalUrl: string;
    visits: number;
}

export default URL;