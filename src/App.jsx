import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import {CORE_CONCEPTS} from './data/data'

function App() {

  const coreData = CORE_CONCEPTS;

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts" >
          <h2>Core Concept</h2>
          <ul>
            {coreData.map((item, index) => (
              <CoreConcept  id={index} title={item.title} description={item.description} image={item.image}/>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
