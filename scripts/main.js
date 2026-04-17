Events.on(WorldLoadEvent, event => {
    // 読み込み完了直後に実行すると落ちやすいので、少しだけ待つ
    Timer.schedule(() => {
        let state = Vars.state;
        if(!state || !state.rules || !state.rules.sector) return;

        let planet = state.rules.sector.planet;
        // 惑星名に "earth" が含まれているかチェック（大文字小文字無視）
        if(planet && planet.name.toLowerCase().includes("earth")){
            
            // 一度だけ出すためのフラグ（毎回テストしたいならここを書き換える）
            let flag = "intro_done_earth";

            if(!Core.settings.getBool(flag, false)){
                Vars.ui.showText(
                    "作戦指令：地球奪還",
                    "人間の故郷、地球へようこそ。\n反乱軍を制圧し、資源を確保せよ。"
                );
                
                Core.settings.put(flag, true);
                Core.settings.save();
            }
        }
    }, 1.0); // 1秒待つ（この間にロードを終わらせる）
});
