export class RadioModel {
    id: string;
    country?:string;
    description?:string;
    imageURL?:string;
    name?:string;
    streamURL?:string;

    constructor(id: string, country?:string, description?:string, imageURL?:string, name?:string, streamURL?:string) {
        this.id = id;
        this.country = country;
        this.description = description;
        this.imageURL = imageURL;
        this.name = name;
        this.streamURL = streamURL;
    }
    
}