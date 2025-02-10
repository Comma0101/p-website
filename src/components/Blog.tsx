import { FunctionalComponent } from "preact";
import styles from "../style/blog.module.css";

import { Link } from "preact-router"; // Import Link for navigation

const Blog: FunctionalComponent = () => {
  return (
    <div class={styles.blogContainer}>
      {/* Home link */}
      <div class={styles.blogItem}>
        <h2>
          <Link href="/" class={styles.blogLink}>
            HOME
          </Link>
          <span class="arrow">→</span>
        </h2>
      </div>

      <div class={styles.blogItem}>
        <h2>
          THE 90'S AND 2000'S <span class="arrow">→</span>
        </h2>
        <p>The Borgmann Donation</p>
      </div>

      <div class={styles.blogItem}>
        <h2>
          JUMP INTO THE FUTURE <span class="arrow">→</span>
        </h2>
      </div>

      <div class={styles.blogItem}>
        <h2>
          KEITH HARING <span class="arrow">→</span>
        </h2>
        <img src="https://example.com/keith-haring.jpg" alt="Keith Haring" />
      </div>

      <div class={styles.blogItem}>
        <h2>
          LET ME BE YOUR GUIDE <span class="arrow">→</span>
        </h2>
      </div>

      <div class={styles.blogItem}>
        <h2>
          WORD MEMBER <span class="arrow">→</span>
        </h2>
      </div>
      <div class={styles.blogItem}>
        <h2>
          KEITH HARING <span class="arrow">→</span>
        </h2>
        <img src="https://example.com/keith-haring.jpg" alt="Keith Haring" />
      </div>

      <div class={styles.blogItem}>
        <h2>
          LET ME BE YOUR GUIDE <span class="arrow">→</span>
        </h2>
      </div>

      <div class={styles.blogItem}>
        <h2>
          WORD MEMBER <span class="arrow">→</span>
        </h2>
      </div>
      <div class={styles.blogItem}>
        <h2>
          KEITH HARING <span class="arrow">→</span>
        </h2>
        <img src="https://example.com/keith-haring.jpg" alt="Keith Haring" />
      </div>

      <div class={styles.blogItem}>
        <h2>
          LET ME BE YOUR GUIDE <span class="arrow">→</span>
        </h2>
      </div>

      <div class={styles.blogItem}>
        <h2>
          WORD MEMBER <span class="arrow">→</span>
        </h2>
      </div>
      <div class={styles.blogItem}>
        <h2>
          KEITH HARING <span class="arrow">→</span>
        </h2>
        <img src="https://example.com/keith-haring.jpg" alt="Keith Haring" />
      </div>

      <div class={styles.blogItem}>
        <h2>
          LET ME BE YOUR GUIDE <span class="arrow">→</span>
        </h2>
      </div>

      <div class={styles.blogItem}>
        <h2>
          WORD MEMBER <span class="arrow">→</span>
        </h2>
      </div>
    </div>
  );
};

export default Blog;
