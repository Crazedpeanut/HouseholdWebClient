import { JournalEntry } from '../model/journal-entry';
import { JournalEntryImage } from '../model/journal-entry-image';

const ENTRY_TEXT = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

const IMAGE: JournalEntryImage = new JournalEntryImage(0, "http://thumb1.shutterstock.com/display_pic_with_logo/2117717/285854987/stock-photo-food-table-healthy-delicious-organic-meal-concept-285854987.jpg", "");

export const ENTRIES: JournalEntry[] = [
  new JournalEntry(0, "Entry Zero", ENTRY_TEXT, "02:06:2003T23:23:00Z10:00", [IMAGE]),
  new JournalEntry(1, "Entry One", ENTRY_TEXT, "02:06:2003T23:23:00Z10:00", [IMAGE]),
  new JournalEntry(2, "Entry Two", ENTRY_TEXT, "02:06:2003T23:23:00Z10:00", [IMAGE])
];
