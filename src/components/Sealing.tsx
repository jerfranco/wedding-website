import { useEffect } from "react";

export function Sealing() {
  useEffect(() => { document.title = "Home | Janelle & Jeremiah"; }, []);
  return (
    <section id="sealingSection">
      <div id="sealingInfo">
        <h1 className="bellota-regular">Sealing Details</h1>
        <p className="barlow-regular"><strong>You are invited to our sealing in the Oakland Temple at 10am!</strong>
          <br /> 4770 Lincoln Ave Oakland, CA 94602
        </p>
        <p className="barlow-regular">If you are able and willing to attend the sealing inside of the temple, 
          please <strong>show up early at 9:45am</strong> to wait in an area designated by temple workers.
        </p>
        <p className="barlow-regular">For those who will wait outside of the temple, you are welcome to explore temple 
          grounds in the meantime. There’s a <strong>rooftop garden</strong> on top of the temple accessible 
          to the public with a breathtaking view of the Bay Area, as well as the <strong>Visitors’ 
          Center</strong> with the <strong>Family History Center</strong> on the bottom floor.
        </p>
        <p className="barlow-regular">
          Regardless if you go in or stay outside, we would love to include you in pictures 
          after the sealing. The sealing may take anytime between an hour to an hour and a half.
        </p>
        <p className="barlow-regular">
          <strong>Please let us know if you are not able to make it!</strong>
        </p>
      </div>
      
    </section>
  )
  
}