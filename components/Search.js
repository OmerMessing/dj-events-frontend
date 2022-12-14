import styles from "@/styles/Search.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm("");
  };
  const [term, setTerm] = useState("");
  const router = useRouter();
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Events"
        />
      </form>
    </div>
  );
}
