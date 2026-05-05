/**
 * Cloudflare Pages Function — POST /api/payfast/create-payment
 *
 * Accepts: { cart: CartItem[], customer: { name: string, email: string } }
 * Returns: { url: string, fields: Record<string, string> }
 *
 * Generates the PayFast signature server-side so the merchant key is never
 * exposed to the browser.
 *
 * Required env vars (set in Cloudflare Pages → Settings → Environment variables):
 *   PAYFAST_MERCHANT_ID
 *   PAYFAST_MERCHANT_KEY
 *   PAYFAST_PASSPHRASE   (leave blank if not set on your PayFast account)
 *   PAYFAST_SANDBOX      ("true" for test mode, "false" for live)
 */

// ---------------------------------------------------------------------------
// Minimal MD5 — pure JS, no dependencies, works in Cloudflare Workers
// ---------------------------------------------------------------------------
function md5(str) {
  function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }
  function rol(n, c) { return (n << c) | (n >>> (32 - c)); }
  function cmn(q, a, b, x, s, t) { return safeAdd(rol(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b); }
  function ff(a, b, c, d, x, s, t) { return cmn((b & c) | (~b & d), a, b, x, s, t); }
  function gg(a, b, c, d, x, s, t) { return cmn((b & d) | (c & ~d), a, b, x, s, t); }
  function hh(a, b, c, d, x, s, t) { return cmn(b ^ c ^ d, a, b, x, s, t); }
  function ii(a, b, c, d, x, s, t) { return cmn(c ^ (b | ~d), a, b, x, s, t); }
  function blks(s) {
    const nb = ((s.length + 8) >> 6) + 1, b = new Array(nb * 16).fill(0);
    for (let i = 0; i < s.length; i++) b[i >> 2] |= s.charCodeAt(i) << ((i % 4) * 8);
    b[s.length >> 2] |= 0x80 << ((s.length % 4) * 8);
    b[nb * 16 - 2] = s.length * 8;
    return b;
  }
  const x = blks(str);
  let a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
  for (let i = 0; i < x.length; i += 16) {
    const [oa, ob, oc, od] = [a, b, c, d];
    a=ff(a,b,c,d,x[i+0],7,-680876936);  d=ff(d,a,b,c,x[i+1],12,-389564586);  c=ff(c,d,a,b,x[i+2],17,606105819);   b=ff(b,c,d,a,x[i+3],22,-1044525330);
    a=ff(a,b,c,d,x[i+4],7,-176418897);  d=ff(d,a,b,c,x[i+5],12,1200080426);   c=ff(c,d,a,b,x[i+6],17,-1473231341); b=ff(b,c,d,a,x[i+7],22,-45705983);
    a=ff(a,b,c,d,x[i+8],7,1770035416);  d=ff(d,a,b,c,x[i+9],12,-1958414417);  c=ff(c,d,a,b,x[i+10],17,-42063);     b=ff(b,c,d,a,x[i+11],22,-1990404162);
    a=ff(a,b,c,d,x[i+12],7,1804603682); d=ff(d,a,b,c,x[i+13],12,-40341101);   c=ff(c,d,a,b,x[i+14],17,-1502002290);b=ff(b,c,d,a,x[i+15],22,1236535329);
    a=gg(a,b,c,d,x[i+1],5,-165796510);  d=gg(d,a,b,c,x[i+6],9,-1069501632);   c=gg(c,d,a,b,x[i+11],14,643717713);  b=gg(b,c,d,a,x[i+0],20,-373897302);
    a=gg(a,b,c,d,x[i+5],5,-701558691);  d=gg(d,a,b,c,x[i+10],9,38016083);     c=gg(c,d,a,b,x[i+15],14,-660478335); b=gg(b,c,d,a,x[i+4],20,-405537848);
    a=gg(a,b,c,d,x[i+9],5,568446438);   d=gg(d,a,b,c,x[i+14],9,-1019803690);  c=gg(c,d,a,b,x[i+3],14,-187363961);  b=gg(b,c,d,a,x[i+8],20,1163531501);
    a=gg(a,b,c,d,x[i+13],5,-1444681467);d=gg(d,a,b,c,x[i+2],9,-51403784);     c=gg(c,d,a,b,x[i+7],14,1735328473);  b=gg(b,c,d,a,x[i+12],20,-1926607734);
    a=hh(a,b,c,d,x[i+5],4,-378558);     d=hh(d,a,b,c,x[i+8],11,-2022574463);  c=hh(c,d,a,b,x[i+11],16,1839030562); b=hh(b,c,d,a,x[i+14],23,-35309556);
    a=hh(a,b,c,d,x[i+1],4,-1530992060); d=hh(d,a,b,c,x[i+4],11,1272893353);   c=hh(c,d,a,b,x[i+7],16,-155497632);  b=hh(b,c,d,a,x[i+10],23,-1094730640);
    a=hh(a,b,c,d,x[i+13],4,681279174);  d=hh(d,a,b,c,x[i+0],11,-358537222);   c=hh(c,d,a,b,x[i+3],16,-722521979);  b=hh(b,c,d,a,x[i+6],23,76029189);
    a=hh(a,b,c,d,x[i+9],4,-640364487);  d=hh(d,a,b,c,x[i+12],11,-421815835);  c=hh(c,d,a,b,x[i+15],16,530742520);  b=hh(b,c,d,a,x[i+2],23,-995338651);
    a=ii(a,b,c,d,x[i+0],6,-198630844);  d=ii(d,a,b,c,x[i+7],10,1126891415);   c=ii(c,d,a,b,x[i+14],15,-1416354905);b=ii(b,c,d,a,x[i+5],21,-57434055);
    a=ii(a,b,c,d,x[i+12],6,1700485571); d=ii(d,a,b,c,x[i+3],10,-1894986606);  c=ii(c,d,a,b,x[i+10],15,-1051523);   b=ii(b,c,d,a,x[i+1],21,-2054922799);
    a=ii(a,b,c,d,x[i+8],6,1873313359);  d=ii(d,a,b,c,x[i+15],10,-30611744);   c=ii(c,d,a,b,x[i+6],15,-1560198380); b=ii(b,c,d,a,x[i+13],21,1309151649);
    a=ii(a,b,c,d,x[i+4],6,-145523070);  d=ii(d,a,b,c,x[i+11],10,-1120210379); c=ii(c,d,a,b,x[i+2],15,718787259);   b=ii(b,c,d,a,x[i+9],21,-343485551);
    a=safeAdd(a,oa); b=safeAdd(b,ob); c=safeAdd(c,oc); d=safeAdd(d,od);
  }
  const rhex = n => [...Array(4)].map((_,j) => ('0'+(n>>(j*8+4)&0xf).toString(16)).slice(-1) + ('0'+(n>>(j*8)&0xf).toString(16)).slice(-1)).join('');
  return rhex(a) + rhex(b) + rhex(c) + rhex(d);
}

