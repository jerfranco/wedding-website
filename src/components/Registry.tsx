import amazon from '/amazon_logo.webp'
import venmo from '/venmo.jpg';
import image from '/faq_image.webp'

export function Registry() {
  return (
    <div id="registry">
      <div id="registryInfo">
        <h1 className="bellota-regular">Registry</h1>
        <p>We’re so grateful to have you in our lives and to celebrate this special moment with us. 
          If you’d like to contribute to our next chapter, we’ve created this registry with a few 
          things we’d love. Your presence is truly the greatest gift.
        </p>
        <div id="registryLinks">
          <div id="amazonLogo">
            <a href="https://www.amazon.com/wedding/share/jeremiahandjanelle" target="_blank"><img src={amazon} alt="amazon-logo" /></a>
          </div>
          <div id="venmo">
            <a href="https://venmo.com/u/jerfranco" target="_blank"><img src={venmo} alt="venmo qr code" /></a>
          </div>
          
        </div>
      </div>
      <div id="rightImg">
        <img src={image} alt="Janelle and Jeremiah" />
      </div>
      
      
    </div>
  )
}