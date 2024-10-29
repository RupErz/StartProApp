import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className = "pink_container">
      <h1 className = "heading">
        Pitch Your Start Up, <br/> 
        Connect With Entrepreneurs
      </h1>

      <p className = "sub-heading !max-w-3xl"> {/* ! means overwrite the other style elements*/}
        Submit Ideas, Vote on Pitches, and Get Notices in Virtual Competitions.
      </p>

    </section>
    </>
  );
}
