const menuData = [
  {
    id: "dulce",
    nombre: "Crepas, Waffles & Hot Cakes",
    nota: "Elige tu masa base y personalízala a tu gusto.",
    subgrupos: [
      {
        titulo: "Elige tu Base",
        items: [
          { nombre: "Crepa Dulce", precio: "$60 - $90", desc: "1 ing: $60 • 2 ing: $70 • 3 ing: $80 • 4 ing: $90" },
          { nombre: "Hot Cakes", precio: "$35 - $65", desc: "1 ing: $35 • 2 ing: $45 • 3 ing: $55 • 4 ing: $65" },
          { nombre: "Waffles con Helado", precio: "$45 - $75", desc: "1 ing: $45 • 2 ing: $55 • 3 ing: $65 • 4 ing: $75" },
        ]
      },
      {
        titulo: "Ingredientes a Elegir",
        infoBox: "• Bases: Nutella, Philadelphia, Crema de Maní, Cajeta, Crema de Almendras.\n• Frutas: Fresa, Mango, Uva, Durazno, Plátano.\n• Mermeladas: Fresa, Zarzamora, Guayaba, Frutos Rojos, Piña, Manzana.\n\n✨ Toppings Premium (+ $20): Kinder Delice, Snickers o Conejito TURÍN."
      }
    ]
  },
  {
    id: "salado",
    nombre: "Cocina Salada",
    subgrupos: [
      {
        titulo: "Crepas Saladas",
        items: [
          { nombre: "Pepperoni", precio: "$80", desc: "Jamón, queso manchego y pepperoni" },
          { nombre: "Hawaiana", precio: "$80", desc: "Jamón, queso manchego y piña fresca" },
          { nombre: "Tres Quesos", precio: "$80", desc: "Queso philadelphia, manchego y Oaxaca" },
          { nombre: "Poblana", precio: "$90", desc: "Jamón, manchego, rajas con elote y crema poblana" },
          { nombre: "Champiñones", precio: "$90", desc: "Jamón, queso manchego y crema de champiñones" },
          { nombre: "A la Mexicana", precio: "$110", desc: "Carne de res sazonada a la mexicana y queso" },
          { nombre: "Cochinita Pibil", precio: "$110", desc: "Cochinita pibil receta de la casa, aguacate y queso" },
          { nombre: "Carnes Frías", precio: "$120", desc: "Jamón serrano, pepperoni, salami y manchego" },
          { nombre: "Del Mar", precio: "$120", desc: "Camarones salteados en salsa de queso y pimientos" },
        ]
      },
      {
        titulo: "Waffles Salados & Sandwiches",
        items: [
          { nombre: "Waffle Pepperoni", precio: "$50", desc: "Base waffle crujiente con queso y pepperoni" },
          { nombre: "Waffle Hawaiano", precio: "$60", desc: "Jamón, piña y queso derretido" },
          { nombre: "Waffle Cochinita", precio: "$80", desc: "Guisado casero de cochinita y queso" },
          { nombre: "Sándwich Clásico", precio: "$35", desc: "Jamón seleccionado y queso derretido" },
          { nombre: "Croissant de Jamón y Queso", precio: "$45", desc: "Hojaldrado horneado" },
          { nombre: "Club Sándwich", precio: "$45", desc: "Receta triple tradicional" },
          { nombre: "Croissant con Ensalada", precio: "$85", desc: "Acompañado de mezcla de lechugas frescas" },
        ]
      },
      {
        titulo: "Burritos & Pizzas Individuales",
        items: [
          { nombre: "Burrito Cochinita / Alambre", precio: "$45", desc: "Tortilla de harina con queso fundido" },
          { nombre: "Burrito Pastor Negro / Discada", precio: "$55", desc: "Especialidades norteñas" },
          { nombre: "Pizza Pepperoni / Hawaiana / 3 Quesos", precio: "$45", desc: "Porción individual artesanal" },
          { nombre: "Pizza Cochinita / Pastor / Mexicana", precio: "$60", desc: "Con guisado especial gratinado" },
        ]
      }
    ]
  },
  {
    id: "pastas",
    nombre: "Pastas",
    subgrupos: [
      {
        titulo: "Fettuccine & Especiales",
        items: [
          { nombre: "Fettuccine Alfredo", precio: "$80", desc: "Salsa cremosa de mantequilla y queso parmesano" },
          { nombre: "Fettuccine con Champiñones", precio: "$90", desc: "Salsa sedosa de champiñones salteados" },
          { nombre: "Fettuccine Salsa de Quesos", precio: "$90", desc: "Combinación de quesos finos fundidos" },
          { nombre: "Fettuccine Bolognese", precio: "$110", desc: "Salsa de jitomate reducción con carne de res" },
          { nombre: "Fettuccine del Mar", precio: "$120", desc: "Camarones al sartén con salsa de mantequilla" },
          { nombre: "Lasagna Tradicional", precio: "$110", desc: "Capas de pasta, carne bolognesa y gratín" },
        ]
      }
    ]
  },
  {
    id: "cafe-caliente",
    nombre: "Café Caliente",
    nota: "Leche especial +$10 • Shot extra +$10",
    subgrupos: [
      {
        titulo: "Espresso & Preparaciones",
        items: [
          { nombre: "Espresso", precio: "$40", desc: "Extracción pura 1 oz" },
          { nombre: "Espresso Doble", precio: "$55", desc: "Doble carga concentrada" },
          { nombre: "Americano", precio: "$50", desc: "Espresso con agua caliente filtrada" },
          { nombre: "Cappuccino Clásico", precio: "$60", desc: "Espresso, leche vaporizada y espuma sedosa" },
          { nombre: "Cappuccino de Sabor", precio: "$60", desc: "Vainilla, Rompope, Amaretto, Crema Irlandesa o Avellana" },
          { nombre: "Café Latte", precio: "$60", desc: "Textura suave y cremosa con notas de café" },
          { nombre: "Caramel Macchiato", precio: "$60", desc: "Vainilla, espresso y drizzle de caramelo" },
          { nombre: "Moka Caliente", precio: "$60", desc: "Chocolate artesanal, café y leche vaporizada" },
          { nombre: "Chocolate Tradicional / Abuelita", precio: "$60", desc: "Cremoso con receta de la casa" },
          { nombre: "Chocolate TURÍN", precio: "$60", desc: "Preparado con auténtico chocolate Turín" },
          { nombre: "Chai Latte / Té Matcha", precio: "$60", desc: "Especias finas o té verde japonés" },
        ]
      }
    ]
  },
  {
    id: "bebidas-frias",
    nombre: "Bebidas Frías",
    nota: "Leche especial +$10 • Toppings +$15",
    subgrupos: [
      {
        titulo: "Café Frío & Frappuccinos",
        items: [
          { nombre: "Americano Helado", precio: "$45 / $50", desc: "12 oz: $45 • 16 oz: $50" },
          { nombre: "Latte Helado (Varios sabores)", precio: "$50 / $60", desc: "12 oz: $50 • 16 oz: $60" },
          { nombre: "Matcha / Chai Helado", precio: "$65 / $75", desc: "12 oz: $65 • 16 oz: $75" },
          { nombre: "Frappuccino Clásico / Caramelo", precio: "$60", desc: "Hielo batido, leche y crema batida" },
          { nombre: "Frappuccino Baileys / Oreo / Rompope", precio: "$65 - $75", desc: "Ediciones especiales frappeadas" },
        ]
      },
      {
        titulo: "Refrescantes & Coctelería",
        items: [
          { nombre: "Sodas Italianas (16 oz)", precio: "$45", desc: "Blueberry, Frutos Rojos, Manzana Verde, Sandía, Maracuyá" },
          { nombre: "Smoothies de Fruta Natural", precio: "$55 / $65", desc: "Mango, Fresa, Kiwi, Piña Colada, Frutos Rojos, Coco" },
          { nombre: "Bubble Tea (16 oz)", precio: "$60", desc: "Taro, Matcha, Blueberry o Maracuyá con popping boba" },
          { nombre: "Malteadas Clásicas", precio: "$60", desc: "Fresa, Vainilla, Chocolate, Chicle, Mazapán u Oreo" },
          { nombre: "Carajillo", precio: "$75", desc: "Licor 43 batido en shaker con doble espresso" },
          { nombre: "Baileys on the Rocks", precio: "$65", desc: "Servido en vaso corto con hielo artesanal" },
        ]
      }
    ]
  },
  {
    id: "postres",
    nombre: "Postres",
    subgrupos: [
      {
        titulo: "Vitrina Dulce",
        items: [
          { nombre: "Panqué Casero", precio: "$25", desc: "Elote (con rompope), Plátano o Zanahoria" },
          { nombre: "Rebanada de Pastel", precio: "$30", desc: "Pregunta por las opciones del día" },
          { nombre: "Galletones Horneados", precio: "$45", desc: "Galleta de mantequilla con chispas" },
          { nombre: "Fresas o Duraznos con Crema", precio: "$55", desc: "Crema dulce montada de la casa" },
          { nombre: "Banana & Cheese", precio: "$55", desc: "Rodajas de plátano con mezcla de queso y miel" },
        ]
      }
    ]
  }
];

