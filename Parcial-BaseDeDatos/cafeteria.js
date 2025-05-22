db.cafeteria.insertMany([
    {
        _id: 1,
        tipo: "espresso",
        ingredientes: ['chocolate', 'canela'],
        peso: 250,
        intensidad: 'alta',
        precio: [
            {tipo: 'efectivo', precio: 480},
            {tipo: 'tarjeta', precio: 520}
        ],
        contieneLeche: false,
        tostadora: {
            localidad: 'Buenos Aires',
            nombre: 'Tostaduria Central',
            cuit: '20-12345678-9'
        }
    },
    {
        _id: 2,
        tipo: "filtrado",
        ingredientes: ['vainilla', 'caramelo'],
        peso: 300,
        intensidad: 'media',
        precio: [
            {tipo: 'efectivo', precio: 650},
            {tipo: 'tarjeta', precio: 700}
        ],
        contieneLeche: true,
        tostadora: {
            localidad: 'Cordoba',
            nombre: 'Café del Valle',
            cuit: '20-87654321-0'
        }
    },
    {
        _id: 3,
        tipo: "cold brew",
        ingredientes: ['chocolate', 'vainilla'],
        peso: 500,
        intensidad: 'baja',
        precio: [
            {tipo: 'efectivo', precio: 800},
            {tipo: 'tarjeta', precio: 850}
        ],
        contieneLeche: false,
        tostadora: {
            localidad: 'Mendoza',
            nombre: 'Montaña Coffee',
            cuit: '20-11223344-5'
        }
    },
    {
        _id: 4,
        tipo: "descafeinado",
        ingredientes: ['caramelo'],
        peso: 200,
        intensidad: 'baja',
        precio: [
            {tipo: 'efectivo', precio: 420},
            {tipo: 'tarjeta', precio: 460}
        ],
        contieneLeche: true,
        tostadora: {
            localidad: 'Rosario',
            nombre: 'Granos Dorados',
            cuit: '20-55667788-1'
        }
    },
    {
        _id: 5,
        tipo: "espresso",
        ingredientes: ['vainilla', 'canela', 'chocolate'],
        peso: 250,
        intensidad: 'alta',
        precio: [
            {tipo: 'efectivo', precio: 550},
            {tipo: 'tarjeta', precio: 600}
        ],
        contieneLeche: false,
        tostadora: {
            localidad: 'San Justo',
            nombre: 'Artesanos del Café',
            cuit: '20-99887766-2'
        }
    },
    {
        _id: 6,
        tipo: "filtrado",
        ingredientes: ['almendra', 'miel'],
        peso: 350,
        intensidad: 'media',
        precio: [
            {tipo: 'efectivo', precio: 720},
            {tipo: 'tarjeta', precio: 770}
        ],
        contieneLeche: true,
        tostadora: {
            localidad: 'Bariloche',
            nombre: 'Patagonia Brew',
            cuit: '20-44556677-3'
        }
    },
    {
        _id: 7,
        tipo: "cold brew",
        ingredientes: ['caramelo', 'chocolate'],
        peso: 250,
        intensidad: 'alta',
        precio: [
            {tipo: 'efectivo', precio: 480},
            {tipo: 'tarjeta', precio: 520}
        ],
        contieneLeche: false,
        tostadora: {
            localidad: 'Salta',
            nombre: 'Altura Coffee',
            cuit: '20-33445566-4'
        }
    },
    {
        _id: 8,
        tipo: "capuccino",
        ingredientes: ['canela', 'vainilla'],
        peso: 300,
        intensidad: 'media',
        precio: [
            {tipo: 'efectivo', precio: 200},
            {tipo: 'tarjeta', precio: 300}
        ],
        contieneLeche: true,
        tostadora: {
            localidad: 'Mar del Plata',
            nombre: 'Costa Café',
            cuit: '20-22334455-6'
        }
    },
    {
        _id: 9,
        tipo: "latte",
        ingredientes: ['vainilla', 'caramelo', 'canela'],
        peso: 260,
        intensidad: 'baja',
        precio: [
            {tipo: 'efectivo', precio: 620},
            {tipo: 'tarjeta', precio: 670}
        ],
        contieneLeche: true,
        tostadora: {
            localidad: 'Tucumán',
            nombre: 'Norte Tostado',
            cuit: '20-66778899-7'
        }
    },
    {
        _id: 10,
        tipo: "descafeinado",
        ingredientes: ['chocolate', 'almendra'],
        peso: 260,
        intensidad: 'alta',
        precio: [
            {tipo: 'efectivo', precio: 490},
            {tipo: 'tarjeta', precio: 540}
        ],
        contieneLeche: false,
        tostadora: {
            localidad: 'Neuquén',
            nombre: 'Café Patagonico',
            cuit: '20-11998877-8'
        }
    },

])