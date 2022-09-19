import styles from "./ComicItem.module.scss"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function CharacterItem({ name }: { name?: string }) {
  const character = name
    ?.replace(/(\s)|(\')/g, "-")
    .replace(/(\()|(\))|(\.)|(\")|(,)|(\?)|(\!)|(\')/g, "")
    .toLowerCase()

  return (
    <li
      role="button"
      title="Append character to the search query"
      className={styles["char-item"]}
      style={{
        backgroundColor: `var(--bg-${character})`,
        color: `var(--fg-${character})`
      }}
    >
      {name}
      <FontAwesomeIcon icon={faPlus} className={styles.spacing} />
    </li>
  )
}
