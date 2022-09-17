import Link from "next/link";

function Pokemons({ data }) {
  <main className="px-4 py-12">
    <h1 className="text-5xl text-green-500 text-center">
      Pokedex - Gotta Catch em all!
    </h1>
    <div className="flex flex-wrap w-full justify-center mt-8">
      {/* {data.map((pokemon) => {
        // const poke_id = pokemon.url.split("/")[6];
        // const padded_poke_id = poke_id.padStart(3, "0");
        return (
          <Link href={`/pokemon/${poke_id}`} key={poke_id}>
            <div className="mr-3 mb-4 bg-gray-200 p-3 rounded text-center cursor-pointer">
              <div className="w-32">
                <img
                  src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${padded_poke_id}.png`}
                  alt="pokemon-img"
                  loading="lazy"
                />
              </div>
              <h3 className="capitalize mt-2">{pokemon.name}</h3>
            </div>
          </Link>
        );
      })} */}
      {console.log(data)}
    </div>
  </main>;
}

// This gets called on every request
export async function getStaticProps(context) {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
    const { results } = await res.json();
    const pokemon = results.map((pokeman, index) => {
      const paddedId = ("00" + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokeman, image };
    });
    return {
      props: { pokemon },
    };
  } catch (err) {
    console.error(err);
  }
}

export default Pokemons;
