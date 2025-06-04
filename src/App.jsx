import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data/data";
import { EXAMPLES } from "./data/data";

function App() {

  let tabContent = <p>Please select a topic.</p>
  
  const [selectedTopic, setSelectedTopic] = useState();
  const coreData = CORE_CONCEPTS;
  

  if(selectedTopic){
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )
  }

  function handleClick(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {coreData.map((item, index) => (
              <CoreConcept
                id={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
