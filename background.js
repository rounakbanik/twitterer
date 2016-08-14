contextList = ["selection", "link", "image", "page"];

for(i=0; i<contextList.length; i++) {
  context = contextList[i];

  chrome.contextMenus.create({
    title: "Share this " +context+ " on Twitter",
    contexts: [context],
    onclick: myFunction,
    id: context
  });
}


function myFunction(data, tab) {
  switch(data.menuItemId) {
    case 'selection':
      chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+
                            encodeURIComponent(data.selectionText), type: "panel", width: 500,
                            height: 300});
      break;
    case 'link':
      chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+ encodeURIComponent(data.linkUrl),
                             type: "panel", width: 500, height: 300});
      break;
    case 'image':
      chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+ encodeURIComponent(data.srcUrl),
                             type: "panel", width: 500, height: 300});
      break;
    case 'page':
      chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+ encodeURIComponent(tab.title)+
                                   "%0A&url="+encodeURIComponent(data.pageUrl),
                            type: "panel", width: 500, height: 300});
      break;
  }

}
