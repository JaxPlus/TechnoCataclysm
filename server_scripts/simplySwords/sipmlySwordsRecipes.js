ServerEvents.recipes((event) => {
    event.remove("simplyswords:harbinger");
    event.remove("simplyswords:sunfire");

    event.shaped("simplyswords:runic_tablet", ["RIR", "CPC", "RAR"], {
        C: "kubejs:celestial_fusion_ingot",
        P: "minecraft:paper",
        R: "deeperdarker:reinforced_echo_shard",
        I: Ingredient.of("minecraft:iron_sword"),
        A: Ingredient.of("blue_skies:aquite_sword"),
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

    event.shaped("simplyswords:frostfall", ["ICI", "ODO", " R "], {
        I: "minecraft:blue_ice",
        O: "#forge:ingots/refined_obsidian",
        D: "#forge:gems/diamond",
        C: "thermal:ice_charge",
        R: "#forge:rods/nickel",
    });

    event.shaped("simplyswords:molten_edge", ["BOB", "PRP", " R "], {
        B: "thermal:basalz_powder",
        O: "kubejs:obsidian_block_signalum",
        R: "#forge:rods/enderium",
        P: "minecraft:blaze_powder",
    });

    event.shaped("simplyswords:icewhisper", [" RB", "DNR", "N  "], {
        R: "#forge:alloys/elite",
        B: "thermal:blizz_rod",
        N: "#forge:rods/netherite",
        D: "#forge:gems/diamond",
    });

    event.shaped("simplyswords:thunderbrand", [" AL", "ARO", "R  "], {
        R: "#forge:rods/netherite",
        A: "#forge:alloys/ultimate",
        L: "thermal:lightning_charge",
        O: "kubejs:obsidian_block_enderium",
    });

    event.shaped("simplyswords:mjolnir", ["CSC", "SLS", " R "], {
        R: "#forge:rods/enderium",
        C: "kubejs:celestial_fusion_ingot",
        S: "#forge:ingots/steel",
        L: "thermal:lightning_charge",
    });

    event.shaped("simplyswords:livyatan", ["MBM", "ARA", " R "], {
        R: "#forge:rods/netherite",
        A: "#forge:alloys/elite",
        B: "thermal:blizz_rod",
        M: "#blue_skies:gems/moonstone",
    });

    event.shaped("simplyswords:arcanethyst", [" AP", "SCA", "C S"], {
        A: "#forge:alloys/ultimate",
        P: "minecraft:phantom_membrane",
        S: "minecraft:shulker_shell",
        C: "#forge:rods/celestial",
    });

    event.shaped("simplyswords:slumbering_lichblade", ["  N", "BS ", "RB "], {
        N: "#forge:ingots/netherite",
        B: "minecraft:bone",
        S: "minecraft:skeleton_skull",
        R: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:shadowsting", [" PC", "GEP", "RG "], {
        G: "minecraft:gold_ingot",
        P: "minecraft:ender_pearl",
        C: "kubejs:celestial_fusion_ingot",
        R: "#forge:rods/netherite",
        E: "thermal:enderium_ingot",
    });

    event.shaped("simplyswords:dormant_relic", [" CL", "ELC", "RE "], {
        C: "thermal:lightning_charge",
        L: "mekanism:ingot_refined_glowstone",
        E: "#forge:ingots/enderium",
        R: "#forge:rods/enderium",
    });

    event.shaped("simplyswords:whisperwind", ["L L", "RIN", " L "], {
        L: "thermal:lightning_charge",
        R: "#forge:rods/netherite",
        I: "cataclysm:ignitium_ingot",
        N: "#forge:nether_stars",
    });

    event.shaped("simplyswords:emberlash", [" E ", "IN ", "R  "], {
        E: "minecraft:enchanted_golden_apple",
        I: "cataclysm:ignitium_ingot",
        N: "#forge:ingots/netherite",
        R: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:sunfire", ["EIE", "RGR", "EBE"], {
        E: "minecraft:enchanted_golden_apple",
        I: "cataclysm:ignitium_ingot",
        B: "apotheosis:infused_breath",
        G: "simplyswords:righteous_relic",
        R: "simplyswords:runic_tablet",
    });

    event.shaped("simplyswords:harbinger", ["EIE", "RTR", "ESE"], {
        E: "minecraft:ender_eye",
        I: "cataclysm:ignitium_ingot",
        T: "simplyswords:tainted_relic",
        R: "simplyswords:runic_tablet",
        S: "apotheosis:soul_touched_sculkshelf",
    });

    event.shaped("simplyswords:waxweaver", ["HNI", "LIN", "RLH"], {
        I: "cataclysm:ignitium_ingot",
        N: "#forge:nether_stars",
        L: "#forge:ingots/refined_glowstone",
        R: "#forge:rods/netherite",
        H: "minecraft:honeycomb",
    });

    event.shaped("simplyswords:hiveheart", ["IHI", "LNL", " R "], {
        I: "cataclysm:ignitium_ingot",
        H: "minecraft:honeycomb_block",
        N: "#forge:nether_stars",
        R: "#forge:rods/netherite",
        L: "#forge:ingots/refined_glowstone",
    });

    event.shaped("simplyswords:stars_edge", [" EG", "LRE", "NL "], {
        E: "#forge:ingots/enderium",
        G: "#forge:ingots/refined_glowstone",
        L: "#forge:ingots/lumium",
        R: "#forge:rods/netherite",
        N: "#forge:nether_stars",
    });

    event.shaped("simplyswords:wickpiercer", ["INI", "EHE", " R "], {
        I: "cataclysm:ignitium_ingot",
        N: "#forge:nether_stars",
        E: "minecraft:enchanted_golden_apple",
        H: "minecraft:honeycomb_block",
        R: "#forge:rods/netherite",
    });

    event.shaped("simplyswords:tempest", ["FCV", "G O", "SBL"], {
        F: "#blue_skies:nuggets/falsite",
        C: "kubejs:celestial_fusion_ingot",
        V: "#blue_skies:nuggets/ventium",
        O: "#forge:ingots/refined_obsidian",
        G: "#forge:ingots/refined_glowstone",
        S: "#forge:nuggets/signalum",
        L: "#forge:nuggets/lumium",
        B: "#forge:rods/blaze",
    });

    event.shaped("simplyswords:flamewind", [" BB", " RO", "S L"], {
        B: "thermal:basalz_rod",
        O: "kubejs:obsidian_block_signalum",
        R: "#forge:rods/blaze",
        S: "blue_skies:starlit_stick",
        L: "#forge:ingots/lumium",
    });

    event.shaped("simplyswords:ribboncleaver", ["BRO", "IOC", "EIK"], {
        B: "minecraft:beef",
        I: "cataclysm:ignitium_ingot",
        C: "minecraft:chicken",
        O: "mekanism:block_osmium",
        R: "minecraft:rabbit",
        E: "#forge:rods/celestial",
        K: "minecraft:mutton",
    });
});
