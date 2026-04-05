Events.on(WorldLoadEvent, event => {
    let sector = Vars.state.rules.sector;

    // 1. セクターが存在し、かつ惑星名が「earth」であるか確認
    // ※ "earth" の部分は、先ほどのデバッグで出た名前に書き換えてください
    if(sector != null && sector.planet.name === "Earth"){

        // 2. 「すでに説明を読んだか」をチェックするフラグの名前を作る
        // 例: "earth-intro-shown"
        let flagName = "mod-military-intro-" + sector.planet.name;

        // 3. まだ説明を読んでいない（フラグがfalse）場合のみ実行
        if(!Core.settings.getBool(flagName, false)){
            
            // 画面に説明を表示
            Vars.ui.showText(
                "作戦指令：地球奪還", 
                "人間の故郷、地球へようこそ。\n\n現在、各地で反乱軍による暴動が激化している。司令官、あなたの任務はこのセクターを制圧し、全資源を確保することだ。\n\n武運を祈る。"
            );

            // 4. 「もう読んだ」というフラグを保存する
            Core.settings.put(flagName, true);
            Core.settings.save();
        }
    }
});
