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
    featured: true,
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

  // ── Product 16 — Electric Ultrasonic Aroma Diffuser ──────────────────────

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
