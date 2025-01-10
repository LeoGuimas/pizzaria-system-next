import Link from 'next/link';

export default function Header (){
    return (
        <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="">
        MONTE PIZZA
        </Link>
        <nav className=" flex items-center gap-8 text-gray-500 font-semibold"> 
          <Link href={''}>Início</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>Sobre</Link>
          <Link href={''}>Contatos</Link>
          <Link href={''} className="bg-primary rounded-full text-white px-6 py-2">Entrar</Link>
        </nav>
      </header>
    );
}