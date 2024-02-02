// priority: 1

const diamondArmorPices = {
    D: "minecraft:diamond",
    C: "blue_skies:charoite",
};

/**
 * @param { string[] } ingot Ingots/dusts in crafting
 */
function fusedObsidians(ingot) {
    return {
        L: "thermal:lightning_charge",
        I: Ingredient.of(ingot),
        O: "#forge:obsidian",
        E: "thermal:earth_charge",
    };
}

const fusedObsidiansTempl = [" L ", "IOI", " E "];

ServerEvents.entityLootTables((event) => {
    event.modifyEntity("blue_skies:summoner", (table) => {
        table.addPool((pool) => {
            pool.addItem("minecraft:acacia_button").count(5);
        });
    });

    event.modifyEntity("cataclysm:netherite_monstrosity", (table) => {
        table.pools.remove({
            name: "hammer",
            rolls: 1,
            entries: [
                { type: "minecraft:item", name: "cataclysm:infernal_forge" },
            ],
        });
    });
});

ServerEvents.recipes((event) => {
    event.remove("minecraft:netherite_ingot");
    event.remove("minecraft:enchanting_table");
    event.remove("minecraft:diamond_helmet");
    event.remove("minecraft:diamond_chestplate");
    event.remove("minecraft:diamond_leggings");
    event.remove("minecraft:diamond_boots");
    event.remove("minecraft:netherite_upgrade_smithing_template");
    event.remove("minecraft:anvil");

    // żeby zrobić Runic Tablet wykorzystać Celestial Fusion Ingot
    // i usuń z loottable

    // Custom Items
    event.shaped(
        "kubejs:obsidian_block_signalum",
        fusedObsidiansTempl,
        fusedObsidians(["thermal:signalum_ingot", "thermal:signalum_dust"])
    );
    event.shaped(
        "kubejs:obsidian_block_enderium",
        fusedObsidiansTempl,
        fusedObsidians(["thermal:enderium_ingot", "thermal:enderium_dust"])
    );

    // Common Items
    event.shaped("minecraft:enchanting_table", [" B ", "CSC", "ESE"], {
        B: "minecraft:book",
        C: "blue_skies:charoite",
        S: "kubejs:obsidian_block_signalum",
        E: "kubejs:obsidian_block_enderium",
    });
    /** @todo ZMIEŃ NA COŚ Z CELESTIAL FUSION INGOT */
    event.shaped(
        "minecraft:netherite_upgrade_smithing_template",
        ["DSD", "CNC", "DCD"],
        {
            D: "minecraft:diamond",
            S: "minecraft:netherite_upgrade_smithing_template",
            C: "cataclysm:amethyst_crab_shell",
            N: "minecraft:netherrack",
        }
    );
    event.shaped("minecraft:anvil", ["OIO", " F ", "RFR"], {
        O: "mekanism:block_osmium",
        I: "minecraft:iron_block",
        F: "#forge:ingots/iron",
        R: "mekanism:ingot_refined_obsidian",
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

    // Armors
    event.shaped(
        "minecraft:diamond_helmet",
        ["   ", "DCD", "D D"],
        diamondArmorPices
    );
    event.shaped(
        "minecraft:diamond_chestplate",
        ["D D", "DCD", "DDD"],
        diamondArmorPices
    );
    event.shaped(
        "minecraft:diamond_leggings",
        ["DCD", "D D", "D D"],
        diamondArmorPices
    );
    event.shaped(
        "minecraft:diamond_boots",
        ["   ", "C C", "D D"],
        diamondArmorPices
    );
});
