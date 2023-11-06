import Link from "next/link";

export default function NavBar() {
  return (
    <header
      className="h-28 px-8 flex items-center"
      style={{ backgroundColor: "var(--mantine-color-red-9)" }}
    >
      <h1 className="text-5xl">
        <Link className="text-inherit no-underline" href="/">
          Cornucopia
        </Link>
      </h1>
    </header>
  );
}
