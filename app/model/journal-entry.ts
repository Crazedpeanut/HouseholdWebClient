import { JournalImage } from './journal-image';
import {HouseholdUser} from "./household-user";

export class JournalEntry {

  constructor(public id: number = null,
              public title: string = null,
              public content: string = null,
              public createdDateTime: string = null,
              public images: JournalImage[] = [],
              public taggedUsers: HouseholdUser[] = []){ }
}
