Events.on(WorldLoadEvent, event => {
    // 0.5秒待ってから実行（スマホの読み込みラグ対策）
    Timer.schedule(() => {
        // 現在のセクター情報を取得
        let sector = Vars.state.rules.sector;
        
        // 1. セクターが存在するか 2. 惑星名が一致するか 3. セクターIDが一致するか
        // ※ planet.name の部分は Earth.hjson の "name" と完全に一致させてください
        if(sector != null && sector.planet.name === "earth"){
            
            Vars.ui.showText(
                "作戦指令：地球奪還", 
                "人間の故郷、地球へようこそ。\n\n現在、各地で反乱軍による暴動が激化している。司令官、あなたの任務はこのセクターを制圧し、全資源を確保することだ。\n\n武運を祈る。"
            );
        }
    }, 0.5);
});
