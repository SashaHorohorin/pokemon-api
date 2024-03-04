
import {PokeService} from "@/services/poke.service";
import Main from "@/components/Main/Main";


export default async function Home() {
   const objPoke = await PokeService.getInfoPokemon()

  return (
      <Main objPoke={objPoke}/>
  );
}


// попробовать собрать массив объектов и передать его в пропсы, через getStaticProps


