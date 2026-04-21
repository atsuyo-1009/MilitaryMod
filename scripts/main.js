Events.on(WorldLoadEvent, event => {
    Timer.schedule(() => {
        let state = Vars.state;
        if(!state || !state.rules || !state.rules.sector) return;

        let planet = state.rules.sector.planet;
        if(planet && planet.name.toLowerCase().includes("earth")){
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
    }, 3.0); // 1.0 → 3.0 に変更（3秒待つ）
});
