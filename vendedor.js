// 1. Base de datos del Catálogo
const catalogo = [
  // Café
  { cat: 'Café', nombre: 'Americano 12oz', precio: 50 },
  { cat: 'Café', nombre: 'Americano 16oz', precio: 60 },
  { cat: 'Café', nombre: 'Espresso', precio: 40 },
  { cat: 'Café', nombre: 'Espresso Doble', precio: 55 },
  { cat: 'Café', nombre: 'Cappuccino', precio: 60 },
  { cat: 'Café', nombre: 'Latte', precio: 60 },
  { cat: 'Café', nombre: 'Chocolate Caliente', precio: 60 },
  // Frías
  { cat: 'Frías', nombre: 'Frappuccino', precio: 60 },
  { cat: 'Frías', nombre: 'Soda Italiana', precio: 45 },
  { cat: 'Frías', nombre: 'Bubble Tea', precio: 60 },
  { cat: 'Frías', nombre: 'Smoothie 12oz', precio: 55 },
  // Dulce
  { cat: 'Dulce', nombre: 'Crepa (1 Ing)', precio: 60 },
  { cat: 'Dulce', nombre: 'Crepa (2 Ing)', precio: 70 },
  { cat: 'Dulce', nombre: 'Crepa (3 Ing)', precio: 80 },
  { cat: 'Dulce', nombre: 'Hot Cake (1 Ing)', precio: 35 },
  { cat: 'Dulce', nombre: 'Waffle (1 Ing)', precio: 45 },
  // Salado
  { cat: 'Salado', nombre: 'Crepa Pepperoni', precio: 80 },
  { cat: 'Salado', nombre: 'Crepa Hawaiana', precio: 80 },
  { cat: 'Salado', nombre: 'Crepa Cochinita', precio: 110 },
  { cat: 'Salado', nombre: 'Sándwich Clásico', precio: 35 },
  { cat: 'Salado', nombre: 'Pizza Individual', precio: 45 },
  // Extras
  { cat: 'Extras', nombre: 'Topping Premium', precio: 20 },
  { cat: 'Extras', nombre: 'Leche Especial', precio: 10 },
  { cat: 'Extras', nombre: 'Shot Extra', precio: 10 }
];

// 2. Estado de la App
let mesas = JSON.parse(localStorage.getItem('pos_mesas')) || {};
let totalVendidoDia = parseFloat(localStorage.getItem('pos_ventas_dia')) || 0;
let mesaActual = null;

// Inicializar 20 mesas si no existen
if (Object.keys(mesas).length === 0) {
  for (let i = 1; i <= 20; i++) {
    mesas[i] = { items: [], total: 0 };
  }
  saveData();
}

document.getElementById('daily-total').textContent = `$${totalVendidoDia}`;

// 3. Renderizar vista de mesas
function renderTables() {
  const grid = document.getElementById('tables-grid');
  grid.innerHTML = '';
  
  for (let i = 1; i <= 20; i++) {
    const mesa = mesas[i];
    const isActive = mesa.total > 0;
    
    const btn = document.createElement('button');
    btn.className = `p-4 rounded-2xl flex flex-col items-center justify-center transition-all active:scale-95 ${
      isActive ? 'glass-active' : 'glass-panel text-slate-400 hover:bg-white/10'
    }`;
    
    btn.innerHTML = `
      <span class="text-xl font-bold ${isActive ? 'text-purple-300' : ''}">${i}</span>
      <span class="text-xs font-medium mt-1 ${isActive ? 'text-white' : 'opacity-0'}">$${mesa.total}</span>
    `;
    
    btn.onclick = () => openTable(i);
    grid.appendChild(btn);
  }
  document.getElementById('daily-total').textContent = `$${totalVendidoDia}`;
}

// 4. Navegación
function openTable(id) {
  mesaActual = id;
  document.getElementById('view-tables').classList.add('hidden');
  document.getElementById('view-order').classList.remove('hidden');
  document.getElementById('current-table-title').textContent = `Mesa ${id}`;
  
  renderOrder();
  renderMenu('Café'); 
}

function showTables() {
  document.getElementById('view-order').classList.add('hidden');
  document.getElementById('view-tables').classList.remove('hidden');
  mesaActual = null;
  renderTables();
}

