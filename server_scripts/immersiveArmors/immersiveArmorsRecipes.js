ServerEvents.recipes((event) => {
    event.remove("immersive_armors:prismarine_helmet");
    event.remove("immersive_armors:prismarine_chestplate");
    event.remove("immersive_armors:prismarine_leggings");
    event.remove("immersive_armors:prismarine_boots");

    event.shaped("immersive_armors:prismarine_helmet", [" C ", "SAS", "S S"], {
        S: "minecraft:prismarine_shard",
        A: "blue_skies:aquite",
        C: "minecraft:prismarine_crystals",
    });
    event.shaped(
        "immersive_armors:prismarine_chestplate",
        ["S S", "AHA", "SAS"],
        {
            S: "minecraft:prismarine_shard",
            A: "blue_skies:aquite",
            H: "minecraft:heart_of_the_sea",
        }
    );
    event.shaped(
        "immersive_armors:prismarine_leggings",
        ["SCS", "A A", "S S"],
        {
            S: "minecraft:prismarine_shard",
            A: "blue_skies:aquite",
            C: "minecraft:prismarine_crystals",
        }
    );
    event.shaped("immersive_armors:prismarine_boots", ["   ", "C C", "S S"], {
        S: "minecraft:prismarine_shard",
        C: "minecraft:prismarine_crystals",
    });
});
