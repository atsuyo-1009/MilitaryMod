Events.on(WorldLoadEvent, event => {
    let sector = Vars.state.rules.sector;

    // セクターが存在するかチェック
    if(sector != null && sector.planet != null){
        
        // 【重要】大文字小文字を無視して「earth」が含まれているか判定
        // これなら "Earth" でも "earth" でも "military-mod-earth" でも反応します
        let pName = sector.planet.name.toLowerCase();
        
        if(pName.includes("earth")){

            // 一度だけ出すためのフラグ名
            let flagName = "intro-shown-" + pName;

            // まだ表示していない場合のみ実行
            if(!Core.settings.getBool(flagName, false)){
                
                Vars.ui.showText(
                    "作戦指令：地球奪還", 
                    "人間の故郷、地球へようこそ。\n\n現在、各地で反乱軍による暴動が激化している。司令官、あなたの任務はこのセクターを制圧し、全資源を確保することだ。\n\n武運を祈る。"
                );

                // 読了フラグを保存
                Core.settings.put(flagName, true);
                Core.settings.save();
            }
        }
    }
});
