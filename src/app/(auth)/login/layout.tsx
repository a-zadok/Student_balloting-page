import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate min-h-dvh">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/idiaraba.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {children}
    </div>
  );
}
