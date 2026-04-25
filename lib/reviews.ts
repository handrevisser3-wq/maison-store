export interface Review {
  id: string;
  productId: string;
  productName: string;
  stars: number;
  headline: string;
  body: string;
  name: string;
  location: string;
  date: string;
  verified: boolean;
  featured?: boolean;
}

export const reviews: Review[] = [
  // ── FEATURED — shown on homepage ──────────────────────────────────────────

  {
    id: "r1",
    productId: "2",
    productName: "Marble & Acacia Cheese Board Set",
    stars: 5,
    headline: "Absolutely stunning piece",
    body: "I ordered the Marble & Acacia Cheese Board Set for a housewarming gift and it arrived beautifully packaged. Everyone at the party asked where it was from. It looks even better in person than online — the marble is so elegant.",
    name: "Taryn M.",
    location: "Cape Town, Western Cape",
    date: "14 March 2025",
    verified: true,
    featured: true,
  },
  {
    id: "r2",
    productId: "1",
    productName: "Luxury Soy Candle Trio",
    stars: 5,
    headline: "My home finally feels like a magazine",
    body: "I've been slowly decorating my new apartment in Joburg and MAISON has become my go-to. The quality is genuinely impressive for the price. Fast delivery too — arrived in three days!",
    name: "Lerato K.",
    location: "Johannesburg, Gauteng",
    date: "2 February 2025",
    verified: true,
    featured: true,
  },
  {
    id: "r3",
    productId: "1",
    productName: "Luxury Soy Candle Trio",
    stars: 4.5,
    headline: "Great quality, love the aesthetic",
    body: "Bought the candles as a gift for my sister and she absolutely loves them. The scent fills the whole room without being overwhelming. Only reason it's not 5 stars is the delivery took a little longer than expected to Durban.",
    name: "Priya N.",
    location: "Durban, KwaZulu-Natal",
    date: "28 January 2025",
    verified: true,
    featured: true,
  },
  {
    id: "r4",
    productId: "4",
    productName: "Ceramic Pour-Over Coffee Set",
    stars: 5,
    headline: "Worth every cent",
    body: "I was hesitant to spend this much online but I am so glad I did. The product is solid, beautifully made, and looks exactly like the photos. MAISON is the real deal — will definitely be ordering again before winter.",
    name: "Andile D.",
    location: "Pretoria, Gauteng",
    date: "19 March 2025",
    verified: true,
    featured: true,
  },
  {
    id: "r5",
    productId: "5",
    productName: "Brushed Gold Tealight Set",
    stars: 5,
    headline: "Perfect addition to my living room",
    body: "I redid my whole lounge recently and this was the finishing touch I needed. The craftsmanship is beautiful — you can tell it's not cheap mass-produced stuff. Packaged with care too, no damage on arrival.",
    name: "Chantél V.",
    location: "Stellenbosch, Western Cape",
    date: "5 April 2025",
    verified: true,
    featured: true,
  },
  {
    id: "r6",
    productId: "6",
    productName: "Stonewashed Linen Pillowcase Set",
    stars: 5,
    headline: "Lekker kwaliteit, highly recommend",
    body: "Showed this to my mom and she immediately wanted one for herself — that says everything. Beautifully designed, great quality and it arrived faster than I expected all the way to Bloemfontein. Will be back for more.",
    name: "Marius B.",
    location: "Bloemfontein, Free State",
    date: "11 April 2025",
    verified: true,
    featured: true,
  },

  // ── Product 1 — Luxury Soy Candle Trio ────────────────────────────────────

  {
    id: "r7",
    productId: "1",
    productName: "Luxury Soy Candle Trio",
    stars: 5,
    headline: "My whole house smells amazing",
    body: "I've burned the Sandalwood & Vanilla one almost every evening since it arrived. The scent is so warm and sophisticated — not cheap or synthetic at all. The wooden wick crackling is also such a nice touch. Already planning to order again when it runs out!",
    name: "Zanele M.",
    location: "East London, Eastern Cape",
    date: "7 March 2025",
    verified: true,
  },

  // ── Product 2 — Marble & Acacia Cheese Board Set ──────────────────────────

  {
    id: "r8",
    productId: "2",
    productName: "Marble & Acacia Cheese Board Set",
    stars: 5,
    headline: "The centrepiece of every gathering",
    body: "Bought this for our new home and it's been on the table every weekend since. The quality of the marble is genuinely beautiful — heavy, cool, and substantial. The cutlery tools feel expensive. A lekker buy that you won't regret.",
    name: "Keagan F.",
    location: "George, Western Cape",
    date: "22 February 2025",
    verified: true,
  },

  // ── Product 3 — Chunky Knit Throw Blanket ────────────────────────────────

  {
    id: "r9",
    productId: "3",
    productName: "Chunky Knit Throw Blanket",
    stars: 5,
    headline: "Exactly what my lounge needed",
    body: "I got the Sage colour and it's perfect — ties the whole room together. The texture is so beautiful and it's honestly even softer than it looks online. My cat has claimed it as hers, which I suppose is the highest endorsement possible. Will be ordering more colours for gifting.",
    name: "Nandi T.",
    location: "Pietermaritzburg, KwaZulu-Natal",
    date: "15 March 2025",
    verified: true,
  },
  {
    id: "r10",
    productId: "3",
    productName: "Chunky Knit Throw Blanket",
    stars: 4.5,
    headline: "Beautiful quality, worth the wait",
    body: "Ordered the Dusty Rose for my daughter's room and she absolutely loves it. The colour is exactly as shown and the knit is thick and generous. Eish, it took a few extra days to arrive but the quality makes up for it. Would recommend to anyone looking for something special.",
    name: "Riaan H.",
    location: "Hermanus, Western Cape",
    date: "1 April 2025",
    verified: true,
  },

  // ── Product 4 — Ceramic Pour-Over Coffee Set ──────────────────────────────

  {
    id: "r11",
    productId: "4",
    productName: "Ceramic Pour-Over Coffee Set",
    stars: 5,
    headline: "Makes my morning ritual feel luxurious",
    body: "The Chalk White set is absolutely gorgeous on my kitchen counter. Even when I'm not making coffee it just looks beautiful. The ceramic is thick and well-made, and the wooden collar detail is such an elegant touch. Sharp quality — totally elevated my whole morning.",
    name: "Tamsin V.",
    location: "Paarl, Western Cape",
    date: "8 February 2025",
    verified: true,
  },

  // ── Product 5 — Brushed Gold Tealight Set ────────────────────────────────

  {
    id: "r12",
    productId: "5",
    productName: "Brushed Gold Tealight Set",
    stars: 5,
    headline: "Adds so much warmth to a room",
    body: "I placed these three on my dining table and the effect when they're lit is just gorgeous — the gold catches the candlelight beautifully. The different heights work so well together. Already bought a second set to give as a gift. No tarnishing even after weeks of use.",
    name: "Nompumelelo S.",
    location: "Midrand, Gauteng",
    date: "20 March 2025",
    verified: true,
  },

  // ── Product 6 — Stonewashed Linen Pillowcase Set ──────────────────────────

  {
    id: "r13",
    productId: "6",
    productName: "Stonewashed Linen Pillowcase Set",
    stars: 5,
    headline: "My sleep has genuinely improved",
    body: "I know that sounds dramatic but these pillowcases are on another level. The Oatmeal colour is so soft and the texture just gets better every wash. I gave my old cotton pillowcases away the next day. Beautifully packaged and well worth the price.",
    name: "Ayasha P.",
    location: "Durban North, KwaZulu-Natal",
    date: "27 March 2025",
    verified: true,
  },

  // ── Product 7 — Acacia Wood Serving Tray ─────────────────────────────────

  {
    id: "r14",
    productId: "7",
    productName: "Acacia Wood Serving Tray",
    stars: 5,
    headline: "Stunning piece for my coffee table",
    body: "I use the large size as a coffee table tray — candle, remote, small plant — and it just looks so intentional and put-together. The grain on the wood is genuinely beautiful, no two trays will look the same. Really impressed by the quality and the solid feel of it.",
    name: "Sipho M.",
    location: "Soweto, Gauteng",
    date: "12 February 2025",
    verified: true,
  },
  {
    id: "r15",
    productId: "7",
    productName: "Acacia Wood Serving Tray",
    stars: 5,
    headline: "Braai day staple",
    body: "Got this for serving snacks and drinks on braai days and honestly it's become an everyday piece. The acacia wood is so rich and warm, and the cut-out handles make it practical as well as pretty. Exactly as described — lekker quality all round.",
    name: "Liezel B.",
    location: "Knysna, Western Cape",
    date: "18 March 2025",
    verified: true,
  },

  // ── Product 8 — Luxury Reed Diffuser ─────────────────────────────────────

  {
    id: "r16",
    productId: "8",
    productName: "Luxury Reed Diffuser",
    stars: 5,
    headline: "Our home smells like a boutique hotel",
    body: "I put the Bergamot & Vetiver in our entrance hall and every person who walks in comments on it. The scent is sophisticated and diffuses evenly without any spikes. Well into week 8 and it's still going strong. Genuinely premium quality — will reorder.",
    name: "Thabo M.",
    location: "Sandton, Gauteng",
    date: "9 January 2025",
    verified: true,
  },
  {
    id: "r17",
    productId: "8",
    productName: "Luxury Reed Diffuser",
    stars: 5,
    headline: "The Rose & Oud is simply divine",
    body: "I debated between the three scents and went with Rose & Oud based on the description — absolutely the right call. It's complex and rich without being heavy. The frosted bottle looks so elegant on my bathroom shelf. No more plug-in air fresheners for me.",
    name: "Samantha E.",
    location: "Somerset West, Western Cape",
    date: "16 February 2025",
    verified: true,
  },

  // ── Product 9 — Matte Ceramic Plant Pot Set ───────────────────────────────

  {
    id: "r18",
    productId: "9",
    productName: "Matte Ceramic Plant Pot Set",
    stars: 5,
    headline: "My plants have never looked better",
    body: "I bought the Warm Stone set for my monstera, pothos and ZZ plant and the colour just ties everything together so beautifully. The matte glaze is really beautiful in natural light — changes tone depending on the time of day. Great drainage holes and saucers are a nice touch.",
    name: "Lungelo D.",
    location: "eThekwini, KwaZulu-Natal",
    date: "4 March 2025",
    verified: true,
  },
  {
    id: "r19",
    productId: "9",
    productName: "Matte Ceramic Plant Pot Set",
    stars: 4.5,
    headline: "Quality pots at a fair price",
    body: "Ordered the Chalk White set and they're just gorgeous — clean, elegant, and well-made. The different sizes work perfectly grouped together or spread around the house. One saucer had a tiny chip on arrival, but the MAISON team responded quickly. Still very happy with the purchase.",
    name: "Ilse V.",
    location: "Bellville, Western Cape",
    date: "25 March 2025",
    verified: true,
  },

  // ── Product 10 — Velvet Storage Cube Set ─────────────────────────────────

  {
    id: "r20",
    productId: "10",
    productName: "Velvet Storage Cube Set",
    stars: 5,
    headline: "Stylish and genuinely functional",
    body: "I ordered the Navy pair for my home office bookshelf and they've completely transformed the space. They hold a surprising amount — extra cables, files, all sorts. The velvet feels premium and the leather handles are a beautiful finishing detail. Sharp product, no regrets.",
    name: "Keneilwe O.",
    location: "Polokwane, Limpopo",
    date: "21 January 2025",
    verified: true,
  },
  {
    id: "r21",
    productId: "10",
    productName: "Velvet Storage Cube Set",
    stars: 5,
    headline: "My daughter's room looks like Pinterest",
    body: "Got the Dusty Rose for my daughter's room to store her toys and she absolutely loves them. They look beautiful even when they're full — the velvet hides the 'stuffed' look perfectly. They fold flat easily when not needed. Bestel dit gerus — jy sal nie spyt wees nie.",
    name: "Sanna J.",
    location: "Rustenburg, North West",
    date: "28 February 2025",
    verified: true,
  },

  // ── Product 11 — Botanical Soap Gift Set ──────────────────────────────────

  {
    id: "r22",
    productId: "11",
    productName: "Botanical Soap Gift Set",
    stars: 5,
    headline: "The most beautiful gift I've ever given",
    body: "I ordered the Forest & Earth set for my mother's birthday and she was genuinely moved by the packaging alone. The soaps smell incredible and actually make your skin feel soft after just one use. No synthetic scent at all. Will absolutely buy again.",
    name: "Farieda A.",
    location: "Kleinmond, Western Cape",
    date: "5 February 2025",
    verified: true,
  },
  {
    id: "r23",
    productId: "11",
    productName: "Botanical Soap Gift Set",
    stars: 5,
    headline: "Lekker kwaliteit — jy kan dit ruik!",
    body: "These soaps are the real deal. Each one smells completely different and you can feel the quality. I ordered the Citrus & Herb variety for my guest bathroom and guests always comment on it. No more supermarket soap in this house!",
    name: "Bongi N.",
    location: "Alexandra, Gauteng",
    date: "14 March 2025",
    verified: true,
  },

  // ── Product 12 — Nordic Crystal Bud Vase Set ──────────────────────────────

  {
    id: "r24",
    productId: "12",
    productName: "Nordic Crystal Bud Vase Set",
    stars: 5,
    headline: "Exactly the sculptural touch I wanted",
    body: "I've been looking for vases that look beautiful even without flowers in them, and these are exactly that. The faceted glass scatters light so beautifully in the afternoon sun. The pair at different heights works perfectly on my sideboard. Delivered with great care too.",
    name: "Monique C.",
    location: "Franschhoek, Western Cape",
    date: "17 February 2025",
    verified: true,
  },
  {
    id: "r25",
    productId: "12",
    productName: "Nordic Crystal Bud Vase Set",
    stars: 5,
    headline: "Perfect with dried botanicals",
    body: "I styled the taller one with a branch of dried protea and the shorter one with a cotton stem — it looks like something from an interior magazine. The glass is clear and thick, really substantial in hand. Such a considered, beautiful product from MAISON.",
    name: "Nosipho B.",
    location: "Umhlanga, KwaZulu-Natal",
    date: "3 April 2025",
    verified: true,
  },

  // ── Product 13 — Stonewashed Linen Napkin Set ─────────────────────────────

  {
    id: "r26",
    productId: "13",
    productName: "Stonewashed Linen Napkin Set",
    stars: 5,
    headline: "Elevated my whole table setting",
    body: "We entertain often and these napkins have completely changed our table. The Natural White is so crisp but has that beautiful organic linen texture. They wash and press perfectly. I ordered a second set because we couldn't bear to use less than 12. Worth every cent.",
    name: "Corné V.",
    location: "Stellenbosch, Western Cape",
    date: "23 January 2025",
    verified: true,
  },
  {
    id: "r27",
    productId: "13",
    productName: "Stonewashed Linen Napkin Set",
    stars: 4.5,
    headline: "Beautiful quality — ordering more",
    body: "I received the Dusty Sage set and they're just stunning — the colour is exactly as shown, very subtle and earthy. The pre-washed texture feels so soft and lived-in. They do wrinkle easily but a quick press fixes them. Overall a very lekker buy.",
    name: "Zinhle M.",
    location: "Midrand, Gauteng",
    date: "10 March 2025",
    verified: true,
  },

  // ── Product 14 — Rose Gold Cutlery Set ───────────────────────────────────

  {
    id: "r28",
    productId: "14",
    productName: "Rose Gold Cutlery Set",
    stars: 5,
    headline: "My dinner table has never looked better",
    body: "I've been wanting to upgrade from our old cutlery for ages and this set is absolutely worth it. The rose gold PVD finish is so warm and elegant — it hasn't tarnished at all despite regular dishwasher use. The balance and weight of each piece is perfect. Genuinely premium quality.",
    name: "Robyn M.",
    location: "Constantia, Western Cape",
    date: "8 February 2025",
    verified: true,
  },
  {
    id: "r29",
    productId: "14",
    productName: "Rose Gold Cutlery Set",
    stars: 5,
    headline: "Bought as a gift — they went crazy",
    body: "My sister and her husband just moved into their first home, so I bought this as a housewarming gift. The velvet gift box is stunning — it required no wrapping at all. They called me immediately to say how beautiful it was. Sharp buy for anyone looking to gift something special.",
    name: "Vusi T.",
    location: "Soweto, Gauteng",
    date: "2 April 2025",
    verified: true,
  },

  // ── Product 15 — Handblown Art Glass Vase ────────────────────────────────

  {
    id: "r30",
    productId: "15",
    productName: "Handblown Art Glass Vase",
    stars: 5,
    headline: "A genuine work of art",
    body: "I've bought a lot of vases but nothing compares to this. The variations in glass wall thickness that you can see when light hits it — that's what handblown actually means. I have the tall one and it's the most-commented-on piece in my home. Beautifully made.",
    name: "Anri S.",
    location: "Hermanus, Western Cape",
    date: "11 January 2025",
    verified: true,
  },
  {
    id: "r31",
    productId: "15",
    productName: "Handblown Art Glass Vase",
    stars: 5,
    headline: "Makes a stunning gift",
    body: "Bought the medium size as a birthday gift and the person receiving it was absolutely speechless. It arrived so well-packaged — bubble wrapped twice. The way it catches light on a windowsill is just magical. MAISON packaging is also very on point. Will definitely order again.",
    name: "Nobuhle M.",
    location: "Newcastle, KwaZulu-Natal",
    date: "25 March 2025",
    verified: true,
  },

  // ── Product 16 — Electric Ultrasonic Aroma Diffuser ──────────────────────

  {
    id: "r32",
    productId: "16",
    productName: "Electric Ultrasonic Aroma Diffuser",
    stars: 5,
    headline: "Runs all night, smells incredible",
    body: "I run the Dark Walnut diffuser in my bedroom on the 8-hour low setting every night and wake up to the most beautifully scented room. The candle-flicker light setting creates a really calming atmosphere. It looks genuinely premium on my bedside table — not plasticky at all. Sharp product.",
    name: "Warren P.",
    location: "Cape Town, Western Cape",
    date: "3 March 2025",
    verified: true,
  },
  {
    id: "r33",
    productId: "16",
    productName: "Electric Ultrasonic Aroma Diffuser",
    stars: 5,
    headline: "Replaced three old diffusers with this one",
    body: "I had three different diffusers in different rooms before and this one does the job better than all of them combined. The 8-hour run time is a game changer. The White Oak finish blends into any interior and the auto shut-off is so convenient. Highly recommended!",
    name: "Faeza A.",
    location: "Athlone, Western Cape",
    date: "15 April 2025",
    verified: true,
  },

  // ── Product 17 — Mulberry Silk Pillowcase Set ─────────────────────────────

  {
    id: "r34",
    productId: "17",
    productName: "Mulberry Silk Pillowcase Set",
    stars: 5,
    headline: "My skin and hair have noticeably improved",
    body: "I was sceptical about this claim but I've been using the Champagne set for six weeks and my hair genuinely looks better in the mornings. Less frizz, no creasing on my face. The silk is cool to touch and just luxurious. Worth every rand — I bought a second set for the spare room.",
    name: "Jade M.",
    location: "Sea Point, Western Cape",
    date: "19 February 2025",
    verified: true,
  },
  {
    id: "r35",
    productId: "17",
    productName: "Mulberry Silk Pillowcase Set",
    stars: 5,
    headline: "A treat I bought for myself — no regrets",
    body: "I went with the Blush colour and it's even more beautiful in person. The silk is smooth and feels so gentle. The hidden zip is a lovely detail — the pillow stays perfectly tucked. This is the kind of upgrade that makes every single night better. MAISON quality speaks for itself.",
    name: "Nombuso D.",
    location: "Pietermaritzburg, KwaZulu-Natal",
    date: "7 April 2025",
    verified: true,
  },

  // ── Product 18 — Macramé Plant Hanger Set ────────────────────────────────

  {
    id: "r36",
    productId: "18",
    productName: "Macramé Plant Hanger Set",
    stars: 5,
    headline: "My lounge is now a plant paradise",
    body: "I hung all three at different heights in my corner window and it looks like something from a botanical magazine. The cotton rope is really well-made — solid knots, no fraying. The brass rings add a beautiful finish. My pothos looks absolutely incredible in the tallest one.",
    name: "Zoë B.",
    location: "Makhanda, Eastern Cape",
    date: "6 February 2025",
    verified: true,
  },
  {
    id: "r37",
    productId: "18",
    productName: "Macramé Plant Hanger Set",
    stars: 4.5,
    headline: "Beautiful but takes some hanging skills!",
    body: "The macramé hangers themselves are stunning — beautifully knotted and really solid quality. I struggled a little finding the right hooks for my ceiling, but once up they look incredible. The staggered heights create a really lovely composition. Eish, worth the effort for sure.",
    name: "Kagiso M.",
    location: "Centurion, Gauteng",
    date: "22 March 2025",
    verified: true,
  },

  // ── Product 19 — Marble Coaster Set ──────────────────────────────────────

  {
    id: "r38",
    productId: "19",
    productName: "Marble Coaster Set",
    stars: 5,
    headline: "The most elegant coasters I've owned",
    body: "I bought the White Carrara set and the natural veining on each coaster is just beautiful — every single one is unique. The gold edge banding elevates them from functional to decorative. The cork base is a nice practical touch. They look stunning on my coffee table and every guest notices them.",
    name: "Riana F.",
    location: "Paarl, Western Cape",
    date: "12 January 2025",
    verified: true,
  },
  {
    id: "r39",
    productId: "19",
    productName: "Marble Coaster Set",
    stars: 5,
    headline: "Bought the Black Marquina — absolutely striking",
    body: "The contrast of the black marble and the gold edge is just stunning. These look ridiculously expensive — much more expensive than the price you pay. I've had them for two months and they still look brand new. Will be buying the Green Onyx set next.",
    name: "Sifiso N.",
    location: "Hilton, KwaZulu-Natal",
    date: "28 February 2025",
    verified: true,
  },

  // ── Product 20 — Borosilicate Glass Storage Jar Set ──────────────────────

  {
    id: "r40",
    productId: "20",
    productName: "Borosilicate Glass Storage Jar Set",
    stars: 5,
    headline: "My pantry has never looked so good",
    body: "I filled these with my coffee, rice and quinoa and they look absolutely beautiful on my kitchen shelf. The bamboo lids are a lovely touch — natural and elegant. The silicone seal keeps everything fresh. I've already ordered a second set because I want to do my whole pantry. Lekker!",
    name: "Marié V.",
    location: "Oudtshoorn, Western Cape",
    date: "25 January 2025",
    verified: true,
  },
  {
    id: "r41",
    productId: "20",
    productName: "Borosilicate Glass Storage Jar Set",
    stars: 5,
    headline: "Quality that you can feel",
    body: "The glass is thick and weighty — you can tell immediately this isn't cheap glass. The three sizes work perfectly together: my coffee in the small one, grains in the medium, and pasta in the large. They look so intentional and clean. My whole family wants a set now!",
    name: "Thulisile N.",
    location: "Durban, KwaZulu-Natal",
    date: "8 March 2025",
    verified: true,
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getProductAverageRating(productId: string): number {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  const sum = productReviews.reduce((acc, r) => acc + r.stars, 0);
  return Math.round((sum / productReviews.length) * 10) / 10;
}
