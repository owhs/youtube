// gets account page ids, signin urls etc.


// include dom.js
var mode = "autoMode",
    accountList = [],
    account = {
        takeout: a=>"https://takeout.google.com/takeout/custom/youtube?hl=en&authuser="+a.user+"&continue=https://myaccount.google.com/dashboard%3F"+mode+"&pageId="+a.pageID
    },
    els = {accListBtn:"tp-yt-iron-dropdown [has-secondary]>a#endpoint",accList:"ytd-account-item-renderer"};

(async ()=>{
    if (!$0(els.accListBtn)){
        $0("#avatar-btn").click();
        $0("#avatar-btn").click(); //double click to hide it
        await WFE(els.accListBtn);
    }
    $0(els.accListBtn).click();
    await WFE(els.accList);
    accountList = $.map(els.accList,x=>{
        var a=x.inst.data;
        a.tokens=a.serviceEndpoint.selectActiveIdentityEndpoint.supportedTokens.reduce((z, v) => ({...z,[Object.keys(v)[0]]: v[Object.keys(v)[0]]}),{});
        a.user=a.tokens.accountSigninToken.signinUrl.split("authuser=")[1].split("&")[0];
        a.pageID=a.tokens.accountStateToken.obfuscatedGaiaId;
        a.links={
            takeout:account.takeout(a)
        };
        return a
    });
    

    console.log(accountList)
})();
console.clear();
