import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';

function App() {
  const [conferences, setConferences] = useState([]);

  useEffect(() => {
    async function fetchConferences() {
      try {
        const response = await fetch("https://gdscdev.vercel.app/api");
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        const data = await response.json();

        setConferences(data.content.data);
      } catch (error) {
        console.error("Error fetching conference data:", error);
      }
    }

    fetchConferences();
  }, []);

  const cards=conferences.map(items=>{
    return(
      <Card
        key={items.id}
        {...items}
        isClicked={()=>{isClicked(items.id)}}
      />
    )
  })

  const [click, setClick]=useState()

  function isClicked(id)
  {
    setClick(conferences[id-1])
  }

  return (
    <div className="App">
      <Navbar />
      <Hero card={click} />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}

export default App;
