import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Yoh-Lab App" },
    { name: "description", content: "Welcome to Remix!" },
    // 以下2行を追加
    { viewport: "width=device-width, initial-scale=1" },
    { desctiprion: "a first remix application" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
