"use strict";
var JournalEntry = (function () {
    function JournalEntry(id, title, content, createdDateTime, images) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdDateTime = createdDateTime;
        this.images = images;
    }
    return JournalEntry;
}());
exports.JournalEntry = JournalEntry;
//# sourceMappingURL=journal-entry.js.map