const tabsContainer = document.getElementById('category-tabs');
const menuContainer = document.getElementById('menu-container');

function renderMenu() {
  tabsContainer.innerHTML = '';
  menuContainer.innerHTML = '';

  menuData.forEach((cat, index) => {
    // Botón estilo iOS Dark Mode
    const tab = document.createElement('button');
    const isActive = index === 0;
    
    tab.className = `whitespace-nowrap px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
      isActive 
        ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
        : 'bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.04]'
    }`;
    tab.textContent = cat.nombre.split(',')[0].split('&')[0].trim();

    tab.onclick = () => {
      document.querySelectorAll('#category-tabs button').forEach(b => {
        b.className = 'whitespace-nowrap px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.04]';
      });
      tab.className = 'whitespace-nowrap px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.2)]';
      
      const target = document.getElementById(cat.id);
      const yOffset = -65;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    tabsContainer.appendChild(tab);

    // Sección
    const section = document.createElement('section');
    section.id = cat.id;

    let html = `
      <div class="mb-4">
        <h2 class="text-2xl font-bold tracking-tight text-white">${cat.nombre}</h2>
        ${cat.nota ? `<p class="text-[12px] font-medium text-purple-300 mt-0.5">${cat.nota}</p>` : ''}
      </div>
    `;

    cat.subgrupos.forEach(sub => {
      html += `
        <div class="mb-6">
          <h3 class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5 px-1">${sub.titulo}</h3>
      `;

      if (sub.infoBox) {
        html += `
          <div class="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-4 text-[13px] leading-relaxed text-slate-200 whitespace-pre-line font-normal backdrop-blur-md mb-3">
            ${sub.infoBox}
          </div>
        `;
      }

      if (sub.items) {
        // Tarjetas dark con borde sutil translúcido
        html += `<div class="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] divide-y divide-white/[0.05] overflow-hidden">`;
        sub.items.forEach(item => {
          html += `
            <div class="p-3.5 flex justify-between items-start gap-4 transition-colors hover:bg-white/[0.03]">
              <div class="flex-1">
                <h4 class="text-[14px] font-medium text-white leading-snug">${item.nombre}</h4>
                <p class="text-[12px] text-slate-400 mt-0.5 leading-normal font-light">${item.desc}</p>
              </div>
              <span class="text-[13px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-lg shrink-0">
                ${item.precio}
              </span>
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });

    section.innerHTML = html;
    menuContainer.appendChild(section);
  });
}

renderMenu();