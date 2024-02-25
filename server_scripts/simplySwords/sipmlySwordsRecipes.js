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

    event.shaped("simplyswords:watching_warglaive", ["   ", "YVY", "RCR"], {
        R: "deeperdarker:reinforced_echo_shard",
        V: "cataclysm:void_core",
        Y: "minecraft:ender_eye",
        C: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:emberblade", [" HB", "OBH", "RO "], {
        B: "thermal:basalz_rod",
        O: "kubejs:obsidian_block_signalum",
        R: "#forge:rods/blaze",
        H: "#blue_skies:ingots/horizonite",
    });

    event.shaped("simplyswords:hearthflame", ["NON", "OHO", " R "], {
        H: "cataclysm:monstrous_horn",
        O: "kubejs:obsidian_block_signalum",
        N: "#forge:ingots/netherite",
        R: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:soulkeeper", ["OEO", "ESE", " R "], {
        E: "#forge:alloys/elite",
        R: "#forge:rods/netherite",
        S: "kubejs:ender_soul",
        O: "kubejs:obsidian_block_enderium",
    });

    event.shaped("simplyswords:twisted_blade", [" DI", "EID", "RE "], {
        E: "deeperdarker:reinforced_echo_shard",
        R: "#forge:rods/netherite",
        D: "#forge:gems/diamond",
        I: "#forge:ingots/iron",
    });

    event.shaped("simplyswords:soulstealer", ["   ", "SE ", "RS "], {
        E: "#forge:ingots/enderium",
        S: "aquamirae:ship_graveyard_echo",
        R: "#forge:rods/enderium",
    });

    event.shaped("simplyswords:soulrender", ["OES", "OT ", "R  "], {
        E: "#forge:ingots/enderium",
        S: "kubejs:ender_soul",
        R: "#forge:rods/enderium",
        O: "#forge:ingots/refined_obsidian",
        T: "#forge:rods/steel",
    });

    event.shaped("simplyswords:soulpyre", ["SOS", "LEL", " R "], {
        E: "#forge:rods/enderium",
        S: "aquamirae:ship_graveyard_echo",
        L: "#forge:ingots/refined_glowstone",
        O: "kubejs:obsidian_block_enderium",
        R: "#forge:rods/steel",
    });
});
