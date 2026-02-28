export default interface IBook {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly authors: string;
    readonly favorite: boolean;
    readonly fileCover?: string;
    readonly fileName?: string;
    readonly fileBook?: string;
}

