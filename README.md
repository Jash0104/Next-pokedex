
# 🐱‍👤 Pokémon Page: Un viaje hacia la maestría Pokémon 🌟

¡Bienvenidos a **Pokémon Page**! 🎉 ¿Siempre has querido ver los movimientos de un Pokémon de la manera más estilosa y con un toque *tailwindesco*? ¡Has llegado al lugar adecuado! 🚀

Este pequeño proyecto usa **Next.js** y la **PokeAPI** para desplegar una página única para cada Pokémon, desde el #1 Bulbasaur hasta el #151 Mew (sí, ese lindo legendario que nadie nunca vio pero todos creyeron tener en su Game Boy) hasta más allá!!!. 

¡Prepárate para adentrarte en el mundo de los sprites, tipos, y movimientos con estilos *tailwind* dignos de un entrenador élite! 💪

## 🌟 Características principales

- **Estilos dinámicos**: Cada movimiento tiene su propio color basado en el tipo de Pokémon. ¡Ojo! No todos los movimientos son iguales, y aquí te lo hacemos notar con colores chulísimos. 🤩
- **Sprites regulares y shiny**: ¿Cansado de ver siempre el mismo sprite? Aquí puedes comparar los sprites estándar con los sprites *shiny*. ¡Brillan más que una MT90! 💥
- **Movimientos estilizados**: ¿Quieres ver el **Thunderbolt** en un amarillo eléctrico? ¿O el **Flamethrower** en un rojo ardiente? Todo está aquí, con un efecto `hover` suave como la seda. 🎨

## 🚀 ¿Cómo funciona?

1. **Obtenemos el Pokémon**: Usamos la **PokeAPI** para traer la información de cada Pokémon basado en su ID o nombre. ¿Quién necesita viajar a Kanto cuando tienes una API?
2. **Movimientos y tipos**: Extraemos los movimientos del Pokémon y luego vamos por más datos para obtener el tipo de cada movimiento. Esto es como si tuvieras una Pokédex pero hecha de JSON.
3. **Renderizado dinámico**: Usamos **Next.js** con **TailwindCSS** para renderizar dinámicamente la página de cada Pokémon con un look que hasta Misty aprobaría.

## 🛠 Tecnologías usadas

- **Next.js**: El motor que lo impulsa todo. ¡SSR y rutas estáticas a tope!
- **TailwindCSS**: Los estilos como una tormenta perfecta. Aquí cada clase tiene su misión.
- **PokeAPI**: Tu Pokédex online. Trae la información que necesitas sin tener que visitar al Profesor Oak.
- **React** y **TypeScript**: Porque nos gusta que nuestro código sea tan fuerte como un Charizard a nivel 100.

## 📦 Instalación

1. Clona este repo (¡es más fácil que atrapar un Magikarp!):
    ```bash
    git clone https://github.com/Jash0104/next-pokedex.git
    cd pokemon-page
    ```
2. Instala las dependencias (prepárate para la magia):
    ```bash
    npm install
    ```
3. Arranca el servidor local (¡el viaje Pokémon comienza aquí!):
    ```bash
    npm run dev
    ```
4. Abre tu navegador en `http://localhost:3000` y comienza tu travesía.

## 🧠 Cosas interesantes que deberías saber

- **getPokemonById**: La función mágica que trae al Pokémon de la PokeAPI. Si falla, llamamos al infame `notFound()`. 😱
- **generateStaticParams**: Preparamos las rutas estáticas para los primeros 151 Pokémon. ¿Por qué 151? Porque sabemos que amas la nostalgia.
- **getPokemonMovementType**: No solo traemos los movimientos, ¡también su tipo! Así es como sabemos que **Hydro Pump** es de tipo agua. 💧
- **TailwindCSS y hover**: Un efecto de hover suave para que tus movimientos luzcan más frescos que una fiesta en Ciudad Azulona.

## 🐞 Notas de errores (aunque seguro no los verás)

Si por alguna razón algo falla (¡un Rattata se metió en los cables!), lanzaremos una página de **not found** porque, a veces, hasta el mejor entrenador no encuentra lo que busca.
