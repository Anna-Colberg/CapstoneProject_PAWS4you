import Link from "next/link";

export default function DogsCard({ _id, name }) {
  return (
    <article>
      <Link href={`/dogs/${_id}`}>
        <h3>{name}</h3>
      </Link>
    </article>
  );
}
