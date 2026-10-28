import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 w-full max-w-xl rounded-md bg-white/10 px-6 py-8 backdrop-blur-md sm:px-10">
        <div>
          <Image src="/logo.svg" height={120} width={120} alt="logo" />
        </div>

        <h1 className="flex flex-col items-center gap-2 text-xl font-bold text-white">
          <span>College of Medicine</span>
          <span>University of Lagos</span>
        </h1>

        <form className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Matric number"
              className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-4 text-white placeholder:text-white/60 backdrop-blur-md outline-none transition focus:border-white/60 focus:bg-white/20 focus:ring-2 focus:ring-white/30"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-white/30 bg-white/10 py-3 px-4 text-white placeholder:text-white/60 backdrop-blur-md outline-none transition focus:border-white/60 focus:bg-white/20 focus:ring-2 focus:ring-white/30"
            />
          </div>

          <button
            type="submit"
            className="bg-button-selected text-white font-bold py-3 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
