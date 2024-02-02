ServerEvents.recipes((event) => {
    event.remove("aquamirae:abyssal_amethyst");

    event.shaped("aquamirae:abyssal_amethyst", [" E ", "EAE", "OE "], {
        E: "aquamirae:ship_graveyard_echo",
        A: "minecraft:amethyst_shard",
        O: "mekanism:ingot_refined_obsidian",
    });
});
