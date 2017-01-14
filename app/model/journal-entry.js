"use strict";
var JournalEntry = (function () {
    function JournalEntry(id, title, content, createdDateTime, author, images, taggedUsers) {
        if (id === void 0) { id = null; }
        if (title === void 0) { title = null; }
        if (content === void 0) { content = null; }
        if (createdDateTime === void 0) { createdDateTime = null; }
        if (author === void 0) { author = null; }
        if (images === void 0) { images = []; }
        if (taggedUsers === void 0) { taggedUsers = []; }
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdDateTime = createdDateTime;
        this.author = author;
        this.images = images;
        this.taggedUsers = taggedUsers;
    }
    return JournalEntry;
}());
exports.JournalEntry = JournalEntry;
//# sourceMappingURL=journal-entry.js.map