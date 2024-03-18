// priority: 1

const diamondArmorPices = {
    D: "minecraft:diamond",
    C: "blue_skies:charoite",
};

/**
 * @param { string[] } ingot
 */
function fusedObsidians(ingot) {
    return {
        L: "thermal:lightning_charge",
        I: Ingredient.of(ingot),
        O: "#forge:obsidian",
        E: "thermal:earth_charge",
    };
}

/**
 * @param { Special.EntityType } entity
 * @param { number } newHealth
 */
function regenerateFromHalfHealth(entity, newHealth) {
    let firstTimeSpawned = true;
    let lastEntity = "";
    EntityEvents.hurt(entity, (event) => {
        const entity = event.getEntity();
        const halfHealth = Math.round(entity.getMaxHealth() / 2);

        if (
            (firstTimeSpawned || lastEntity !== entity.getUuid()) &&
            Math.round(entity.getNbt().getFloat("Health")) <= halfHealth
        ) {
            Utils.server.runCommand(
                `attribute ${entity.getUuid()} minecraft:generic.max_health base set ${newHealth}`
            );

            entity.setHealth(entity.getMaxHealth());

            firstTimeSpawned = false;
            lastEntity = entity.getUuid();
        }
    });
}

const fusedObsidiansTempl = [" L ", "IOI", " E "];

ServerEvents.entityLootTables((event) => {
    event.modifyEntity("cataclysm:netherite_monstrosity", (table) => {
        table.pools.remove({
            name: "hammer",
            rolls: 1,
            entries: [
                { type: "minecraft:item", name: "cataclysm:infernal_forge" },
            ],
        });
    });

    event.modifyEntity("cataclysm:ender_golem", (table) => {
        table.clearPools();

        table.addPool((pool) => {
            pool.addItem("kubejs:ender_soul").count({ min: 3, max: 5 });
        });
    });

    event.modifyEntity("blue_skies:arachnarch", (table) => {
        table.addPool((pool) => {
            pool.addItem("kubejs:arachnarch_fang").count({ min: 1, max: 2 });
        });

        table.addPool((pool) => {
            pool.addItem("kubejs:arachnarch_eye");
        });
    });

    event.modifyEntity("blue_skies:alchemist", (table) => {
        table.addPool((pool) => {
            pool.addItem("kubejs:smoldering_piece_of_paper").count({
                min: 1,
                max: 1,
            });
        });
    });

    event.modifyEntity("blue_skies:starlit_crusher", (table) => {
        table.addPool((pool) => {
            pool.addItem("kubejs:starlit_bark");
        });
    });

    event.modifyEntity("blue_skies:summoner", (table) => {
        table.addPool((pool) => {
            pool.addItem("kubejs:summoners_grimoire");
        });
    });
});

LootJS.modifiers((event) => {
    event.enableLogging();

    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("simplyswords:runic_tablet");

    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("#simplyswords:uniques");

    event
        .addLootTypeModifier(LootType.CHEST)
        .removeLoot("#forge:ingots/netherite");

    event
        .addEntityLootModifier("minecraft:wither")
        .removeLoot("#simplyswords:uniques");

    event
        .addEntityLootModifier("minecraft:ender_dragon")
        .removeLoot("#simplyswords:uniques");

    event
        .addLootTableModifier(LootType.CHEST)
        .removeLoot("#forge:tools/netherite");

    event
        .addLootTableModifier(LootType.CHEST)
        .removeLoot("#forge:armor/netherite");
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

    /** @todo ZMIEŃ RECIPE RUNE TABLETA NA COŚ INNEGO */

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
    event.shaped("kubejs:shattered_celestial_blade", [" SP", "COS", "DC "], {
        S: "#forge:ingots/signalum",
        P: "#blue_skies:gems/pyrope",
        C: "kubejs:celestial_fusion_ingot",
        O: "kubejs:blue_skies_soul",
        D: "#forge:gems/diamond",
    });
    event.shaped("kubejs:blue_skies_soul", ["CEC", "PSG", "CBC"], {
        C: "kubejs:celestial_fusion_ingot",
        P: "kubejs:smoldering_piece_of_paper",
        E: "kubejs:arachnarch_eye",
        S: "blue_skies:soul_fragment",
        G: "kubejs:summoners_grimoire",
        B: "kubejs:starlit_bark",
    });

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

    // Armors
    /** @todo ZMIEŃ JAK SIĘ ROBI TEN ARMOR */
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
