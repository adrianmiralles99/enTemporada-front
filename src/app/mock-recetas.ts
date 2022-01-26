import { Receta } from '../app/receta';

export const RECETAS: Receta[] = [
    {
        id: 1, titulo: 'Tarta de Manzana', autor: 'alturano', img: "tartaManzana.jpg", comensales: 5, duracion: "3h", tipo: "Postre", dificultad: "Media",
        ingredientes: ["4 manzanas grandes", "2 huevos M", "250 ml. de leche entera", "250 g. de azúcar", "120 g. de harina de trigo de todo uso", "1 plancha de masa quebrada", "50 g. de mermelada de melocotón o albaricoque", "1 cda. de agua", "Molde desmoldable 18 cm."]
    },
    {
        id: 2, titulo: 'Hummus de Aguacate', autor: 'adrimigo', img: "hummus.jpg", comensales: 2, duracion: "2h", tipo: "Comida", dificultad: "Media",
        ingredientes: ["400 g de garbanzos cocidos", "1 aguacate maduro", "1 limón o lima", "2 cucharadas de semillas de sésamo o 1 cucharada de tahini", "3 cucharadas de aceite de oliva virgen extra", "Medio diente de ajo sin el germen central", "Media cucharadita de comino en polvo", "Sal y pimienta"]
    },
    {
        id: 3, titulo: 'Boniatos asados rellenos', autor: 'ByCharles', img: "boniatos.jpg", comensales: 4, duracion: "1h", tipo: "Comida", dificultad: "Difícil",
        ingredientes: ["4 boniatos grandes", "Aceite de Oliva virgen extra Morisca Carbonell", "200 g de bacón muy picado", "125 g de queso Monterey Jack o Cheddar", "4 cebolletas", "1-2 chiles rojos frescos", "Crema agria"]
    },
    {
        id: 4, titulo: 'Sopa de remolacha y yogur', autor: 'el_vikingo', img: "sopaRemolacha.jpg", comensales: 1, duracion: "30min", tipo: "Comida", dificultad: "Media",
        ingredientes: ["300g Remolacha cocida", "150g Pepino", "350g Manzana verde", "700g Yogur natural", "1 Limón", "1/2 Ajo", "1 cda Vinagre de Jerez", "Perejil", "Azúcar", "Sal", "Pimienta"]
    },
    {
        id: 5, titulo: 'Ensalada de calabaza asada', autor: 'Juan Monta Puercos', img: "ensalada.jpg", comensales: 3, duracion: "15min", tipo: "Comida", dificultad: "Fácil",
        ingredientes: ["800g Calabaza", "1/2 Cebolla", "50g Rúcula", "200g Tomates cherry de rama", "4 dientes de Ajo", "100g Quinoa blanca y roja", "100g Queso feta", "50g mix de frutos secos", "1-2 cdas Miel", "Sal", "Pimienta", "Aceite de Oliva", "Viangre balsamico (opcional)"]
    },
    {
        id: 6, titulo: 'Banana Split', autor: 'Jeni Electrica', img: "banana.jpg", comensales: 2, duracion: "30min", tipo: "Postre", dificultad: "Fácil",
        ingredientes: ["2 bananas", "2 fresas", "2 bolas de helado", "500 ml de nata liquida", "2 cucharas de azúcar", "2 cucharas de avellana picada", "Sirope de chocolate", "Menta (para decorar)"]
    },
    {
        id: 7, titulo: 'Risotto de verduras', autor: 'Ibai', img: "risotto.jpg", comensales: 4, duracion: "45min", tipo: "Comida", dificultad: "Media",
        ingredientes: ["400 g. de arroz para risotto Scotti (variedad carnalori)", "1 cebolla", "2 dientes de ajo", "1 calabacín", "1 manojo de espárragos", "1.2l de caldo de verduras", "100g de champiñones o setas de temporada","200ml de vino blanco","5g de romero", "100g de queso Parmesano, Parmigiano o Pecorino","Aceite de Oliva virgen extra", "Sal y pimienta recien molida"]
    },
];