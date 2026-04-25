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
    id: "1",
    name: "Luxury Soy Candle Trio",
    price: 999,
    shortDescription: "Three hand-poured soy candles in apothecary amber glass.",
    description:
      "A curated set of three hand-poured soy wax candles, each housed in a reusable amber glass apothecary jar. Crafted with a clean coconut-soy blend and a crackling wooden wick, every candle burns for up to 45 hours. Three sophisticated, evolving scents — Sandalwood & Vanilla, Jasmine & White Musk, and Cedarwood & Black Fig — make this an effortless gift or a deeply personal ritual. The amber glass protects the wax from UV degradation and can be repurposed as a storage jar long after the candle is spent.",
    category: "Home Fragrance",
    image: "/images/products/soy-candle-trio.jpg",
    variants: ["Sandalwood & Vanilla", "Jasmine & White Musk", "Cedarwood & Black Fig"],
    variantImages: {
      "Sandalwood & Vanilla": "/images/products/soy-candle-sandalwood-vanilla.jpg",
      "Jasmine & White Musk":  "/images/products/soy-candle-jasmine-musk.jpg",
      "Cedarwood & Black Fig": "/images/products/soy-candle-cedarwood-fig.jpg",
    },
    featured: true,
  },
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
      "Oat":       "/images/products/knit-blanket-oat.jpg",
      "Ivory":     "/images/products/knit-blanket-ivory.jpg",
      "Charcoal":  "/images/products/knit-blanket-charcoal.jpg",
      "Sage":      "/images/products/knit-blanket-sage.jpg",
      "Dusty Rose":"/images/products/knit-blanket-dusty-rose.jpg",
      "Stone":     "/images/products/knit-blanket-stone.jpg",
    },
    featured: true,
  },
  {
    id: "4",
    name: "Ceramic Pour-Over Coffee Set",
    price: 1149,
    shortDescription: "Dripper, server & two cups in matte reactive glaze.",
    description:
      "A complete pour-over brewing set for the home barista who appreciates considered design as much as exceptional coffee. The hand-thrown ceramic dripper sits on a turned wooden collar over a matching ceramic server, accompanied by two generous cups — each holding 220ml. Finished in a matte reactive glaze — chalk white, charcoal, or sage — that subtly shifts tone in different lights. The set is designed to slow your morning down, producing a clean, bright cup of filter coffee while looking beautiful on a kitchen shelf. Dishwasher safe.",
    category: "Kitchen",
    image: "/images/products/ceramic-pour-over.jpg",
    variants: ["Chalk White", "Charcoal", "Sage Green"],
    variantImages: {
      "Chalk White": "/images/products/pour-over-chalk-white.jpg",
      "Charcoal":    "/images/products/pour-over-charcoal.jpg",
      "Sage Green":  "/images/products/pour-over-sage-green.jpg",
    },
  },
  {
    id: "5",
    name: "Brushed Gold Tealight Set",
    price: 1049,
    shortDescription: "Set of 3 geometric holders in brushed 18k gold-plate.",
    description:
      "Three geometric tealight holders in brushed 18k gold-plated steel, each in a different height and silhouette — a low sphere, a ribbed cylinder, and a faceted diamond. Together they create a dynamic, layered tabletop composition; placed individually, each piece holds its own. Designed to catch and refract candlelight in the most flattering way, these holders complement both modern minimalist and warmly layered interiors. Suitable for standard tealight candles. The brushed finish conceals fingerprints and keeps its warmth over time.",
    category: "Decor",
    image: "/images/products/gold-tealight-set.jpg",
    variants: ["Brushed Gold", "Brushed Silver", "Matte Black"],
    variantImages: {
      "Brushed Gold":   "/images/products/tealight-brushed-gold.jpg",
      "Brushed Silver": "/images/products/tealight-brushed-silver.jpg",
      "Matte Black":    "/images/products/tealight-matte-black.jpg",
    },
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
    // Both sizes are the same product visually; no separate variant images needed
  },
  {
    id: "8",
    name: "Luxury Reed Diffuser",
    price: 899,
    shortDescription: "200ml premium fragrance oil, 8 natural rattan reeds.",
    description:
      "A long-lasting room diffuser containing 200ml of concentrated premium fragrance oil and eight natural rattan reeds, presented in a substantial frosted glass bottle with a brushed brass collar. Lasts up to 14 weeks and delivers a consistent, sophisticated scent that gently evolves through the day — no flames, no timers, no maintenance. Flip the reeds weekly to refresh the throw. Three curated fragrances, each built around a distinctive base note that anchors the whole room without overpowering it.",
    category: "Home Fragrance",
    image: "/images/products/reed-diffuser.jpg",
    variants: ["Bergamot & Vetiver", "Rose & Oud", "Eucalyptus & Sage"],
    variantImages: {
      "Bergamot & Vetiver": "/images/products/reed-diffuser-bergamot.jpg",
      "Rose & Oud":         "/images/products/reed-diffuser-rose-oud.jpg",
      "Eucalyptus & Sage":  "/images/products/reed-diffuser-eucalyptus.jpg",
    },
  },
  {
    id: "9",
    name: "Matte Ceramic Plant Pot Set",
    price: 1149,
    shortDescription: "Set of 3 graduated pots with drainage holes & saucers.",
    description:
      "Three ceramic plant pots in carefully graduated sizes — small (12cm), medium (16cm), and large (20cm) — finished in a silky matte glaze that subtly shifts tone in natural light. Each pot includes a drainage hole and a matching saucer to protect surfaces. Arrange them as a set for layered visual interest, or place them individually throughout your home. The clean, minimal silhouette works equally well with trailing plants, succulents, ferns, and architectural specimens. Frost-resistant for indoor and sheltered outdoor use.",
    category: "Ceramics",
    image: "/images/products/ceramic-plant-pots.jpg",
    variants: ["Chalk White", "Warm Stone", "Sage Green", "Terracotta"],
    variantImages: {
      "Chalk White": "/images/products/ceramic-pots-chalk-white.jpg",
      "Warm Stone":  "/images/products/ceramic-pots-warm-stone.jpg",
      "Sage Green":  "/images/products/ceramic-pots-sage-green.jpg",
      "Terracotta":  "/images/products/ceramic-pots-terracotta.jpg",
    },
  },
  {
    id: "10",
    name: "Velvet Storage Cube Set",
    price: 1299,
    shortDescription: "Set of 2 collapsible velvet cubes with leather handles.",
    description:
      "Two square storage cubes upholstered in plush velvet with reinforced edges and vegan leather handles, designed to be displayed as openly as they are used practically. The collapsible frame folds flat when not in use, and the velvet surface resists marks and everyday scuffs better than you might expect. At home on an open shelf, inside a wardrobe, or beside a bed — a storage solution that looks like it was chosen for its beauty, not its function. Internal dimensions accommodate folded throws, books, toys, or linens with ease.",
    category: "Decor",
    image: "/images/products/velvet-storage-cube.jpg",
    variants: ["Sage Green", "Dusty Rose", "Warm Caramel", "Navy"],
    variantImages: {
      "Sage Green":   "/images/products/velvet-cube-sage-green.jpg",
      "Dusty Rose":   "/images/products/velvet-cube-dusty-rose.jpg",
      "Warm Caramel": "/images/products/velvet-cube-warm-caramel.jpg",
      "Navy":         "/images/products/velvet-cube-navy.jpg",
    },
    sizes: ["Small (30×30 cm)", "Large (40×40 cm)"],
  },
  {
    id: "11",
    name: "Botanical Soap Gift Set",
    price: 999,
    shortDescription: "6 cold-pressed artisan soaps in a rigid gift box.",
    description:
      "Six cold-pressed artisan soaps, each formulated with a different combination of botanical oils, natural mineral clays, and blended essential oils. Free from sulphates, parabens, and synthetic fragrance — only ingredients your skin actually responds to. Each bar weighs approximately 120g and lasts 4–6 weeks with regular use. Presented in a rigid gift box lined with tissue and finished with a kraft label, this set requires no wrapping and no explanation. A considered gift for anyone who pays attention to the small details of daily life.",
    category: "Self Care",
    image: "/images/products/botanical-soap-set.jpg",
    variants: ["Floral Garden", "Forest & Earth", "Citrus & Herb"],
    variantImages: {
      "Floral Garden":  "/images/products/soap-floral-garden.jpg",
      "Forest & Earth": "/images/products/soap-forest-earth.jpg",
      "Citrus & Herb":  "/images/products/soap-citrus-herb.jpg",
    },
  },
  {
    id: "12",
    name: "Nordic Crystal Bud Vase Set",
    price: 1199,
    shortDescription: "Set of 2 faceted glass vases — tall 28 cm & short 18 cm.",
    description:
      "Two slender bud vases in clear handblown glass with a delicately faceted surface that scatters light beautifully across any surface they touch. Sold as a complementary pair — one tall (28cm) and one short (18cm) — they work together as a considered composition or independently on different surfaces. Equally beautiful with a single garden cutting, a stem of dried botanicals, or left entirely empty as simple, elegant sculptural objects. The thick base gives both vases a reassuring weight and stability.",
    category: "Decor",
    image: "/images/products/crystal-bud-vases.jpg",
  },
  {
    id: "13",
    name: "Stonewashed Linen Napkin Set",
    price: 1049,
    shortDescription: "Set of 6 — 45×45 cm, mitered corners, pre-washed.",
    description:
      "Six generously proportioned dinner napkins (45×45cm) in 100% stonewashed linen with a classic mitered corner finish and a fine hemstitched edge. Pre-washed so they arrive soft and ready to use — and they only become more beautiful with every subsequent wash and press. The natural irregularity of the linen weave gives each napkin a handmade quality that elevates both everyday dining and formal entertaining. Four considered colourways to complement any table setting, from rustic to refined.",
    category: "Textiles",
    image: "/images/products/linen-napkin-set.jpg",
    variants: ["Oatmeal", "Natural White", "Dusty Sage", "Charcoal"],
    variantImages: {
      "Oatmeal":       "/images/products/linen-napkin-oatmeal.jpg",
      "Natural White": "/images/products/linen-napkin-natural-white.jpg",
      "Dusty Sage":    "/images/products/linen-napkin-dusty-sage.jpg",
      "Charcoal":      "/images/products/linen-napkin-charcoal.jpg",
    },
  },
  {
    id: "14",
    name: "Rose Gold Cutlery Set",
    price: 1799,
    shortDescription: "16-piece service for 4 in brushed rose gold stainless steel.",
    description:
      "A complete 16-piece cutlery service for four — dinner forks, salad forks, dinner knives, and dessert spoons — in 18/10 stainless steel with a brushed rose gold PVD finish. The durable PVD coating is resistant to tarnishing and dishwasher-safe. Each piece has been weighted for balance, and the flat, tapering profile sits comfortably in the hand. Presented in a velvet-lined gift box, this set elevates every meal from the functional to the considered. A statement on any table.",
    category: "Kitchen",
    image: "/images/products/rose-gold-cutlery.jpg",
  },
  {
    id: "15",
    name: "Handblown Art Glass Vase",
    price: 1049,
    shortDescription: "Freeform handblown clear glass. Each piece is unique.",
    description:
      "A statement vase in handblown borosilicate glass with a freeform tapered silhouette — subtle variations in the glass wall thickness and surface texture are an intentional mark of the glassblowing process, making each piece genuinely one of a kind. Works beautifully with large single branches, an armful of dried pampas, or a single dramatic stem. Also striking left entirely empty as a sculptural object on a shelf or sideboard. Borosilicate glass is more resistant to thermal shock than standard glass, making it durable in daily use.",
    category: "Decor",
    image: "/images/products/handblown-glass-vase.jpg",
    sizes: ["Medium (35 cm)", "Tall (50 cm)"],
    variantImages: {
      "Medium (35 cm)": "/images/products/glass-vase-medium.jpg",
      "Tall (50 cm)":   "/images/products/glass-vase-tall.jpg",
    },
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
    id: "17",
    name: "Mulberry Silk Pillowcase Set",
    price: 1299,
    shortDescription: "Pair of 22 momme pure silk pillowcases, hidden zip.",
    description:
      "A pair of pillowcases in 22 momme pure mulberry silk — the weight and weave that dermatologists and hairstylists most commonly recommend. Silk's smooth surface reduces friction on both skin and hair overnight, minimising the creasing and breakage associated with cotton. The hidden zip closure keeps the pillow perfectly contained. Machine washable on a delicate cycle. Available in four understated colourways that suit any bedroom palette. A small, daily upgrade with a genuinely noticeable difference.",
    category: "Textiles",
    image: "/images/products/silk-pillowcase-set.jpg",
    variants: ["Pearl White", "Champagne", "Blush", "Slate Grey"],
    variantImages: {
      "Pearl White": "/images/products/silk-pillowcase-pearl-white.jpg",
      "Champagne":   "/images/products/silk-pillowcase-champagne.jpg",
      "Blush":       "/images/products/silk-pillowcase-blush.jpg",
      "Slate Grey":  "/images/products/silk-pillowcase-slate-grey.jpg",
    },
    sizes: ["Standard (48×74 cm)", "King (48×90 cm)"],
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
    id: "19",
    name: "Marble Coaster Set",
    price: 999,
    shortDescription: "Set of 4 genuine marble coasters with gold edge detail.",
    description:
      "Four solid marble coasters, each cut from a single piece of natural stone — meaning the veining pattern is unique to every coaster and every set. A thin cork base protects surfaces from scratching, while the 9mm marble thickness gives each coaster a satisfying weight and thermal mass that keeps cold drinks cold. The brushed gold edge banding adds a considered finishing detail. Presented in a branded gift box. A quiet, permanent upgrade to any coffee table or kitchen counter.",
    category: "Decor",
    image: "/images/products/marble-coaster-set.jpg",
    variants: ["White Carrara", "Black Marquina", "Green Onyx"],
    variantImages: {
      "White Carrara":  "/images/products/marble-coaster-white-carrara.jpg",
      "Black Marquina": "/images/products/marble-coaster-black-marquina.jpg",
      "Green Onyx":     "/images/products/marble-coaster-green-onyx.jpg",
    },
  },
  {
    id: "20",
    name: "Borosilicate Glass Storage Jar Set",
    price: 1199,
    shortDescription: "Set of 3 airtight glass jars — 500ml, 1L & 1.5L.",
    description:
      "Three airtight glass storage jars in heat-resistant borosilicate glass, fitted with bamboo lids and a silicone seal that locks in freshness for up to three times longer than standard screw-top jars. The set includes three graduated sizes — 500ml, 1L, and 1.5L — designed to hold dry pantry goods, coffee, grains, or dried herbs in a way that looks as considered as it is practical. Borosilicate glass is non-porous, odour-neutral, and completely transparent for at-a-glance contents. Dishwasher safe.",
    category: "Kitchen",
    image: "/images/products/glass-storage-jars.jpg",
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
    id: "22",
    name: "Stonewashed Linen Tea Towel Set",
    price: 949,
    shortDescription: "Set of 3 European flax linen tea towels, 50×70 cm.",
    description:
      "A set of three generously sized tea towels (50×70 cm) in 100% European flax linen, pre-stonewashed for a relaxed, lived-in feel from the very first use. Linen's natural absorbency makes these exceptional for drying glassware and hand-polishing wooden boards — far more effective than synthetic blends or thin cotton. Each towel features a fine hemstitched edge and a small corner loop for hanging neatly over an oven handle or hook. Like all good linen, these only become softer and more beautiful with every wash. Available in four considered colourways to complement any kitchen palette, from warm oatmeal to deep charcoal.",
    category: "Kitchen",
    image: "/images/products/linen-tea-towels.jpg",
    variants: ["Oatmeal", "Natural White", "Dusty Sage", "Charcoal"],
    variantImages: {
      "Oatmeal":       "/images/products/tea-towels-oatmeal.jpg",
      "Natural White": "/images/products/tea-towels-natural-white.jpg",
      "Dusty Sage":    "/images/products/tea-towels-dusty-sage.jpg",
      "Charcoal":      "/images/products/tea-towels-charcoal.jpg",
    },
  },
  {
    id: "23",
    name: "Handthrown Ceramic Mug Set",
    price: 1099,
    shortDescription: "Set of 4 handthrown 350 ml ceramic mugs in matte glaze.",
    description:
      "Four handthrown ceramic mugs, each finished with a matte reactive glaze that subtly shifts tone in different lights. Because they are thrown individually by hand, every mug carries the maker's mark — slight irregularities in wall thickness, rim, and silhouette that make each one genuinely one of a kind. Each mug holds a generous 350 ml, making them equally well suited to morning coffee, afternoon tea, or an evening hot chocolate. The thick walls retain heat beautifully, and the rim is gently lipped for a comfortable drink. Dishwasher and microwave safe. A quiet, daily pleasure that will last for years.",
    category: "Ceramics",
    image: "/images/products/ceramic-mugs.jpg",
    variants: ["Warm Clay", "Chalk White", "Matte Charcoal", "Sage Green"],
    variantImages: {
      "Warm Clay":      "/images/products/mugs-warm-clay.jpg",
      "Chalk White":    "/images/products/mugs-chalk-white.jpg",
      "Matte Charcoal": "/images/products/mugs-matte-charcoal.jpg",
      "Sage Green":     "/images/products/mugs-sage-green.jpg",
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
