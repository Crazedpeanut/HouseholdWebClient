import { JournalImage } from './journal-image';

export class JournalEntry {

  constructor(public id: number = null,
              public title: string = null,
              public content: string = null,
              public createdDateTime: string = null,
              public images: JournalImage[] = null){ }
}
