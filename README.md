# Centinela IA

Prototipo para detectar obstáculos recurrentes durante la incorporación de personal y convertirlos en acciones revisadas por el responsable del proceso.

## Primera demostración local

Con Node.js, ejecutar desde la carpeta del repositorio:

```sh
node demo.mjs
```

La simulación carga dos reportes ficticios sobre instrucciones contradictorias y procesa un tercero. Muestra cuándo se activa la regla de alerta. Esta primera versión recibe una categoría ya asignada. El siguiente paso es clasificar el texto mediante OpenAI y validar su respuesta antes de aplicar la regla.

## Flujo del prototipo

1. Google Forms recibe un comentario sobre el trabajo y Google Sheets lo registra.
2. Un disparador de Apps Script envía el registro al servidor con un identificador único.
3. OpenAI clasifica el comentario en una categoría permitida o indica que requiere revisión.
4. El servidor activa una alerta si recibe tres reportes distintos del mismo tema y proceso en siete días.
5. Una persona confirma o descarta la alerta, asigna una acción y registra su cierre.
6. La demo pública muestra casos ficticios y permite probar el recorrido desde el envío hasta el seguimiento.

## Plan de trabajo

| Día | Resultado |
| --- | --- |
| 1 | Validar el proceso con una persona del equipo que lo conozca y probar la regla con casos representativos. |
| 2 | Conectar Forms, Sheets y OpenAI. Comprobar que un reintento del mismo registro no cuente dos veces. |
| 3 | Construir el tablero de alertas y acciones. Publicar una demo con datos ficticios. |
| 4 | Comparar contra la revisión manual, medir latencia y probar el acceso sin cuenta desde un celular. |

Para la comparación se usará el mismo lote de casos: tiempo hasta detectar el patrón, patrones detectados y falsas alertas. Los comentarios ambiguos quedarán para revisión humana. La demo pública utilizará datos ficticios y un límite de ejecuciones.
