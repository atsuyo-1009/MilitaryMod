// 惑星に着陸した（マップが読み込まれた）時のイベントを監視
Events.on(WorldLoadEvent, event => {
    // 現在の惑星が「earth」であり、かつそのセクターが「最初（0番）」だった場合
    if(Vars.state.rules.sector && Vars.state.rules.sector.planet.name === "Earth" && Vars.state.rules.sector.id === 0){
        
        // 画面中央にダイアログを表示
        // showText(タイトル, 本文)
        Vars.ui.showText(
            "作戦指令：地球奪還", 
            "人間の故郷、地球へようこそ。\n\n現在、各地で反乱軍による暴動が激化している。司令官、あなたの任務はこのセクターを制圧し、全資源を確保することだ。\n\n武運を祈る。"
        );
    }
});
