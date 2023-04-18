chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  });
//videoId selects the uniqueid of a video https://www.youtube.com/watch?v=Vus3KQWevxs here"Vus3KQWevxs" is the unique id.
