/**
 * @param {string} base
 * @param {string} result
 * @return {object}
 */
function ignitumTempl(base, result) {
    return {
        type: "minecraft:smithing_transform",
        template: { item: "cataclysm:ignitium_upgrade_smithing_template" },
        base: {
            item: base,
        },
        addition: {
            item: "cataclysm:ignitium_ingot",
        },
        result: {
            item: result,
        },
    };
}

ServerEvents.recipes((event) => {
    event.remove("cataclysm:the_incinerator");
    event.remove("cataclysm:ignitium_upgrade_smithing_template");
    event.remove("cataclysm:meat_shredder");
    event.remove("cataclysm:wither_assault_shoulder_weapon");
    event.remove("cataclysm:laser_gatling");
    event.remove("cataclysm:smithing/ignitium_helmet");
    event.remove("cataclysm:smithing/ignitium_chestplate");
    event.remove("cataclysm:smithing/ignitium_leggings");
    event.remove("cataclysm:smithing/ignitium_boots");

    event.shaped("cataclysm:the_incinerator", [" BI", "BCB", "NB "], {
        B: "minecraft:blaze_rod",
        I: "cataclysm:ignitium_ingot",
        C: "kubejs:celestial_fusion_ingot",
        N: Item.of("minecraft:netherite_sword"),
    });

    event.shaped("cataclysm:meat_shredder", [" RI", " WR", "C  "], {
        R: "minecraft:redstone",
        I: "minecraft:iron_block",
        C: "kubejs:celestial_rod",
        W: "kubejs:witherite_gear",
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

    event.shaped(
        "cataclysm:wither_assault_shoulder_weapon",
        ["AG ", "WRG", " GC"],
        {
            W: "kubejs:witherite_gear",
            A: "#forge:alloys/ultimate",
            G: "#forge:gunpowder",
            R: "#forge:storage_blocks/redstone",
            C: "kubejs:celestial_rod",
        }
    );

    event.shaped("cataclysm:laser_gatling", ["WP ", "PRC", " CI"], {
        W: "kubejs:witherite_gear",
        P: "#forge:dusts/redstone",
        R: "#forge:storage_blocks/redstone",
        C: "kubejs:celestial_rod",
        I: "#forge:ingots/iron",
    });

    event.shaped("cataclysm:void_core", ["SES", "GNG", " C "], {
        C: "kubejs:celestial_fusion_ingot",
        S: "aquamirae:ship_graveyard_echo",
        G: "#forge:ingots/gold",
        N: "kubejs:ender_soul",
        E: "#forge:ingots/enderium",
    });

    event.custom({
        type: "minecraft:smithing_transform",
        template: { item: "cataclysm:ignitium_upgrade_smithing_template" },
        base: {
            item: "blue_skies:crushing_hammer",
        },
        addition: {
            item: "kubejs:celestial_fusion_ingot",
        },
        result: {
            item: "cataclysm:infernal_forge",
        },
    });

    event.custom(
        ignitumTempl("deeperdarker:warden_helmet", "cataclysm:ignitium_helmet")
    );
    event.custom(
        ignitumTempl(
            "deeperdarker:warden_chestplate",
            "cataclysm:ignitium_chestplate"
        )
    );
    event.custom(
        ignitumTempl(
            "deeperdarker:warden_leggings",
            "cataclysm:ignitium_leggings"
        )
    );
    event.custom(
        ignitumTempl("deeperdarker:warden_boots", "cataclysm:ignitium_boots")
    );
});
