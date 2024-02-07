ServerEvents.recipes((event) => {
    event.shaped("simplyswords:runic_tablet", [" S ", "CPC", "RRR"], {
        S: "kubejs:ender_soul",
        C: "kubejs:celestial_fusion_ingot",
        P: "minecraft:paper",
        R: "deeperdarker:reinforced_echo_shard",
    });

    event.shaped("simplyswords:bramblethorn", [" F ", "SBF", "BS "], {
        F: "kubejs:arachnarch_fang",
        S: "minecraft:sweet_berries",
        B: "minecraft:bamboo",
    });

    event.shaped("simplyswords:toxic_longsword", [" FA", "FA ", "M  "], {
        F: "kubejs:arachnarch_fang",
        A: "aquamirae:anglers_fang",
        M: "aquamirae:abyssal_amethyst",
    });

    event.shaped("simplyswords:stormbringer", [" EL", "ELE", "NE "], {
        L: "thermal:lightning_charge",
        E: "thermal:enderium_ingot",
        N: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:storms_edge", [" EL", "ENE", "LE "], {
        L: "thermal:lightning_charge",
        E: "thermal:enderium_ingot",
        N: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:watcher_claymore", [" RV", "EYR", "CE "], {
        R: "deeperdarker:reinforced_echo_shard",
        V: "cataclysm:void_core",
        E: "minecraft:echo_shard",
        Y: "minecraft:ender_eye",
        C: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:brimstone_claymore", [" BB", "NCB", "RN "], {
        B: "#forge:rods/blaze",
        C: "simplyswords:runic_claymore",
        N: "#forge:ingots/netherite",
        R: "#forge:rods/netherite",
    });
});
