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

    event.create("celestial_rod").displayName("§4Celestial Rod");

    event.create("witherite_gear").displayName("§dWitherite Gear");

    event.create("ender_soul").displayName("§dEnder Soul");

    event.create("arachnarch_fang").displayName("§5Arachnarch Fang");

    event
        .create("netherite_rod")
        .displayName("Netherite Rod")
        .tag("forge:rods")
        .tag("forge:rods/netherite")
        .tag("forge:rods/metal");
});

ItemEvents.modification((event) => {
    event.modify("immersive_armors:prismarine_helmet", (item) => {
        item.maxDamage = 283;
    });

    event.modify("immersive_armors:prismarine_chestplate", (item) => {
        item.maxDamage = 482;
    });

    event.modify("immersive_armors:prismarine_leggings", (item) => {
        item.maxDamage = 452;
    });

    event.modify("immersive_armors:prismarine_boots", (item) => {
        item.maxDamage = 421;
    });

    event.modify("cataclysm:void_forge", (item) => {
        item.setAttackDamage(15);
    });
});
