browser.contextMenus.create({
    id: 'UpdateBookmark',
    title: navigator.language == 'de' ? 'Lesezeichen aktualisieren' : 'Update bookmark',
    contexts: ["bookmark"],
    type: 'normal',
    icons: {
        '48': 'icons/icon48.png'
    }
});

browser.contextMenus.onClicked.addListener(item => {
    if (item.menuItemId == 'UpdateBookmark') {
        browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
            browser.bookmarks.update(item.bookmarkId, { url: tabs[0].url });
        })
    }
})