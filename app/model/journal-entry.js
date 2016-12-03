"use strict";
var JournalEntry = (function () {
    function JournalEntry(id, title, content, createdDateTime, images) {
        if (id === void 0) { id = null; }
        if (title === void 0) { title = null; }
        if (content === void 0) { content = null; }
        if (createdDateTime === void 0) { createdDateTime = null; }
        if (images === void 0) { images = null; }
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