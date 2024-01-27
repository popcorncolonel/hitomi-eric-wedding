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
          <h3 className="text-2xl font-bold">When is the wedding?</h3>
          <p>April 20, 2024, at 5PM.</p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Where is the wedding?</h3>
          <p>
            The Homestead Resort, Hot Springs, Virginia
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">How do we get there?</h3>
          <p>
            The 2 closest airports are Roanoke or Washington Dulles. From Roanoke it's a 1.5 hour drive, and from DC it's a 3.5 hour drive.
          </p>
          <p>
            You can rent a car or drive, but we'll also arrange daily shuttles from each of these airports to the Homestead.
          </p>
          <p><strong>
            If you'd like a reserved spot on the shuttle, fill out <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeE3enuVCJEy4VcEPpARfAS0fwZD98PhVbpYWZT2N9PGeXERA/viewform"
              target="_blank"
              className="underline"
            >
              this form
            </a> by March 1, 2024.
          </strong></p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Do you have a hotel block?</h3>
          <p>
            We have 20 rooms blocked at the resort.
            <br />
            Book by March 1, 2024 using{" "}
            <a
              href="https://www.omnihotels.com/hotels/homestead-virginia/weddings/li-bailey-wedding-04162024"
              target="_blank"
              className="underline"
            >
              this link
            </a>.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Will you have a registry?</h3>
          <p>Nope! You coming to the Homestead to celebrate with us in person is more than enough. No gifts or money, please.</p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">Are kids allowed?</h3>
          <p>
            Of course! We welcome you and your family to celebrate with us.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold">What activities are there?</h3>
          <p>The Homestead has a wide range of activities, both indoor and outdoor.</p>
          <p>
            <a
              href="https://www.omnihotels.com/hotels/homestead-virginia/things-to-do/resort-activities"
              target="_blank"
              className="underline"
            >
              Here's the full list
            </a>,
            but some of our recommendations:
          </p>
          <ul style="list-style-type:disc;">
            <li>
              <a
                href="https://www.omnihotels.com/hotels/homestead-virginia/things-to-do/resort-activities/shooting-club"
                target="_blank"
                className="underline"
              >
                The Shooting Club
              </a> is where Eric learned to shoot when he was 12 years old! They have beginner lessons and a Sporting Clays course for more advanced shooters.
            </li>
            <li>
              <a
                href="https://www.omnihotels.com/hotels/homestead-virginia/wellness/warm-springs-pools"
                target="_blank"
                className="underline"
              >
                The Hot Springs
              </a> are a unique natural artifact of the Homestead. (That's why the town is called Hot Springs, Virginia). Bathing suit required!
            </li>
            <li>
              You can also relax in 
              <a
                href="https://www.omnihotels.com/hotels/homestead-virginia/spa"
                target="_blank"
                className="underline"
              >
                the Spa
              </a> to experience the natural hot springs, or get a massage.
            </li>
            <li>
              <a
                href="https://www.omnihotels.com/hotels/homestead-virginia/things-to-do/resort-activities/fly-fishing"
                target="_blank"
                className="underline"
              >
                Fly Fishing
              </a> guided tours are a great way to experience Virginia's natural beauty.
            </li>
            <li>
              <a
                href="https://www.omnihotels.com/hotels/homestead-virginia/things-to-do/resort-activities/outdoor"
                target="_blank"
                className="underline"
              >
                Falconry
              </a> to chill with the birds
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
