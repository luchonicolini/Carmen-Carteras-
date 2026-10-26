// Catálogo centralizado de productos de Carmen Marroquinería
const PRODUCTS = [
    {
        id: 1,
        name: "Bolso Tote Clásico",
        category: "Bolsos",
        price: "$189.00",
        priceNum: 189,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "El Bolso Tote Clásico es la combinación perfecta de estilo atemporal y funcionalidad cotidiana. Confeccionado a mano con cuero curtido vegetal de grano completo, cuenta con un amplio compartimento principal para llevar todo lo que necesitas con la máxima distinción.",
        specs: [
            "Material: Cuero Vacuno Genuino Curtido Vegetal",
            "Dimensiones: 40 cm x 30 cm x 15 cm",
            "Cierre: Cremallera superior metálica YKK en tono bronce",
            "Bolsillos: 1 bolsillo interior con cremallera y 2 compartimentos abiertos",
            "Fabricación: Hecho a mano por artesanos en España"
        ]
    },
    {
        id: 2,
        name: "Cartera Crossbody",
        category: "Carteras",
        price: "$145.00",
        priceNum: 145,
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        images: [
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Nuestra Cartera Crossbody ofrece libertad de movimiento con una silueta estilizada y moderna. Compacta pero sorprendentemente espaciosa, mantiene tus esenciales organizados y protegidos.",
        specs: [
            "Material: Cuero Napa Suave de Primera Selección",
            "Correa: Ajustable y desmontable (110 - 125 cm)",
            "Dimensiones: 22 cm x 16 cm x 8 cm",
            "Herrajes: Baño de oro 18k cepillado",
            "Forro: Sarga de algodón orgánico 100%"
        ]
    },
    {
        id: 3,
        name: "Billetera Minimalista",
        category: "Billeteras",
        price: "$55.00",
        priceNum: 55,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
        images: [
            "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1624222247344-550fb60583dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Diseñada para quienes valoran la simplicidad y la elegancia sin bultos. Esta billetera ultra delgada cabe perfectamente en cualquier bolsillo manteniendo tarjetas y billetes al alcance.",
        specs: [
            "Material: Cuero de Grano Completo Encerado",
            "Capacidad: 6 tarjetas + compartimento central para billetes",
            "Protección: Bloqueo RFID incorporado",
            "Dimensiones: 11 cm x 8.5 cm x 0.6 cm"
        ]
    },
    {
        id: 4,
        name: "Bolso de Viaje",
        category: "Bolsos",
        price: "$299.00",
        priceNum: 299,
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Tu compañero ideal para escapadas de fin de semana o viajes ejecutivos. Robusto, de gran porte y confeccionado en cuero curtido grueso que desarrollará una pátina exquisita con el tiempo.",
        specs: [
            "Material: Cuero Rústico Hidrofugado",
            "Dimensiones: 52 cm x 32 cm x 26 cm (apto cabina)",
            "Correa de hombro: Reforzada con hombrera acolchada",
            "Base: Protegida con 5 tacos metálicos de apoyo"
        ]
    },
    {
        id: 5,
        name: "Bolso de Mano",
        category: "Carteras",
        price: "$129.00",
        priceNum: 129,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=871&q=80",
        images: [
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Un accesorio sofisticado y femenino para eventos especiales o salidas casuales de noche. Su estructura geométrica y costuras a la vista realzan el trabajo manual de nuestros artesanos.",
        specs: [
            "Material: Cuero Semibrillante Acabado Satinado",
            "Cierre: Broche imantado oculto de alta fijación",
            "Asa: Asa corta fija y cadena desmontable de eslabones pulidos",
            "Dimensiones: 25 cm x 15 cm x 6 cm"
        ]
    },
    {
        id: 6,
        name: "Bolso Satchel",
        category: "Bolsos",
        price: "$210.00",
        priceNum: 210,
        image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=763&q=80",
        images: [
            "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=763&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
        ],
        description: "Inspirado en la marroquinería europea tradicional con una reinterpretación contemporánea. Estructurado, espacioso y versátil para acompañar tanto jornadas laborales como paseos urbanos.",
        specs: [
            "Material: Cuero Rígido Vacuno Premium",
            "Capacidad: Apto para iPad y notebooks de hasta 13 pulgadas",
            "Asa: Doble asa de mano reforzada + correa bandolera",
            "Dimensiones: 33 cm x 24 cm x 11 cm"
        ]
    },
    {
        id: 7,
        name: "Mochila de Cuero",
        category: "Bolsos",
        price: "$275.00",
        priceNum: 275,
        image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&auto=format&fit=crop&w=798&q=80",
        images: [
            "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?ixlib=rb-4.0.3&auto=format&fit=crop&w=798&q=80",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=876&q=80"
        ],
        description: "La comodidad de una mochila combinada con el prestigio y acabado del cuero artesanal. Diseñada con correas ergonómicas y un panel trasero acolchado para máxima comodidad durante todo el día.",
        specs: [
            "Material: Cuero Envejecido con acabado encerado",
            "Bolsillos: 2 exteriores frontales con cremallera + bolsillo antirrobo trasero",
            "Compartimento interior: Acolchado para laptop de 14 pulgadas",
            "Dimensiones: 41 cm x 29 cm x 13 cm"
        ]
    },
    {
        id: 8,
        name: "Bolso Clutch",
        category: "Carteras",
        price: "$95.00",
        priceNum: 95,
        image: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
        images: [
            "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=871&q=80",
            "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
            "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
        ],
        description: "Minimalismo puro en formato sobre. Confeccionado en cuero napa extra suave con forro interior de tacto sedoso, ideal para portar el teléfono, llaves y tarjetas con sobria distinción.",
        specs: [
            "Material: Cuero Vacuno Napa Premium",
            "Cierre: Cremallera superior con tirador de cuero artesanal",
            "Interior: Forrado con ranura para 3 tarjetas",
            "Dimensiones: 27 cm x 17 cm x 2 cm"
        ]
    }
];

// Configuración general de la marca
const BRAND_CONFIG = {
    name: "Carmen",
    whatsappNumber: "5491100000000", // Reemplazar con el número de teléfono del negocio
    cartStorageKey: "carmen_cart"
};
