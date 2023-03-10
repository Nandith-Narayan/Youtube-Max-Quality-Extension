settingsButton = null;

url = "";

function getSettingsButton(){

    settingsButton = document.querySelector("button.ytp-button.ytp-settings-button");
    if(settingsButton === null){
        setTimeout(getSettingsButton, 1000);
    }else{
        console.log("POG");
        settingsButton.click();
        settingOptions = document.querySelectorAll("div.ytp-menuitem");
        settingOptions[settingOptions.length - 1].click();
        
        qualityOptions = document.querySelectorAll("div.ytp-quality-menu div.ytp-panel-menu div.ytp-menuitem");
        console.log(qualityOptions);
        qualityOptions[qualityOptions.length - 1].click();
    }
}

function main(){
    if (document.URL !== url){
        url = document.URL;
        getSettingsButton();
    }
    
    setTimeout(main, 2000);

}

main();