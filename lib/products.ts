export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  image: string;
  /** Per-variant or per-size images — key matches variant/size string exactly */
  variantImages?: Record<string, string>;
  sizes?: string[];
  variants?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "2",
    name: "Marble & Acacia Cheese Board Set",
    price: 1299,
    shortDescription: "Carrara marble slab with acacia board and 4 tools.",
    description:
      "A statement entertaining piece that pairs a cool Carrara marble slab with a warm acacia wood board and four professional-grade stainless steel cheese tools — a cleaver, a fork, a knife, and a spreader — all nesting neatly in a built-in slide-out drawer. The contrast of stone and timber is as visually striking as it is practical. Marble stays naturally cool, making it ideal for preserving cheese and chocolate. Wipe clean and ready for every gathering, from casual Friday evening wine to a formal dinner party spread.",
    category: "Kitchen",
    image: "/images/products/cheese-board-set.jpg",
    variants: ["Marble & Acacia", "Slate & Bamboo"],
    variantImages: {
      "Marble & Acacia": "/images/products/cheese-board-marble-acacia.jpg",
      "Slate & Bamboo":  "/images/products/cheese-board-slate-bamboo.jpg",
    },
    featured: true,
  },
  {
    id: "3",
    name: "Chunky Knit Throw Blanket",
    price: 1499,
    shortDescription: "Arm-knitted natural cotton in six muted tones.",
    description:
      "Hand-knitted in an oversized arm-knit technique from 100% natural cotton roving, this blanket achieves extraordinary volume and warmth without the weight. The open-loop weave is tactile and inviting — equally beautiful draped over a sofa, layered at the foot of a bed, or wrapped around you on a cold Highveld evening. Available in six considered, muted tones designed to complement any interior palette. Each blanket is made to order, meaning slight variations in texture are part of the charm. Dimensions approximately 130×180 cm.",
    category: "Textiles",
    image: "/images/products/chunky-knit-blanket.jpg",
    variants: ["Oat", "Ivory", "Charcoal", "Sage", "Dusty Rose", "Stone"],
    variantImages: {
      "Oat":        "/images/products/knit-blanket-oat.jpg",
      "Ivory":      "/images/products/knit-blanket-ivory.jpg",
      "Charcoal":   "/images/products/knit-blanket-charcoal.jpg",
      "Sage":       "/images/products/knit-blanket-sage.jpg",
      "Dusty Rose": "/images/products/knit-blanket-dusty-rose.jpg",
      "Stone":      "/images/products/knit-blanket-stone.jpg",
    },
    featured: true,
  },
  {
    id: "6",
    name: "Stonewashed Linen Pillowcase Set",
    price: 1049,
    shortDescription: "Pair of French flax linen pillowcases, pre-washed soft.",
    description:
      "A pair of European flax linen pillowcases, stonewashed for a relaxed, lived-in softness from the very first night. The envelope closure keeps your pillow neatly tucked without a visible zip. Unlike cotton, linen is naturally temperature-regulating — cool in summer, insulating in winter — and becomes softer and more beautiful with every wash. Made from 100% French-grown flax with an OEKO-TEX certification, these pillowcases are a small but lasting investment in how you sleep. Available in four understated colourways.",
    category: "Textiles",
    image: "/images/products/linen-pillowcase-set.jpg",
    variants: ["Oatmeal", "Dusty Blue", "Warm White", "Terracotta"],
    variantImages: {
      "Oatmeal":    "/images/products/pillowcase-linen-oatmeal.jpg",
      "Dusty Blue": "/images/products/pillowcase-linen-dusty-blue.jpg",
      "Warm White": "/images/products/pillowcase-linen-warm-white.jpg",
      "Terracotta": "/images/products/pillowcase-linen-terracotta.jpg",
    },
    sizes: ["Standard (48×74 cm)", "King (48×90 cm)"],
  },
  {
    id: "7",
    name: "Acacia Wood Serving Tray",
    price: 1199,
    shortDescription: "Solid acacia with cut-out handles. Each piece unique.",
    description:
      "Cut from a single plank of solid acacia wood with a rich, swirling grain that makes every tray one of a kind. The integrated cut-out handles allow it to move effortlessly between kitchen, dining table, and bedroom. Use it as a breakfast tray, a bar service tray, a bedside organiser, or a decorative surface on a coffee table. The natural oils in acacia wood make it inherently resistant to moisture and cracking. Oil occasionally with food-grade mineral oil to preserve the lustre and deepen the grain over time.",
    category: "Kitchen",
    image: "/images/products/acacia-wood-tray.jpg",
    sizes: ["Medium (40×30 cm)", "Large (50×35 cm)"],
  },
  {
    id: "16",
    name: "Electric Ultrasonic Aroma Diffuser",
    price: 1149,
    shortDescription: "300ml ultrasonic diffuser with 7-colour ambient light.",
    description:
      "A whisper-quiet ultrasonic diffuser with a 300ml water reservoir and a run time of up to 8 hours on the low mist setting. The wood-grain ceramic finish looks entirely at home on a bedside table or home office desk. Seven ambient light modes — including a candle-flicker setting — give you full control over the atmosphere of your space. Compatible with any essential oil, this diffuser replaces synthetic air fresheners with a cleaner, more personal approach to fragrance. Automatic shut-off when the water runs out.",
    category: "Home Fragrance",
    image: "/images/products/aroma-diffuser.jpg",
    variants: ["White Oak", "Dark Walnut"],
    variantImages: {
      "White Oak":   "/images/products/aroma-diffuser-white-oak.jpg",
      "Dark Walnut": "/images/products/aroma-diffuser-dark-walnut.jpg",
    },
    featured: true,
  },
  {
    id: "18",
    name: "Macramé Plant Hanger Set",
    price: 899,
    shortDescription: "Set of 3 handknotted cotton rope hangers, varied heights.",
    description:
      "Three handknotted macramé plant hangers in natural unbleached cotton rope, each at a different length — 60cm, 80cm, and 100cm — designed to be hung at staggered heights for a full, layered display. Each hanger accommodates pots up to 18cm in diameter and is finished with a brushed brass ring for hanging. The traditional knotting technique is both structurally strong and visually textured. Particularly beautiful with trailing plants like pothos, string of pearls, or wandering jew. Suitable for indoor use.",
    category: "Decor",
    image: "/images/products/macrame-plant-hanger.jpg",
  },
  {
    id: "21",
    name: "Aged Brass Wall Hook Trio",
    price: 1099,
    shortDescription: "Set of 3 solid brass hooks with a warm aged patina finish.",
    description:
      "A set of three wall hooks cast in solid brass with a warm aged patina finish, designed to be as sculptural as they are practical. Each hook is generously curved to hold heavy coats, bags, or towels without sagging over time, and the graduated widths create a considered composition when arranged at staggered heights. Mounting hardware is concealed behind the hook plate for a clean finish, and each piece is supplied with a matching satin-finish screw. Ideal for an entrance hall, a powder room, or beside a bedroom wardrobe. The brass will gently deepen in tone over the years, which is part of the charm.",
    category: "Decor",
    image: "/images/products/brass-wall-hooks.jpg",
    variants: ["Aged Brass", "Matte Black", "Polished Nickel"],
    variantImages: {
      "Aged Brass":      "/images/products/wall-hooks-aged-brass.jpg",
      "Matte Black":     "/images/products/wall-hooks-matte-black.jpg",
      "Polished Nickel": "/images/products/wall-hooks-polished-nickel.jpg",
    },
  },
  {
    id: "24",
    name: "Jute & Cotton Floor Runner",
    price: 1399,
    shortDescription: "Handwoven natural jute & cotton runner. Reversible. Two sizes.",
    description:
      "A handwoven floor runner crafted from natural unbleached jute with soft cotton warp threads, in a traditional flatweave pattern with warm earthy variations visible across its length. Jute is one of the most sustainable fibres available — it grows quickly, requires little water, and is fully biodegradable at the end of its life. The runner is reversible, meaning its effective wear life is doubled, and both sides present equally beautifully. Ideal for a hallway, a kitchen, or laid at the foot of a bed. The natural fibres will soften noticeably in the first few weeks of use and develop a beautiful patina over time.",
    category: "Textiles",
    image: "/images/products/jute-cotton-runner.jpg",
    sizes: ["Small (60×150 cm)", "Large (80×200 cm)"],
  },
  {
    id: "25",
    name: "Bamboo Bath Caddy",
    price: 1049,
    shortDescription: "Adjustable bamboo caddy with book slot & wine glass holder.",
    description:
      "A bath caddy crafted from sustainably harvested bamboo with integrated slots designed for the small rituals of a long bath — a slanted reading rest for a book or tablet, a secured hollow for a wine glass, a candle indent, and a flat surface tray for a cup of tea. The sides extend outward and are adjustable to fit baths between 67 cm and 92 cm in width. The bamboo has been sealed with food-safe mineral oil for natural water resistance — simply wipe dry after each use to preserve the finish. A small, considered indulgence that transforms an ordinary bath into something deliberate.",
    category: "Self Care",
    image: "/images/products/bamboo-bath-caddy.jpg",
  },
  {
    id: "26",
    name: "Artisan Olive Wood Bowl Set",
    price: 1149,
    shortDescription: "Nest of 3 olive wood bowls: 14, 19 & 24 cm. Each one unique.",
    description:
      "Three nesting bowls carved from single blocks of European olive wood, chosen specifically for the rich, swirling grain that is unique to every piece. The graduated sizes — 14 cm, 19 cm, and 24 cm — cover virtually every daily need, from a dipping bowl and a salad-for-one to a generous centrepiece for a dinner party. Olive wood is naturally antibacterial and exceptionally resistant to staining and odours, making it outstanding for food use. Each bowl is finished with a food-safe mineral oil — re-oil occasionally to preserve the depth of grain. No two bowls in any set will look alike, which is part of the pleasure of owning them.",
    category: "Kitchen",
    image: "/images/products/olive-wood-bowls.jpg",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
