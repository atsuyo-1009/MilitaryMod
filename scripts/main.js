Events.on(WorldLoadEvent, event => {
    Timer.schedule(() => {
        let state = Vars.state;
        if(!state || !state.rules || !state.rules.sector) return;

        let planet = state.rules.sector.planet;
        
        // 惑星名をログに出力してみる
        Log.info("Planet name: " + (planet ? planet.name : "null"));
        
        if(planet && planet.name.toLowerCase().includes("earth")){
            let flag = "intro_done_earth";
            Log.info("Found earth planet!");
            Log.info("Flag status: " + Core.settings.getBool(flag, false));

            if(!Core.settings.getBool(flag, false)){
                Vars.ui.showText(
                    "作戦指令：地球奪還",
                    "人間の故郷、地球へようこそ。\n反乱軍を制圧し、資源を確保せよ。"
                );
                
                Core.settings.put(flag, true);
                Core.settings.save();
            }
        }
    }, 1.0);
});
