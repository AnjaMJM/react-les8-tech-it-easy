import './App.css';
import {inventory} from "./constants/inventory.js";
import {totalSold} from "./helpers/total-sold.js";
import {totalBought} from "./helpers/total-bought.js";
import {totalStock} from "./helpers/total-stock.js";

function App() {
  return (
      <>
    <h1>Begin hier met met maken van de applicatie!</h1>
        {/*Blauw*/}
        <p>{totalSold(inventory)}</p>
    {/*groen*/}
    <p>{totalBought(inventory)}</p>
        <p>{totalStock()}</p>
    </>
  )
}


export default App
