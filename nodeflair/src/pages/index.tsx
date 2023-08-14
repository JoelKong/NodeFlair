import SimplifiedJobDesc from "../../components/SimplifiedJobDesc";

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <section className="w-5/6 h-full">
        <SimplifiedJobDesc />
      </section>
    </main>
  );
}
