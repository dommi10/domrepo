import Timeline from '../components/Timeline';


export default function Home({ videos }) {
  return (
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Vahid Takro
        </h1>
        <h4>
          This is how my life is going on :)
        </h4>
        <Timeline />
      </div>
  );
}
