# Proyecto NODE-JS reto técnico Sophos

Este proyecto fue el más complejo de construir, pues no tenía conocimientos de REACT.

Para mejorar un poco la presentación, me tomé la libertad de agregar la librería Ant Desing https://ant.design/docs/react/introduce la cual utilizo mucho pero con VueJS.

## Cómo funciona
Al iniciar la aplicación se carga el archivo index.js el cual hace un llamado al render del componente App en App.js

Cambié el componente de función a clase ya que me siento más comodo usando esta estructura.

Al presionar el boton "Incrementar Contador" se dispara el metodo increment del componente. En este caso se utilzó el state para almacenar el valor del contador.

Más abajo se encuentra una lista donde se puede seleccionar el tipo de filtro a aplicar, cuando se presioa el boton "Buscar" antd realiza las validaciones del formulario y dispara el metodo onFinish delcomponente, este metodo hace una petición get al api craead en el proyecto anterior.

La lista de resultados permite dar clic en un boton "like" pero solo cambia los valores en memoria, no envía los datos al servidor.

## Instalación 🔧

```
npm install
```

## Ejecutar 🚀
```
npm start
```
