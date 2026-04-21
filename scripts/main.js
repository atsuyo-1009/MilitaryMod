Events.on(WorldLoadEvent, event => {
    Timer.schedule(() => {
        try {
            let state = Vars.state;
            if(!state || !state.rules || !state.rules.sector) return;

            let planet = state.rules.sector.planet;
            if(!planet || !planet.name) return;
            
            Log.info("Planet name: " + planet.name);
            
            if(planet.name.toLowerCase().includes("earth")){
                Log.info("Earth detected!");
                Vars.ui.showText(
                    "作戦指令：地球奪還",
                    "人間の故郷、地球へようこそ。\n反乱軍を制圧し、資源を確保せよ。"
                );
            }
        } catch(e) {
            Log.err("Earth intro error: " + e);
        }
    }, 2.0);
});
Events.on(ContentInitEvent, () => {
    Core.settings.remove("intro_done_earth");
    Core.settings.save();
    Log.info("Earth intro flag removed");
});
