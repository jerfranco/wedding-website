import { useState } from "react";

const images = [
  { src: "/home_image_jj.webp"},
  { src: "/home_image_mini.webp", position: "center 40%" },
  { src: "/faq_image.webp", position: "center 40%" },
  { src: "/propose.webp", position: "center 50%" },
  { src: "/kneel.webp", position: "center 40%" },
  { src: "/show_ring.webp", position: "center 35%" },
  { src: "/hop.webp", position: "center 35%" }
];

export function Photos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="photosSection">
      <h1 className="bellota-regular">Photos</h1>

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