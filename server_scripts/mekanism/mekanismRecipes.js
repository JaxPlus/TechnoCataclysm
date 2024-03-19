// priority: 0

/**
 * @param {string} armor
 * @return {object}
 */
function mekaRecipes(armor) {
    return {
        N: armor,
        H: "mekanism:hdpe_sheet",
        C: "#forge:circuits/meka",
        P: "#forge:pellets/polonium",
        I: "mekanism:basic_induction_cell",
    };
}

ServerEvents.recipes((event) => {
    // Recipes in machines
    event.remove("mekanism:processing/netherite/scrap_to_dust");
    event.remove("mekanism:processing/refined_glowstone/ingot/from_dust");
    event.remove("mekanism:enriching/conversion/obsidian_to_obsidian_dust");

    // Common items
    event.remove("mekanism:metallurgic_infuser");
    event.remove("mekanism:atomic_disassembler");
    event.remove("mekanism:jetpack");
    event.remove("mekanism:mekasuit_helmet");
    event.remove("mekanism:mekasuit_bodyarmor");
    event.remove("mekanism:mekasuit_pants");
    event.remove("mekanism:mekasuit_boots");
    event.remove("mekanism:meka_tool");
    event.remove("mekaweapons:mekatana");
    event.remove("mekaweapons:mekabow");
    event.remove("mekanism:modification_station");
    event.remove("mekanism:digital_miner");

    // zamień żelazo z innym mid game ingotem
    event.shaped("mekanism:metallurgic_infuser", ["SFS", "ROR", "SFS"], {
        S: "thermal:signalum_ingot",
        F: "blue_skies:horizonite_forge",
        R: "minecraft:redstone",
        O: "mekanism:ingot_osmium",
    });

    event.shaped("mekanism:atomic_disassembler", ["ITM", "IAE", " O "], {
        I: "mekanism:alloy_infused",
        M: "#forge:circuits/meka",
        O: "mekanism:ingot_refined_obsidian",
        E: "#forge:ingots/enderium",
        A: "#forge:alloys/ultimate",
        T: "mekanism:energy_tablet",
    });

    event.shaped("mekanism:jetpack", ["SBS", "OCO", " T "], {
        S: "#forge:ingots/steel",
        O: "mekanism:ingot_refined_obsidian",
        C: "mekanism:basic_chemical_tank",
        B: "#forge:circuits/basic",
        T: "#forge:ingots/tin",
    });

    event.shaped(
        "mekanism:mekasuit_helmet",
        ["HCH", "HNH", "PIP"],
        mekaRecipes("cataclysm:ignitium_helmet")
    );
    event.shaped(
        "mekanism:mekasuit_bodyarmor",
        ["HCH", "HNH", "PIP"],
        mekaRecipes("cataclysm:ignitium_chestplate")
    );
    event.shaped(
        "mekanism:mekasuit_pants",
        ["HCH", "HNH", "PIP"],
        mekaRecipes("cataclysm:ignitium_leggings")
    );
    event.shaped(
        "mekanism:mekasuit_boots",
        ["HCH", "HNH", "PIP"],
        mekaRecipes("cataclysm:ignitium_boots")
    );

    event.shaped("mekanism:meka_tool", ["CFC", "HAH", "PIP"], {
        H: "mekanism:hdpe_sheet",
        C: "#forge:circuits/meka",
        P: "#forge:pellets/polonium",
        I: "mekanism:basic_induction_cell",
        F: "mekanism:configurator",
        A: "mekanism:atomic_disassembler",
    });

    event.shaped("mekaweapons:mekatana", ["CBC", "HSH", "PIP"], {
        H: "mekanism:hdpe_sheet",
        C: "#forge:circuits/meka",
        P: "#forge:pellets/polonium",
        I: "mekanism:basic_induction_cell",
        B: "mekaweapons:katana_blade",
        S: "#forge:ingots/steel",
    });

    event.shaped("mekaweapons:mekabow", ["PBP", "CIC", "RFR"], {
        C: "#forge:circuits/meka",
        P: "#forge:pellets/polonium",
        I: "mekanism:basic_induction_cell",
        B: "mekaweapons:bow_riser",
        R: "#forge:ingots/refined_obsidian",
        F: "mekaweapons:bow_limb",
    });

    event.shaped("mekanism:modification_station", ["HEH", "CSC", "HPH"], {
        H: "mekanism:hdpe_sheet",
        C: "#forge:circuits/meka",
        P: "#forge:pellets/polonium",
        E: "#forge:chests/wooden",
        S: "mekanism:steel_casing",
    });

    event.shaped("mekanism:digital_miner", ["CAC", "SRS", "TET"], {
        A: "#mekanism:alloys/atomic",
        C: "#forge:circuits/meka",
        S: "mekanism:logistical_sorter",
        R: "mekanism:robit",
        E: "mekanism:steel_casing",
        T: "mekanism:teleportation_core",
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
        type: "mekanism:compressing",
        chemicalInput: {
            amount: 3,
            gas: "mekanism:osmium",
        },
        itemInput: {
            ingredient: {
                item: "kubejs:diamond_core",
            },
        },
        output: {
            item: "kubejs:infused_diamond_core",
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

    event.custom({
        type: "mekanism:combining",
        extraInput: {
            ingredient: {
                item: "kubejs:celestial_fusion_ingot",
            },
        },
        mainInput: {
            amount: 2,
            ingredient: {
                item: "minecraft:blaze_rod",
            },
        },
        output: {
            item: "kubejs:celestial_rod",
        },
    });

    event.custom({
        type: "mekanism:combining",
        extraInput: {
            ingredient: {
                item: "minecraft:netherite_ingot",
            },
        },
        mainInput: {
            ingredient: {
                item: "kubejs:celestial_rod",
            },
        },
        output: {
            item: "kubejs:netherite_rod",
        },
    });

    event.custom({
        type: "mekanism:crushing",
        input: {
            ingredient: {
                item: "fluxnetworks:flux_core",
            },
        },
        output: {
            item: "minecraft:ender_eye",
        },
    });

    event.custom({
        type: "mekanism:injecting",
        chemicalInput: {
            amount: 5,
            gas: "mekanism:sulfuric_acid",
        },
        itemInput: {
            ingredient: {
                tag: "forge:circuits/ultimate",
            },
        },
        output: {
            item: "kubejs:meka_control_circuit",
        },
    });
});
