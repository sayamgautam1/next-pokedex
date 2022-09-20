import Header from "../compnents/Header";
import Link from "next/Link";
export default function Home({ pokemon }) {
  return (
    <>
      <Header title={"POKEDEX"} />
      <main className="px-4 py-12">
        <h1 className="text-5xl text-green-500 text-center">
          Pokedex - Gotta Catch em all!
        </h1>
        <div className="flex flex-wrap w-full justify-center mt-8">
          {pokemon.map((pokeman, index) => (
            <Link href={`/pokemon/${index + 1}`}>
              <div
                className="mr-3 mb-4 bg-gray-200 p-3 rounded text-center cursor-pointer"
                key={index}
              >
                <div className="w-32">
                  <img src={pokeman.image} alt={pokeman.name} />
                </div>
                <div className="mr-2 font-bold capitalize">{pokeman.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      ;
    </>
  );
}

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
