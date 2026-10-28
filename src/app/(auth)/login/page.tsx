import Image from "next/image";
import LoginForm from "../../../../components/ui/LoginForm";

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

        <LoginForm />
      </div>
    </main>
  );
}
