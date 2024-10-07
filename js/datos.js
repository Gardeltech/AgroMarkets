const DatosAlimentos = [
  {
    nombre: "Manzana",
    id: 1,
    familia: "Rosaceae",
    genero: "Malus",
    precio: 2,
    valores_nutritivos: {
      calorias: 52,
      azucares: 10.4,
      carbohidratos: 13.8,
      proteinas: 0.3,
    },
    descripcion:
      "La manzana es una fruta dulce, rica en fibra y antioxidantes. La piel puede ser de color verde, amarilla o rojiza, y la pulpa, harinosa o crujiente, presenta un sabor que varía entre el agrio y el dulce. Contiene en su interior varias semillas de color marrón oscuro.",
    imagen: "img/manzana.jpg",
  },
  {
    nombre: "Plátano",
    id: 2,
    familia: "Musaceae",
    genero: "Musa",
    precio: 1.5,
    valores_nutritivos: {
      calorias: 89,
      azucares: 12.2,
      carbohidratos: 22.8,
      proteinas: 1.1,
    },
    descripcion:
      "El plátano es una fruta tropical rica en potasio y energía. Procedente del árbol que recibe el mismo nombre o banano. Tiene forma alargada o ligeramente curvada. La piel es gruesa, de color amarillo y fácil de pelar, y la pulpa es blanca o amarillenta y carnosa.",
    imagen: "img/platano.jpg",
  },
  {
    nombre: "Fresa",
    id: 3,
    familia: "Rosaceae",
    genero: "Fragaria",
    precio: 1.99,
    valores_nutritivos: {
      calorias: 32,
      azucares: 4.9,
      carbohidratos: 7.7,
      proteinas: 0.7,
    },
    descripcion:
      "La fresa es una fruta roja y jugosa, rica en vitamina C. Tiene forma cónica o casi redonda, de tamaño variable según la especie, coronada por sépalos verdes, de color rojo y varía de ácido a muy dulce. Lo que más caracteriza a esta fruta es su intenso aroma.",
    imagen: "img/fresa.jpg",
  },
  {
    nombre: "Uva",
    id: 4,
    familia: "Vitaceae",
    genero: "Vitis",
    precio: 0.79,
    valores_nutritivos: {
      calorias: 69,
      azucares: 15.5,
      carbohidratos: 18.1,
      proteinas: 0.7,
    },
    descripcion:
      "La uva es una fruta pequeña y dulce, utilizada para hacer vino y jugos. Las uvas tienen forma esférica, son carnosas, jugosas, y se agrupan en racimos. La cáscara es delgada pero resistente. Su color varía del verde limón al rojo. La pulpa es aromática y dulce.",
    imagen: "img/uvas.jpg",
  },
  {
    nombre: "Kiwi",
    id: 5,
    familia: "Actinidiaceae",
    genero: "Actinidia",
    precio: 2.2,
    valores_nutritivos: {
      calorias: 61,
      azucares: 9.0,
      carbohidratos: 14.7,
      proteinas: 1.1,
    },
    descripcion:
      "El kiwi es una fruta exótica con un sabor único y alto contenido de vitamina C. El kiwi es una baya con forma de elipse y cubierta de una piel repleta de vellosidades. Su piel es de color marrón oscuro, y encierra una pulpa verde y jugosa, de sabor ácido muy agradable.",
    imagen: "img/kiwi.jpg",
  },
  {
    nombre: "Zanahoria",
    id: 6,
    familia: "Apiaceae",
    genero: "Daucus",
    precio: 1.59,
    valores_nutritivos: {
      calorias: 41,
      azucares: 4.7,
      carbohidratos: 9.6,
      proteinas: 0.9,
    },
    descripcion:
      "La zanahoria es una raíz comestible rica en betacaroteno y fibra. Vegetal de color naranja y textura leñosa. Se le considera uno de los vegetales que más salud aporta al organismo humano gracias a su alto contenido de vitaminas y minerales.",
    imagen: "img/zanahoria.jpg",
  },
  {
    nombre: "Brócoli",
    id: 7,
    familia: "Brassicaceae",
    genero: "Brassica",
    precio: 2.49,
    valores_nutritivos: {
      calorias: 34,
      azucares: 1.7,
      carbohidratos: 6.6,
      proteinas: 2.8,
    },
    descripcion:
      "El brócoli es una verdura crucífera rica en vitaminas C y K. Esta planta posee abundantes cabezas florales carnosas de color verde, dispuestas en forma de árbol, sobre ramas que nacen de un grueso tallo comestible. La gran masa de cabezuelas está rodeada de hojas.",
    imagen: "img/brocoli.jpg",
  },
  {
    nombre: "Espinaca",
    id: 8,
    familia: "Amaranthaceae",
    genero: "Spinacia",
    precio: 0.99,
    valores_nutritivos: {
      calorias: 23,
      azucares: 0.4,
      carbohidratos: 3.6,
      proteinas: 2.9,
    },
    descripcion:
      "La espinaca es una verdura rica en hierro y vitaminas. Es una planta anual, dioica, cultivada como verdura por sus hojas comestibles grandes y de color verde muy oscuro. Su cultivo se puede realizar en cualquier época y se puede consumir fresca, cocida o frita.",
    imagen: "img/espinaca.jpg",
  },
  {
    nombre: "Pepino",
    id: 9,
    familia: "Cucurbitaceae",
    genero: "Cucumis",
    precio: 1.29,
    valores_nutritivos: {
      calorias: 16,
      azucares: 1.7,
      carbohidratos: 3.6,
      proteinas: 0.7,
    },
    descripcion:
      "El pepino es una verdura refrescante con alto contenido de agua. Es una hortaliza de verano, de forma alargada. Su piel es de color verde que se aclara hasta volverse amarilla en la madurez. Puede encontrarse en los mercados europeos a lo largo de todo el año.",
    imagen: "img/pepino.jpg",
  },
  {
    nombre: "Pimiento",
    id: 10,
    familia: "Solanaceae",
    genero: "Capsicum",
    precio: 2.89,
    valores_nutritivos: {
      calorias: 20,
      azucares: 2.4,
      carbohidratos: 4.7,
      proteinas: 0.9,
    },
    descripcion:
      "El pimiento es una verdura colorida y crujiente, rica en vitamina C.  Puede ser verde, rojo, amarillo, naranja e incluso ¡negro!. Su sabor puede ser dulce o picante y se consume crudo, cocido, asado; como guarnición en gran variedad de platos.",
    imagen: "img/pimiento.jpg",
  },
];

const sobreNosotros = [
  {
    titulo: "Sobre Nosotros",
    mision:
      "Bienvenido a AgroMarket, tu plataforma integral dedicada al mundo agrícola. Fundada con la misión de conectar a productores, proveedores y consumidores, AgroMarket nace de la pasión por el campo y el compromiso con la sostenibilidad. Somos una tienda comprometida con ofrecer productos frescos y de calidad, apoyando a productores locales y promoviendo una alimentación saludable. En AgroMarket, creemos que la agricultura es el corazón de nuestras comunidades. Nuestro objetivo es facilitar el acceso a productos agrícolas de calidad, promoviendo la compra y venta directa entre agricultores y consumidores. Queremos empoderar a los productores locales, dándoles las herramientas necesarias para prosperar en unmercado en constante evolución.",
  },
];
