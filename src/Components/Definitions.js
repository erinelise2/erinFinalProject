import {Link} from 'react-router-dom'


export default function Definitions() {
    return (
        <>
        <div className="definitions-div  border border-3 border-white mt-4">
        <h3 className="text-center mt-2 border-bottom ms-4 me-4 border-2 p-2 fw-bold">Some Helpful Definitions For Your Entries</h3>
        <p className="text-center ms-4 me-4">Definitions adapted from Merriam Webster</p>
        <ul className="me-3">
          <li>
            <b>Type of Animal:</b> This is where you describe the animal based on the common name. This can be anything from a fish in the lake, a butterfly on a flower, or a bear in the forest.
          </li>
          <li>
            <b>Classification:</b> (Some basic group ideas)
            <ul>
            <li>
              <b>Mammal:</b> Warm-blooded higher vertebrates (has a spinal column) that nourish their young with milk secreted from mammary glands, have the skin usually more or less covered with hair, and breathe air. 
            </li>
            <li>
              <b>Reptile:</b> Cold-blooded, air-breathing, usually egg-laying vertebrates that include the alligators and crocodiles, lizards, snakes, turtles, and extinct related forms and that have a body typically covered with scales or bony plates and a bony skeleton.
            </li>
            <li>
              <b>Amphibian:</b> Cold-blooded vertebrates intermediate in many characters between fish and reptiles and having gilled aquatic larvar and air breathing adults. (Generally have smooth moist skin, rather than drier scaley skin like reptiles.)
            </li>
            <li>
                <b>Fish:</b> Cold-blooded strictly aquatic vertebrates that include the bony fishes and usually the cartilaginous and jawless fishes that have typically an elongated somewhat spindle-shaped body terminating in a broad caudal fin, limbs in the form of fins when present at all, and a two-chambered heart by which blood is sent through thoracic gills to be oxygenated.
            </li>
            <li>
              <b>Bird:</b> Warm-blooded vertebrates distinguished by having the body more or less completely covered with featers and the forelimbs modified as wings.
            </li>
            <li>
              <b>Insect:</b> Arthropods (such as bugs or bees) with well-definted head, thorax, and abdomen, only three pairs of legs, and typically one or two pairs of wings. (Spiders, scorpions, mites and ticks are not insects.)
            </li>
            <li>
              <b>Arachnids:</b> Arthropods comprising chiefly of terresetrial (land) invertibrates (not a defined spinal column), including spiders, scorpions, mites, and ticks, and having a segmented body divided into two regions of which the anterior bears four pairs of legs but no antennae.
            </li>
            </ul>
          </li>
          <li>
            <b>Types of Locations:</b>
            <ul>
              <li>
                Wildlife lives in all corners of our world, but not every corner is the same. Here you can be as specific as you need. For example, you can type in that the rabbit you saw was in your front yard, or you can say it was on the grass. If you are in a park, you can name or describe the park.
              </li>
            </ul>
          </li>
          <li>
            <b>Time of Day:</b>
            <ul>
              <li>
                You can eenter in the general time like morning or afternoon, or the clock time. Once you have lots of observations you can compare when you see the animals the most.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    <div className="text-center mt-4">
        <Link className="link text-white border border-2 p-2 rounded" to="/">Return Home</Link>
    </div>
    </>
    )
}