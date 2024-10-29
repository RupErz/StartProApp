import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;
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

      <SearchForm query={query}/>
    </section>
    </>
  );
}
