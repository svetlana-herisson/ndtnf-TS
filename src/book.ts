export default interface IBook {
    id: number;
    title: string;
    description: string;
    authors: string;
    favorite: boolean;
    fileCover?: string;
    fileName?: string;
    fileBook?: string;
}

