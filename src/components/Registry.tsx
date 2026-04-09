import amazon from '/amazon-logo.png'
import venmo from '/venmo.jpg';

export function Registry() {
  return (
    <div id="registry">
      <h1>Welcome to our registry</h1>
      <p>We’re so grateful to have you in our lives and to celebrate this special moment with us. 
        If you’d like to contribute to our next chapter, we’ve created this registry with a few 
        things we’d love. Your presence is truly the greatest gift.
      </p>
      <div id="registryLinks">
        <a href="https://www.amazon.com/wedding/share/jeremiahandjanelle" target="blank"><img  id="amazonLogo" src={amazon} alt="amazon-logo" /></a>
        <div id="venmo">
          <a href="https://venmo.com/u/jerfranco" target="blank"><img src={venmo} alt="venmo qr code" /></a>
        </div>
        
      </div>
    </div>
  )
}