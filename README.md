# ParcialBaseDeDatos2-NoeliaStorgato
## Enunciado/s:
Crear una base llamada cafetería, con una colección de cafés especiales que tenga los siguientes datos:
• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
• array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
• peso en gramos
• intensidad (baja, media, alta)
• array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
• si contiene leche (booleano)
• objeto tostador con localidad, nombre y cuit.
Cargar 10 cafés especiales.

Los datos a cargar en cada entidad deben ser útiles a las consultas que se detallan a continuación.
Objetivos de Aprobación No Directa (Calificación de 4 a 5 puntos):
1) Crear el script .js con la creación de la base de datos y las colecciones.
2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.
3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
4) Listar tipo y peso de los cafés que tienen una intensidad “media”.
5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
Objetivos de Aprobación Directa (Calificación de 6 a 10 puntos):
6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
descendente.
7) Mostrar la sumar del peso de cada tipo de Café.
8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
10) Eliminar los cafés cuyo peso sea menor o igual a 210.
