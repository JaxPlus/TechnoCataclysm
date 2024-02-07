ServerEvents.recipes((event) => {
    event.remove("deeperdarker:warden_upgrade_smithing_template");
    event.remove("deeperdarker:reinforced_echo_shard");

    event.shaped("deeperdarker:reinforced_echo_shard", ["PWA", "WEW", "AWP"], {
        A: "aquamirae:abyssal_amethyst",
        P: "minecraft:phantom_membrane",
        W: "deeperdarker:warden_carapace",
        E: "minecraft:echo_shard",
    });
    event.shaped(
        "deeperdarker:warden_upgrade_smithing_template",
        ["DSD", "ECE", "DFD"],
        {
            D: "#forge:gems/diamond",
            S: "deeperdarker:warden_upgrade_smithing_template",
            E: "thermal:enderium_ingot",
            C: "minecraft:sculk",
            F: "kubejs:celestial_fusion_ingot",
        }
    );
});
