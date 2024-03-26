// priority: 0

const charoiteArmorPices = {
    C: "blue_skies:charoite",
    D: "kubejs:infused_diamond_core",
};

ServerEvents.recipes((event) => {
    event.remove("blue_skies:charoite_helmet");
    event.remove("blue_skies:charoite_chestplate");
    event.remove("blue_skies:charoite_leggings");
    event.remove("blue_skies:charoite_boots");
    event.remove("blue_skies:enchanting_table_compat");
    event.remove("blue_skies:anvil_compat");

    // Armors
    event.shaped(
        "blue_skies:charoite_helmet",
        ["   ", "CDC", "C C"],
        charoiteArmorPices
    );
    event.shaped(
        "blue_skies:charoite_chestplate",
        ["C C", "CDC", "CCC"],
        charoiteArmorPices
    );
    event.shaped(
        "blue_skies:charoite_leggings",
        ["CDC", "C C", "C C"],
        charoiteArmorPices
    );
    event.shaped(
        "blue_skies:charoite_boots",
        ["   ", "C C", "CDC"],
        charoiteArmorPices
    );
});
