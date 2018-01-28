chrome.commands.onCommand.addListener(function(command) {
    if(command=="nextPage"){
        goNextpage();
    }else if(command=="backPage"){
        goBackpage();
    }else{

    }
});

function goNextpage(){
    chrome.tabs.getSelected(null, function(tab) {
        var nowPage = tab.url.match(/page=\d+/);
        if(nowPage){
            var nextPage = Number(nowPage[0].replace(/page=/, "")) + 1;
            var nextUrl= tab.url.replace(/page=\d+/, "page=" + nextPage);
            chrome.tabs.update(null, {"url":nextUrl}, function(tab){
            });
        }else{
            var nextUrl= tab.url + "?page=2";
            chrome.tabs.update(null, {"url":nextUrl}, function(tab){
            });
        }
    });
}

function goBackpage(){
    chrome.tabs.getSelected(null, function(tab) {
        var nowPage = tab.url.match(/page=\d+/);
        if(nowPage){
            var nextPage = Number(nowPage[0].replace(/page=/, "")) - 1;
            if(nextPage<=0){
                return;
            }
            var nextUrl= tab.url.replace(/page=\d+/, "page=" + nextPage);
            chrome.tabs.update(null, {"url":nextUrl}, function(tab){
            });
        }else{
            
        }
    });
}