// 5. Gestión del Pedido
function renderOrder() {
  const orderContainer = document.getElementById('order-items');
  const mesa = mesas[mesaActual];
  orderContainer.innerHTML = '';

  if (mesa.items.length === 0) {
    orderContainer.innerHTML = '<p class="text-slate-500 text-sm text-center py-4">Mesa vacía. Agrega productos abajo.</p>';
  } else {
    mesa.items.forEach((item, index) => {
      orderContainer.innerHTML += `
        <div class="flex justify-between items-center bg-white/5 p-2.5 rounded-lg border border-white/5">
          <div class="flex flex-col">
            <span class="text-sm font-semibold">${item.nombre}</span>
            <span class="text-xs text-slate-400">$${item.precio}</span>
          </div>
          <button onclick="removeItem(${index})" class="bg-red-500/20 text-red-400 w-8 h-8 rounded-full flex items-center justify-center font-bold active:scale-90">✕</button>
        </div>
      `;
    });
  }
  
  document.getElementById('order-total').textContent = `$${mesa.total}`;
}

function addItem(nombre, precio) {
  mesas[mesaActual].items.push({ nombre, precio });
  mesas[mesaActual].total += precio;
  saveData();
  renderOrder();
}

function removeItem(index) {
  const precio = mesas[mesaActual].items[index].precio;
  mesas[mesaActual].items.splice(index, 1);
  mesas[mesaActual].total -= precio;
  saveData();
  renderOrder();
}

// 6. Catálogo Dinámico
function renderMenu(categoriaStr) {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.textContent === categoriaStr) {
      btn.className = 'cat-btn bg-white/20 px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap text-white';
    } else {
      btn.className = 'cat-btn bg-white/5 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap text-slate-400';
    }
  });

  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  const filtrados = catalogo.filter(item => item.cat === categoriaStr);
  
  filtrados.forEach(item => {
    const btn = document.createElement('button');
    btn.className = 'bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl flex flex-col text-left active:bg-purple-500/20 transition-colors';
    btn.innerHTML = `
      <span class="text-sm font-semibold leading-tight">${item.nombre}</span>
      <span class="text-xs text-purple-400 mt-1 font-bold">+$${item.precio}</span>
    `;
    btn.onclick = () => addItem(item.nombre, item.precio);
    grid.appendChild(btn);
  });
}

// 7. Cobro y Cierre
function openCheckout() {
  if (mesas[mesaActual].total === 0) return alert("La mesa está vacía.");
  document.getElementById('checkout-total').textContent = `$${mesas[mesaActual].total}`;
  document.getElementById('cash-input').value = '';
  document.getElementById('change-display').textContent = '$0';
  document.getElementById('checkout-modal').classList.remove('hidden');
  document.getElementById('cash-input').focus();
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.add('hidden');
}

function calculateChange() {
  const cash = parseFloat(document.getElementById('cash-input').value) || 0;
  const total = mesas[mesaActual].total;
  const change = cash - total;
  
  const display = document.getElementById('change-display');
  if (change < 0) {
    display.textContent = "Falta dinero";
    display.classList.replace('text-green-400', 'text-red-400');
  } else {
    display.textContent = `$${change}`;
    display.classList.replace('text-red-400', 'text-green-400');
  }
}

function confirmPayment() {
  const totalPagado = mesas[mesaActual].total;
  
  totalVendidoDia += totalPagado;
  localStorage.setItem('pos_ventas_dia', totalVendidoDia);
  
  mesas[mesaActual] = { items: [], total: 0 };
  saveData();
  
  closeCheckout();
  showTables();
}

// 8. Utilidad para guardar
function saveData() {
  localStorage.setItem('pos_mesas', JSON.stringify(mesas));
}

// 9. Reset de Ventas (Botón Secreto Nutria)
function resetVentasDia() {
  const confirmacion = confirm("⚠️ ¿Seguro que quieres cerrar la caja y poner la venta acumulada en $0? (Las mesas que sigan abiertas no se borrarán)PD ya vamonos a dormir.");
  
  if (confirmacion) {
    totalVendidoDia = 0;
    localStorage.setItem('pos_ventas_dia', 0);
    document.getElementById('daily-total').textContent = `$0`;
  }
}

// Arrancar app
renderTables();
