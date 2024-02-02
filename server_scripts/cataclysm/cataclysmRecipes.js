ServerEvents.recipes((event) => {
    event.remove("cataclysm:the_incinerator");
    event.remove("cataclysm:ignitium_upgrade_smithing_template");
    event.remove("cataclysm:meat_shredder");

    event.shaped("cataclysm:the_incinerator", [" BI", "BCB", "NB "], {
        B: "minecraft:blaze_rod",
        I: "cataclysm:ignitium_ingot",
        C: "kubejs:celestial_fusion_ingot",
        N: Item.of("minecraft:netherite_sword"),
    });

    event.shaped("cataclysm:meat_shredder", [" RI", "CWR", "WC "], {
        R: "minecraft:redstone",
        I: "minecraft:iron_block",
        C: "kubejs:celestial_fusion_ingot",
        W: "cataclysm:witherite_ingot",
    });

    event.shaped(
        "cataclysm:ignitium_upgrade_smithing_template",
        ["NHN", "BSB", "NBN"],
        {
            N: "minecraft:nether_bricks",
            H: "cataclysm:monstrous_horn",
            B: "minecraft:blaze_powder",
            S: "minecraft:netherite_upgrade_smithing_template",
        }
    );
});