// ---------------------------------------------------------------------------
// PayFast signature helper
// ---------------------------------------------------------------------------
function buildSignature(fields, passphrase) {
  const paramStr = Object.entries(fields)
    .filter(([, v]) => v !== '' && v != null)
    .map(([k, v]) => `${k}=${encodeURIComponent(String(v)).replace(/%20/g, '+')}`)
    .join('&');

  const toHash = passphrase
    ? `${paramStr}&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, '+')}`
    : paramStr;

  return md5(toHash);
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export async function onRequestPost({ request, env }) {
  try {
    const { cart, customer } = await request.json();

    if (!cart?.length) return jsonError('Cart is empty', 400);
    if (!customer?.name || !customer?.email) return jsonError('Customer name and email are required', 400);

    const merchantId  = env.PAYFAST_MERCHANT_ID;
    const merchantKey = env.PAYFAST_MERCHANT_KEY;
    const passphrase  = env.PAYFAST_PASSPHRASE || '';
    const isSandbox   = env.PAYFAST_SANDBOX !== 'false';

    if (!merchantId || !merchantKey) return jsonError('PayFast credentials not configured', 500);

    const origin = new URL(request.url).origin;
    const total  = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const amount = total.toFixed(2);

    const parts     = customer.name.trim().split(/\s+/);
    const nameFirst = parts[0];
    const nameLast  = parts.slice(1).join(' ') || '-';

    const mPaymentId = `MAISON-${Date.now()}`;

    const itemDescription = cart
      .map(i => `${i.name}${i.variant ? ` (${i.variant})` : ''} x${i.quantity}`)
      .join(', ')
      .substring(0, 255);

    const fields = {
      merchant_id:      merchantId,
      merchant_key:     merchantKey,
      return_url:       `${origin}/payment/success`,
      cancel_url:       `${origin}/payment/cancel`,
      notify_url:       `${origin}/api/payfast/notify`,
      name_first:       nameFirst,
      name_last:        nameLast,
      email_address:    customer.email,
      m_payment_id:     mPaymentId,
      amount,
      item_name:        'MAISON Store Order',
      item_description: itemDescription,
    };

    const signature  = buildSignature(fields, passphrase);
    const payfastUrl = isSandbox
      ? 'https://sandbox.payfast.co.za/eng/process'
      : 'https://www.payfast.co.za/eng/process';

    return new Response(
      JSON.stringify({ url: payfastUrl, fields: { ...fields, signature } }),
      { headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('create-payment error:', err);
    return jsonError('Internal server error', 500);
  }
}

function jsonError(message, status) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
