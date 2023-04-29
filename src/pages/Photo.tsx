import { createSignal, onMount, For } from "solid-js";
import "./Photo.css";

interface Album {
  // albumId: number;
  // id: number;
  title: string;
  // url: string;
  thumbnailUrl: string;
}
export default function Photo () {
  const [photos, setPhotos] = createSignal([] as Album[]);

  onMount(async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_limit=10"
    );
    setPhotos(await res.json());
  });

  return (
    <>
      <h1>Photo album</h1>
      <div class="photos">
        <For each={photos()} fallback={<p>Loading...</p>}>
          {(photo) => (
            <figure>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <figcaption>{photo.title}</figcaption>
            </figure>
          )}
        </For>
      </div>
    </>
  );
}
