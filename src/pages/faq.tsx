import "../app/globals.css";
import Link from "next/link";

export default function FAQ() {
  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-top gap-2 p-4 text-white bg-gradient-to-tl from-slate-400 to-blue-400 font-serif">
      <div className="flex flex-col h-full gap-2 p-4 border-b-2 border-gray-100 w-full ">
        <h1 className="text-2xl font-bold text-center w-full ">
          <Link href="/">Hitomi and Eric&apos;s Wedding</Link>
        </h1>
      </div>
      <div className="flex flex-col gap-4 text-left w-full p-4 text-lg">
        <div className="w-full">
          <h3 className="text-2xl font-bold">When is the wedding??</h3>
          <p>April 20, 2024, at 5PM.</p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Where is the wedding?</h3>
          <p>
            The Homestead Resort, Hot Springs, VA
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Do you have a hotel block?</h3>
          <p>
            We have 20 blocked at the resort.
            <br />
            Book by March 2, 2024 using{" "}
            <a
              href="https://www.omnihotels.com/hotels/homestead-virginia/weddings/li-bailey-wedding-04162024"
              target="_blank"
              className="underline"
            >
              this link
            </a>
            .
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">How do we get there?</h3>
          <p>
            The 2 closest airports are Roanoke or Washington DC. From Roanoke there's a 1.5 hour drive, and from DC there's a 3.5-4 hour drive.
          </p>
          <p>
            We will arringe daily shuttles from each of these airports to the Homestead so not everyone has to rent a car or arrange their own shuttle.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Will you have a registry?</h3>
          <p>No! You coming to the Homestead to celebrate with us in person is more than enough.</p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Are kids allowed?</h3>
          <p>
            Of course! We welcome your family.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">What activities are there?</h3>
          <p>
            TODO
          </p>
        </div>
      </div>
    </main>
  );
}
