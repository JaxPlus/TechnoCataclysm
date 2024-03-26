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
    /** @todo DODAJ TOOLTIPY */
    event
        .create("celestial_fusion_ingot")
        .displayName("§5Celestial Fusion Ingot")
        .tag("forge:ingots")
        .tag("balm:ingots");

    event
        .create("celestial_rod")
        .displayName("§5Celestial Rod")
        .tag("forge:rods")
        .tag("forge:rods/celestial")
        .tag("forge:rods/metal");

    event.create("witherite_gear").displayName("§dWitherite Gear");

    event.create("ender_soul").displayName("§dEnder Soul");

    event.create("arachnarch_fang").displayName("§5Arachnarch Fang");

    event
        .create("netherite_rod")
        .displayName("Netherite Rod")
        .tag("forge:rods")
        .tag("forge:rods/netherite")
        .tag("forge:rods/metal");

    event
        .create("meka_control_circuit")
        .displayName("§7Meka Control Circuit")
        .tag("forge:circuits")
        .tag("forge:circuits/meka");

    event.create("diamond_core").displayName("§bDiamond Core");
    event.create("infused_diamond_core").displayName("§3Infused Diamond Core");

    event.create("arachnarch_eye").displayName("§aArachnarch Eye");
    event.create("summoners_grimoire").displayName("§8Summoner's Grimoire");
    event.create("starlit_bark").displayName("§7Starlit Bark");
    event
        .create("smoldering_piece_of_paper")
        .displayName("§6Smoldering Piece Of Paper");

    event.create("blue_skies_soul").displayName("§bBlue §cSkies §rSoul");

    event
        .create("celestial_smithing_template", "smithing_template")
        .appliesTo("Celestial Blade")
        .ingredients("Celestial Fusion Ingot")
        .appliesToSlotDescription("Add Celestial Blade")
        .ingredientsSlotDescription("Add Celestial Fusion Ingot")
        .displayName("§6Smithing Template");

    event
        .create("shattered_celestial_blade", "sword")
        .displayName("§4Shattered Celestial Blade")
        .attackDamageBonus(2)
        .maxDamage(1497)
        .speed(1)
        .speedBaseline(-2.25)
        .modifyTier((tier) => {
            tier.setEnchantmentValue(20);
            tier.setLevel(3);
            tier.setRepairIngredient("kubejs:celestial_fusion_ingot");
        });

    event
        .create("celestial_blade", "sword")
        .displayName("§4Celestial Blade")
        .attackDamageBonus(3)
        .maxDamage(2873)
        .speed(1)
        .speedBaseline(-2)
        .modifyTier((tier) => {
            tier.setEnchantmentValue(30);
            tier.setLevel(4);
            tier.setRepairIngredient("kubejs:celestial_fusion_ingot");
        });

    event
        .create("arc_of_the_cataclysm", "sword")
        .displayName("§4Arc Of The Cataclysm")
        .attackDamageBonus(6)
        .maxDamage(9543)
        .speed(1)
        .speedBaseline(-2)
        .modifyTier((tier) => {
            tier.setEnchantmentValue(40);
            tier.setLevel(4);
            tier.setRepairIngredient("kubejs:celestial_fusion_ingot");
        });
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
