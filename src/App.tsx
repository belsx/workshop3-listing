import { getData, IItemsData } from "./utils/getData";
import Listing from "./component/listing";

function App() {
  const itemData: IItemsData[] = getData();
  return <Listing items={itemData} />;
}

export default App;
