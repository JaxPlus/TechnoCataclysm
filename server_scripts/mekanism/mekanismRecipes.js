// priority: 0

ServerEvents.recipes((event) => {
    // Recipes in machines
    event.remove("mekanism:processing/netherite/scrap_to_dust");
    event.remove("mekanism:processing/refined_glowstone/ingot/from_dust");
    event.remove("mekanism:enriching/conversion/obsidian_to_obsidian_dust");
    event.remove("mekanism:atomic_disassembler");

    // Common items
    event.remove("mekanism:metallurgic_infuser");

    // zamień żelazo z innym mid game ingotem
    event.shaped("mekanism:metallurgic_infuser", ["SFS", "ROR", "SFS"], {
        S: "thermal:signalum_ingot",
        F: "blue_skies:horizonite_forge",
        R: "minecraft:redstone",
        O: "mekanism:ingot_osmium",
    });

    event.shaped("mekanism:atomic_disassembler", ["ITE", "IAE", " O "], {
        I: "mekanism:alloy_infused",
        O: "mekanism:ingot_refined_obsidian",
        E: "deeperdarker:reinforced_echo_shard",
        A: "mekanism:alloy_atomic",
        T: "mekanism:energy_tablet",
    });

    event.custom({
        type: "mekanism:compressing",
        chemicalInput: {
            amount: 1,
            gas: "mekanism:osmium",
        },
        itemInput: {
            ingredient: {
                item: "thermal:lumium_dust",
            },
        },
        output: {
            item: "mekanism:ingot_refined_glowstone",
        },
    });

    event.custom({
        type: "mekanism:enriching",
        input: {
            ingredient: {
                item: "kubejs:obsidian_block_signalum",
            },
        },
        output: {
            count: 4,
            item: "mekanism:dust_obsidian",
        },
    });
});
