import Image from "next/image"
import Socials from "../components/Socials"

const Home = () => {
  return (
    <main className="mx-auto w-full flex max-w-3xl flex-1 text-white">
      <div className="flex flex-col space-y-4 py-24 px-6 md:px-0 sm:py-28 md:space-y-4 items-center text-center">
        <Image
          src="/headshot.jpg"
          alt=""
          width={250}
          height={250}
          className="rounded-full"
          priority
        />

        <Socials />
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold">
            Hi, my name is Chloe.
          </h2>
          <p className="text-neutral-300 text-base md:text-lg">
            I&#39;m a highly skilled and experienced developer with a passion
            for building innovative solutions that solve real-world problems.
            With over 10 years of experience in the industry, I&#39;ve honed my
            skills in a variety of programming languages, frameworks, and tools.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home
