import { itemsData } from "./data/etsy";
import Listing from "./component/listing";

function App() {
  const jsonString = JSON.stringify(itemsData);
  const parsedData = JSON.parse(jsonString);
  return <div className="flex" ><Listing items={parsedData} /></div>;
}

export default App;
