// priority: 0

StartupEvents.registry("block", (event) => {
    event
        .create("obsidian_block_signalum")
        .displayName("Obsidian Fused With Signalum")
        .mapColor("COLOR_BLACK")
        .hardness(60)
        .resistance(1000)
        .soundType("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .requiresTool(true);

    event
        .create("obsidian_block_enderium")
        .displayName("Obsidian Fused With Enderium")
        .mapColor("COLOR_BLACK")
        .hardness(60)
        .resistance(1000)
        .soundType("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("minecraft:needs_diamond_tool")
        .requiresTool(true);
});

StartupEvents.registry("item", (event) => {
    event
        .create("celestial_fusion_ingot")
        .displayName("§4Celestial Fusion Ingot");
});

ItemEvents.modification((event) => {
    event.modify("immersive_armors:prismarine_helmet", (item) => {
        item.maxDamage = 313;
    });

    event.modify("immersive_armors:prismarine_chestplate", (item) => {
        item.maxDamage = 512;
    });

    event.modify("immersive_armors:prismarine_leggings", (item) => {
        item.maxDamage = 472;
    });

    event.modify("immersive_armors:prismarine_boots", (item) => {
        item.maxDamage = 431;
    });
});
