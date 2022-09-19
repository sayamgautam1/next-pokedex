import Header from "./compnents/Header";
import Link from "next/Link";

export default function Home() {
  return (
    <>
      <Header title={"POKEDEX"} />
      <main className="px-4 py-12 flex flex-wrap w-full justify-center mt-8">
        <Link href="./regions/kanto">
          <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  w-screen m-5 cursor-pointer">
            <img
              class="rounded-full -mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 md:h-32 md:w-32 border-[6px] border-white bg-white "
              src="https://archives.bulbagarden.net/media/upload/2/25/LGPE_Kanto_Map.png"
              alt=""
            />
            <h5 class="m-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              KANTO
            </h5>
          </div>
        </Link>
        <Link href="./regions/jhoto">
          <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  w-screen m-5 cursor-pointer">
            <img
              class="rounded-full -mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 md:h-32 md:w-32 border-[6px] border-white bg-white"
              src="https://archives.bulbagarden.net/media/upload/6/64/JohtoMap.png"
              alt=""
            />

            <h5 class="m-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              JHOTO
            </h5>
          </div>
        </Link>
        <Link href="./regions/hoenn">
          <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  w-screen m-5 cursor-pointer">
            <img
              class="rounded-full -mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 md:h-32 md:w-32 border-[6px] border-white bg-white"
              src="https://archives.bulbagarden.net/media/upload/8/85/Hoenn_ORAS.png"
              alt=""
            />

            <h5 class="m-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              HOENN
            </h5>
          </div>
        </Link>
        <Link href="./regions/sinnoh">
          <div class="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  w-screen m-5 cursor-pointer">
            <img
              class="rounded-full -mt-10 md:-mt-16 ml-3 md:ml-0 h-20 w-20 md:h-32 md:w-32 border-[6px] border-white bg-white"
              src="https://archives.bulbagarden.net/media/upload/0/08/Sinnoh_BDSP_artwork.png"
              alt=""
            />

            <h5 class="m-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              SINNOH
            </h5>
          </div>
        </Link>
      </main>
      ;
    </>
  );
}
