export class JournalImage {

  id: number;
  thumbnailUrl: string;
  imageUrl: string;

  constructor(id: number, thumbnailUrl: string, imageUrl: string){
    this.id = id;
    this.thumbnailUrl = thumbnailUrl;
    this.imageUrl = imageUrl;
  }
}
