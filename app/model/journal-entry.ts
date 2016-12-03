import { JournalEntryImage } from './journal-entry-image';

export class JournalEntry {

  id: number;
  title: string;
  createdDateTime: string;
  content: string;
  images: JournalEntryImage[];

  constructor(id: number, title: string, content: string, createdDateTime: string, images: JournalEntryImage[]){
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdDateTime = createdDateTime;
    this.images = images;
  }
}
