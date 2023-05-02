import Info from "./Info.tsx";

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com"
};

export default function () {
  return <Info {...pkg} />;
}
