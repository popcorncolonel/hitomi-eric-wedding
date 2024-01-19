import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-top gap-4 p-4 bg-gradient-to-tl from-slate-400 to-blue-400 text-white font-serif">
      <div className="flex flex-col h-full gap-2 p-4 border-b-2 border-gray-100 ">
        <h1 className="text-xl font-bold text-center">
          Hitomi and Eric&apos;s Wedding
        </h1>
        <h1 className="text-4xl font-bold text-center">April 20, 2024</h1>
        <h1 className="text-xl font-bold text-center"></h1>
      </div>
      <div className="flex w-full gap-2 justify-center">
        <Link href="/faq" className="underline">
          FAQ
        </Link>
      </div>
      <Image
        src="/images/hitomi-and-eric.jpeg"
        width={300}
        height={400}
        alt="photo of hitomi and eric"
        className="rounded-lg"
      />
    </main>
  );
}
