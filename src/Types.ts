export type Session = {
    AccessToken: string;
    ApiGatewayUri: string;
    ApiGatewayVersion: string;
}


export type Video = {
    date: string;
    title: string;
    outPath: string;
    totalChunks: number;    // Abstraction of FFmpeg timemark
    playbackUrl: string;
    posterImageUrl: string;
    captionsUrl?: string
}


/* TODO: expand this template once we are all on board with a list
see https://github.com/snobu/destreamer/issues/190 for list*/
export const templateElements: Array<string> = [
    'title' ,
    'date' ,
    'uniqueID'
];
