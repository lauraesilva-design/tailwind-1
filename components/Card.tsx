import Image from "next/image";
import Link from "next/link";


interface props {
   src: string;
   title: string;
   description: string;
   url: string;
}

export default function Card({ src, title, description, url }: props) {
   return (
      <Link href={url} target="_blank" rel="noopener noreferrer">

         <div className="flex flex-col h-48 w-48 rounded-lg bg-white">
            <div className="flex-1 relative">
               <Image src={src} alt="imagem do projeto" fill />
            </div>
            <div className="flex-1 border-t border-black mt-1">
               <h2 className="text-black text-center text-3xl">{title}</h2>
               <p className="text-black">{description}</p>
            </div>
         </div>
      </Link>
   );
}
