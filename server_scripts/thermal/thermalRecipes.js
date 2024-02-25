// priority: 0

ServerEvents.recipes((event) => {
    // Recipes in machines
    event.remove("thermal:machines/smelter/smelter_alloy_netherite");
    event.remove("thermal:machines/smelter/smelter_alloy_enderium");
    event.remove("thermal:machines/smelter/smelter_alloy_steel");

    // Ingots wt fire_charge
    event.remove("thermal:fire_charge/enderium_ingot_2");
    event.remove("thermal:fire_charge/lumium_ingot_4");
    event.remove("thermal:fire_charge/signalum_ingot_4");

    // Common items
    event.remove("thermal:machine_frame");

    // Dusts
    event.remove("thermal:enderium_dust_2");
    event.remove("thermal:lumium_dust_4");

    event.shaped("thermal:machine_frame", ["IGA", "GTG", "AGI"], {
        I: "#forge:ingots/iron",
        A: "blue_skies:aquite",
        G: "#forge:glass",
        T: "thermal:tin_gear",
    });

    event.shaped("kubejs:witherite_gear", [" W ", "WIW", " W "], {
        W: "cataclysm:witherite_ingot",
        I: "#forge:nuggets/iron",
    });

    // Press
    event.recipes.thermal.press(
        ["kubejs:witherite_gear"],
        [Item.of("cataclysm:witherite_ingot", 2), "thermal:press_gear_die"],
        0,
        5000
    );

    // Smelter
    event.recipes.thermal.smelter(
        [
            {
                item: "minecraft:netherite_ingot",
            },
        ],
        [
            Ingredient.of("minecraft:netherite_scrap", 3),
            Ingredient.of(["#forge:ingots/gold", "#forge:dusts/gold"], 3),
            "#forge:ingots/enderium",
        ],
        0,
        1000
    );

    event.recipes.thermal.smelter(
        [OutputItem.of("thermal:enderium_ingot", 2)],
        [
            Ingredient.of(["#forge:gems/diamond", "#forge:dusts/diamond"], 2),
            Ingredient.of(
                ["#forge:ender_pearls", "#forge:dusts/ender_pearl"],
                2
            ),
            "blue_skies:falsite_ingot",
        ],
        0,
        1500
    );

    event.recipes.thermal.smelter(
        [OutputItem.of("kubejs:celestial_fusion_ingot")],
        [
            Ingredient.of("blue_skies:horizonite_ingot"),
            Ingredient.of("blue_skies:falsite_ingot"),
            Ingredient.of("blue_skies:ventium_ingot"),
        ],
        0,
        2000
    );

    event.recipes.thermal.smelter(
        [OutputItem.of("kubejs:obsidian_block_signalum", 2)],
        [
            Ingredient.of(
                ["thermal:signalum_ingot", "thermal:signalum_dust"],
                2
            ),
            Ingredient.of("#forge:obsidian"),
            Ingredient.of("thermal:lightning_charge"),
        ],
        5,
        1300
    );

    event.recipes.thermal.smelter(
        [OutputItem.of("kubejs:obsidian_block_enderium", 2)],
        [
            Ingredient.of(
                ["thermal:enderium_ingot", "thermal:enderium_dust"],
                2
            ),
            Ingredient.of("#forge:obsidian"),
            Ingredient.of("thermal:lightning_charge"),
        ],
        5,
        1300
    );
});
