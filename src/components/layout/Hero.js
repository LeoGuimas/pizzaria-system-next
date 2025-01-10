import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Tudo é melhor <br /> com uma&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500">
        Nada como uma pizza quentinha para alegrar o dia! Seja clássica ou recheada de sabores inusitados, cada fatia é um convite ao prazer. Peça a sua e aproveite! 🍕
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-primary flex items-center gap-2 rounded-full px-4 py-2 text-white">
            Peça agora!
            <Right />
          </button>
          <button className="flex gap-2 py-2 text-gray-600 semi-bold">
            Saiba mais
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit="contain"
          alt="Pizza"
        />
      </div>
    </section>
  );
}
