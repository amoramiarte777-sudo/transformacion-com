// ====== CONFIGURACIÓN (edita solo esto) ======
const CONFIG = {
  phone: '573163392695',
  googleProfile: '', // enlace de tu perfil de Google (Maps / Perfil de Empresa)
  googleReviews: ''  // enlace para ver/dejar reseñas (si está vacío usa googleProfile)
};

const $ = (s, r = document) => r.querySelector(s);

// Menú móvil
const btn = $('#menuBtn'), menu = $('#menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  btn.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false');
}));

$('#year').textContent = new Date().getFullYear();

// Enlaces de Google: solo se muestran si hay URL configurada
document.querySelectorAll('[data-google]').forEach(a => {
  const url = a.dataset.google === 'reviews' ? (CONFIG.googleReviews || CONFIG.googleProfile) : CONFIG.googleProfile;
  if (url) { a.href = url; a.hidden = false; }
});

// Respeta "reducir movimiento"
if (matchMedia('(prefers-reduced-motion: reduce)').matches) $('#heroVideo').removeAttribute('autoplay'), $('#heroVideo').pause();

// ====== Diagnóstico ======
const SINTOMAS = [
  { id: 'oscura', t: 'Suena, pero la imagen se ve muy oscura', causa: 'Luz de fondo (tiras LED) o su driver',
    prueba: 'Apaga la luz del cuarto y alumbra la pantalla de cerca con una linterna. Si ves la imagen tenue, la pantalla está bien y falla la luz de fondo.',
    hago: 'Mido las tiras LED, reemplazo las dañadas y verifico el driver de LEDs.' },
  { id: 'apaga', t: 'Prende unos segundos y se apaga solo', causa: 'Protección por LEDs en corto o fuente de poder',
    prueba: 'Fíjate si la imagen aparece un instante antes de apagarse y si el LED de standby parpadea.',
    hago: 'Reviso LEDs y fuente. Muchas veces un LED dañado hace que la tarjeta apague el equipo para protegerse.' },
  { id: 'muerto', t: 'No enciende y no hay ninguna luz', causa: 'Fuente de poder (capacitores o fusible)',
    prueba: 'Prueba otro tomacorriente, desconéctalo un minuto y vuelve a intentar. Si sigue igual, no sigas insistiendo.',
    hago: 'Abro el equipo, mido la fuente y cambio los componentes dañados.' },
  { id: 'lineas', t: 'Líneas, franjas o colores raros', causa: 'Tarjeta T-con, cable flex o panel',
    prueba: 'Si las líneas aparecen también en el menú del televisor, el problema está en la pantalla o su electrónica, no en el cable HDMI.',
    hago: 'Reviso T-con y flex. Si el panel es el dañado te digo si conviene repararlo.' },
  { id: 'panel', t: 'Pantalla rota o manchas negras', causa: 'Panel dañado por golpe',
    prueba: 'No lo enciendas más ni presiones la pantalla: puedes extender el daño.',
    hago: 'Reviso el caso, pero seré honesto: casi nunca es rentable reparar un panel roto y te lo diré antes de que gastes.' },
  { id: 'soft', t: 'Se congela, sin sonido o no conecta al WiFi', causa: 'Software o tarjeta principal',
    prueba: 'Desconéctalo 1 minuto y vuelve a encenderlo. Prueba otra fuente (HDMI o antena) para descartar el cable.',
    hago: 'Diagnostico la tarjeta principal y el módulo de red, y actualizo o reparo según el caso.' }
];

const lista = $('#sintomas'), res = $('#resultado'), led = $('#led'), estado = $('#estado');
let marca = 'Samsung';

SINTOMAS.forEach(s => {
  const b = document.createElement('button');
  b.type = 'button'; b.role = 'radio'; b.setAttribute('aria-checked', 'false'); b.dataset.id = s.id;
  b.className = 'rounded-xl border border-ink/15 bg-white px-5 py-4 text-left font-medium transition hover:border-brand aria-checked:border-brand aria-checked:bg-brand/10 aria-checked:ring-2 aria-checked:ring-brand';
  b.textContent = s.t;
  b.addEventListener('click', () => mostrar(s));
  lista.append(b);
});

function mostrar(s) {
  lista.querySelectorAll('button').forEach(b => b.setAttribute('aria-checked', String(b.dataset.id === s.id)));
  led.classList.replace('bg-standby', 'bg-cyan-400');
  estado.textContent = 'Diagnóstico orientativo listo';
  const msg = `Hola César, mi televisor ${marca} tiene este problema: ${s.t.toLowerCase()}. Vi que podría ser: ${s.causa.toLowerCase()}. ¿Me puedes ayudar?`;
  res.innerHTML = `
    <p class="text-sm text-white/60">Causa más probable</p>
    <p class="display mt-1 text-2xl font-bold">${s.causa}</p>
    <p class="mt-5 text-sm text-white/60">Pruébalo tú primero</p>
    <p class="mt-1 text-white/85">${s.prueba}</p>
    <p class="mt-5 text-sm text-white/60">Lo que haría en la revisión</p>
    <p class="mt-1 text-white/85">${s.hago}</p>
    <div class="mt-7 flex flex-wrap items-center gap-3">
      <label class="text-sm text-white/70" for="marca">Marca</label>
      <select id="marca" class="rounded-lg border border-white/25 bg-ink px-3 py-2 text-sm">
        ${['Samsung', 'LG', 'Otra marca'].map(m => `<option${m === marca ? ' selected' : ''}>${m}</option>`).join('')}
      </select>
    </div>
    <a id="enviar" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-2 rounded-lg bg-wa px-6 py-3.5 font-semibold text-white hover:brightness-110">
      <svg class="size-5"><use href="assets/icons/sprite.svg#wa"/></svg>Enviar este diagnóstico por WhatsApp</a>`;
  const enviar = $('#enviar');
  const link = () => enviar.href = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(msg.replace(/televisor \S+ tiene/, `televisor ${marca} tiene`))}`;
  $('#marca').addEventListener('change', e => { marca = e.target.value; link(); });
  link();
}
