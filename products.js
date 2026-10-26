// Catálogo centralizado de productos de Carmen Atelier
const PRODUCTS = [
    {
        id: 1,
        name: "Bolso Isabel",
        subtitle: "Cuero vacuno curtido vegetal",
        category: "Bolsos",
        price: "$385.000",
        priceNum: 385000,
        allowMonogram: true,
        colors: [
            {
                name: "Suela Caramelo",
                hex: "#BF7C43",
                image: "images/bag-isabel.svg"
            },
            {
                name: "Habano Tostado",
                hex: "#7B6047",
                image: "images/bag-alba.svg"
            },
            {
                name: "Borgoña Profundo",
                hex: "#642232",
                image: "images/bag-lola.svg"
            }
        ],
        image: "images/bag-isabel.svg",
        images: [
            "images/bag-isabel.svg",
            "images/bag-alba.svg",
            "images/bag-lola.svg",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "El Bolso Isabel es una oda a la tradición marroquinera porteña. Confeccionado íntegramente a mano en cuero vacuno curtido al vegetal, presenta una estructura refinada con costura artesanal a la vista y herrajes de latón cepillado.",
        specs: [
            "Material: Cuero Vacuno Genuino Curtido Vegetal de grano entero",
            "Dimensiones: 34 cm x 26 cm x 13 cm",
            "Cierre: Broche de latón macizo con giro de seguridad",
            "Costura: Hilo encerado de lino cosido puntada por puntada",
            "Origen: Hecho a mano en Buenos Aires, Argentina"
        ]
    },
    {
        id: 2,
        name: "Tote Alba",
        subtitle: "Cuero plena flor",
        category: "Bolsos",
        price: "$452.000",
        priceNum: 452000,
        allowMonogram: true,
        colors: [
            {
                name: "Habano Tostado",
                hex: "#7B6047",
                image: "images/bag-alba.svg"
            },
            {
                name: "Suela Caramelo",
                hex: "#BF7C43",
                image: "images/bag-isabel.svg"
            },
            {
                name: "Borgoña Profundo",
                hex: "#642232",
                image: "images/bag-lola.svg"
            }
        ],
        image: "images/bag-alba.svg",
        images: [
            "images/bag-alba.svg",
            "images/bag-isabel.svg",
            "images/bag-lola.svg",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "El Tote Alba está creado para acompañarte durante décadas. Su cuero plena flor adquiere una pátina singular y profunda con el paso del tiempo y el uso diario. Espacioso, estructurado y de sobriedad absoluta.",
        specs: [
            "Material: Cuero Plena Flor curtido lento al vegetal",
            "Dimensiones: 38 cm x 30 cm x 15 cm",
            "Interior: Bolsillo porta-documentos y mosquetón para llaves",
            "Garantía: 5 años de garantía artesanal de taller",
            "Origen: Buenos Aires, Argentina"
        ]
    },
    {
        id: 3,
        name: "Cartera Lola",
        subtitle: "Cuero nobuck suave",
        category: "Carteras",
        price: "$228.000",
        priceNum: 228000,
        allowMonogram: true,
        colors: [
            {
                name: "Borgoña Profundo",
                hex: "#642232",
                image: "images/bag-lola.svg"
            },
            {
                name: "Suela Caramelo",
                hex: "#BF7C43",
                image: "images/bag-isabel.svg"
            },
            {
                name: "Habano Tostado",
                hex: "#7B6047",
                image: "images/bag-alba.svg"
            }
        ],
        image: "images/bag-lola.svg",
        images: [
            "images/bag-lola.svg",
            "images/bag-isabel.svg",
            "images/bag-alba.svg",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
        ],
        description: "Silueta clásica con el toque aterciopelado del cuero nobuck seleccionado a mano. Ligera, equilibrada y con la versatilidad precisa para llevar de la mañana a la noche.",
        specs: [
            "Material: Cuero Nobuck Seleccionado y Napa Premium",
            "Dimensiones: 25 cm x 19 cm x 9 cm",
            "Correa: Doble asa de mano con opción a bandolera desmontable",
            "Herrajes: Baño de bronce envejecido",
            "Origen: Buenos Aires, Argentina"
        ]
    },
    {
        id: 4,
        name: "Billetera Atelier",
        subtitle: "Cuero vacuno curtido vegetal",
        category: "Billeteras",
        price: "$85.000",
        priceNum: 85000,
        allowMonogram: true,
        colors: [
            {
                name: "Suela Natural",
                hex: "#BF7C43",
                image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
            },
            {
                name: "Habano Tostado",
                hex: "#7B6047",
                image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
            },
            {
                name: "Negro Carbón",
                hex: "#1E1E1E",
                image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
            }
        ],
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        images: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Compacta y de perfil ultrafino, cosida a mano con hilo encerado. Cuatro ranuras para tarjetas y fuelle central para billetes doblados.",
        specs: [
            "Material: Cuero curtido al vegetal de 1.2 mm",
            "Dimensiones: 10.5 cm x 7.5 cm",
            "Capacidad: 6 a 8 tarjetas y billetes",
            "Origen: Buenos Aires, Argentina"
        ]
    },
    {
        id: 5,
        name: "Tarjetero de Bolsillo",
        subtitle: "Cuero curtido lento",
        category: "Billeteras",
        price: "$65.000",
        priceNum: 65000,
        allowMonogram: true,
        colors: [
            {
                name: "Caramelo Suela",
                hex: "#BF7C43",
                image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
            },
            {
                name: "Negro Mate",
                hex: "#1E1E1E",
                image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
            }
        ],
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        images: [
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "La expresión mínima del oficio. Tres ranuras biseladas a mano y cantos bruñidos con cera de abejas natural.",
        specs: [
            "Material: Cuero Flor Vacuno",
            "Dimensiones: 10 cm x 7 cm",
            "Origen: Buenos Aires, Argentina"
        ]
    },
    {
        id: 6,
        name: "Sobre Nocturno Carmen",
        subtitle: "Cuero napa extra suave",
        category: "Carteras",
        price: "$195.000",
        priceNum: 195000,
        allowMonogram: true,
        colors: [
            {
                name: "Borgoña Profundo",
                hex: "#642232",
                image: "images/bag-lola.svg"
            },
            {
                name: "Negro Azabache",
                hex: "#1A1A1A",
                image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
            }
        ],
        image: "images/bag-lola.svg",
        images: [
            "images/bag-lola.svg",
            "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Elegancia nocturna con caída impecable. Cuero napa suave con cierre metálico oculto y tacto sedoso.",
        specs: [
            "Material: Cuero Napa Suave de Grano Fino",
            "Dimensiones: 28 cm x 18 cm",
            "Origen: Buenos Aires, Argentina"
        ]
    }
];

// Configuración general de la marca
const BRAND_CONFIG = {
    name: "Carmen Atelier",
    tagline: "Atelier de cuero y marroquinería de lujo. Buenos Aires.",
    whatsappNumber: "5491100000000",
    freeShippingThreshold: 150000, // Envíos gratis desde $150.000 ARS
    cartStorageKey: "carmen_cart"
};
