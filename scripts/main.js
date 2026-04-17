let earthIntroShown = false;

Events.on(WorldLoadEvent, event => {
    if(earthIntroShown) return;
    
    Timer.schedule(() => {
        let state = Vars.state;
        if(!state?.rules?.sector?.planet) return;
        
        if(state.rules.sector.planet.name.toLowerCase().includes("earth")){
            Vars.ui.showText("作戦指令：地球奪還", "人間の故郷、地球へようこそ。\n反乱軍を制圧し、資源を確保せよ。");
            earthIntroShown = true;
        }
    }, 2.0);
});
