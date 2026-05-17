import { useState } from "react";
import { useEffect } from "react";

const images = [
  // { src: "/propose.webp", position: "center 50%" },
  // { src: "/kneel.webp", position: "center 40%" },
  // { src: "/show_ring.webp", position: "center 35%" },
  { src: "/home_image_jj.webp"},
  { src: "/home_image_mini.webp", position: "center 40%" },
  { src: "/faq_image.webp", position: "center 40%" },
  { src: "/hop.webp", position: "center 35%" },
  { src: "/view.webp"},
  { src: "/hand.webp", position: "center 30%"},
  { src: "/walking.webp"},
  { src: "/look.webp", position: "center 35%"},
  { src: "/overlook.webp", position: "center bottom"}
];

export function Photos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => { document.title = "Photos | Janelle & Jeremiah"; }, []);

  return (
    <section id="photosSection">
      <h1 className="bellota-regular">Photos</h1>
      <h2 className="barlow-regular">Click photos for full view</h2>
      <h3 className="barlow-regular">Photographer: <a href="https://www.instagram.com/katelyu_photo/" target="_blank">@katelyu_photo</a></h3>
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={`photo-${index}`}
          onClick={() => setSelectedImage(img.src)}
          style={{
            objectPosition: img.position,
          }}
        />
      ))}

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="zoomed" />
        </div>
      )}
    </section>
  );
}