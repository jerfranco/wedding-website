import image from '/home_image.webp';

export function Story() {
  return (
    <section id="storyPage">
      <div>
        <img src={image} alt="image" />
      </div>
      <div id="storyInfo">
        <h1>Our Story</h1>
        <p>This is our story</p>
      </div>
    </section>
    
  )
}