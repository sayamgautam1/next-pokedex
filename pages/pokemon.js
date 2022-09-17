import React from "react";

import Link from "next/Link";
export default function pokemon({ mon }) {
  return (
    <main title={mon.name}>
      <h1 className="text-4xl mb-2 text-center capitalize">
        {mon.id}. {mon.name}
      </h1>
      <img className="mx-auto" src={mon.image} alt={mon.name} />
      <p>
        <span className="font-bold mr-2">Weight:</span> {mon.weight}
      </p>
      <p>
        <span className="font-bold mr-2">Height:</span>
        {mon.height}
      </p>
      <h2 className="text-2xl mt-6 mb-2">Types</h2>
      {mon.types.map((type, index) => (
        <p key="index">{type.type.name}</p>
      ))}
      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
      </p>
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const mon = await res.json();
    const paddedId = ("00" + id).slice(-3);
    mon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
      props: { mon },
    };
  } catch (err) {
    console.error(err);
  }
}
