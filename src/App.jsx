import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {totalSold} from "./helpers/total-sold.js";
import {totalBought} from "./helpers/total-bought.js";
import {totalStock} from "./helpers/total-stock.js";
import {bestSellingTvPrice, bestSellingTvsize, bestSellingTvTitle} from "./helpers/product-basis-input.js";

function App() {
  return (
      <>
          <body>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <section className="overview">
              <article className="overview-box green">
                  <p>Aantal verkochte producten</p>
                  <h2>{totalSold(inventory)}</h2>
              </article>
              <article className="overview-box blue">
                  <p>Aantal ingekochte producten</p>
                  <h2>{totalBought(inventory)}</h2>
              </article>
              <article className="overview-box red">
                  <p>Aantal producten in voorraad</p>
                  <h2>{totalStock()}</h2>
              </article>
            </section>

            <section>
                <h2>Best verkochte tv</h2>
                <article className="best-selling-tv">
                    <div ><img className="best-selling-photo"src={bestSellingTv().sourceImg} alt="TV"/></div>
                    <div className="best-selling-text">
                      <h3>{bestSellingTvTitle(bestSellingTv())}</h3>
                      <h2>{bestSellingTvPrice(bestSellingTv())}</h2>
                      <p>{bestSellingTvsize(bestSellingTv()).join(' | ')}</p>
                    </div>
                </article>
            </section>
            <section>
                <h2>Alle tv's</h2>
                <button></button>
            </section>
          </body>
      </>
  )
}


export default App
