import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import {CORE_CONCEPTS} from './data/data'

function App() {
  const [selectTopic, setSelectTopic ] = useState("Please select tab.")
  const coreData = CORE_CONCEPTS; 
  
  function handleClick(selectedButton){
    console.log(selectedButton);
    setSelectTopic(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {selectTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
