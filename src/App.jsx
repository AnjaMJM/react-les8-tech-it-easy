import './App.css';
import './components/Card/card.css'
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {totalSold} from "./helpers/total-sold.js";
import {totalBought} from "./helpers/total-bought.js";
import {totalStock} from "./helpers/total-stock.js";
import {tvPrice, tvSize, tvTitle} from "./helpers/product-basis-input.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"
import Button from "./components/Button/Button.jsx";
import Card from "./components/Card/Card.jsx";
import {sortByItemsSold, sortByItemPrice, sortBySportSuitability} from "./helpers/button-sorting-function.js";


function App() {

    const button1 = "Meest verkocht eerst"
    const button2 = "Goedkoopste eerst"
    const button3 = "Meest geschikt voor sport eerst"
    function buttonAction(button) {
        console.log(button)
    }
  return (
      <>
          <main>
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

            {/* Best selling tv uitgeschreven in HTML */}
            <section>
                <h2>Best verkochte tv</h2>
                <article className="best-selling-tv">
                    <div ><img className="best-selling-photo" src={bestSellingTv().sourceImg} alt="TV"/></div>
                    <div className="best-selling-text">
                      <h3>{tvTitle(bestSellingTv())}</h3>
                      <h2>{tvPrice(bestSellingTv())}</h2>
                      <p>{tvSize(bestSellingTv())}</p>
                        <p><img src={check} className="icon" alt="check"/> wifi <img src={minus} className="icon" alt="no-check"/> speech <img src={check} className="icon" alt="check" /> hdr <img src={check} className="icon" alt="check" /> bluetooth <img src={minus} className="icon" alt="no-check"/> ambilight</p>

                    </div>
                </article>
            </section>

            {/* buttons verwerkt als component. ButtonAction is zelfgemaakte functie om actie aan mee te geven */}
            <section>
                <h2>Alle tv's </h2>
                <Button handleClick={() =>buttonAction(sortByItemsSold)}> {button1}</Button>
                <Button handleClick={() =>buttonAction(sortByItemPrice)}>{button2}</Button>
                <Button handleClick={() =>buttonAction(sortBySportSuitability)}>{button3}</Button>
            </section>

            {/* tussenopdracht om tv-merken naar voren te halen */}
            {/*<section>*/}
            {/*    <ul>*/}
            {/*        {inventory.map((item) => {*/}
            {/*            return <li key={item.type}>{item.brand}</li>*/}
            {/*        })}*/}
            {/*    </ul>*/}
            {/*</section>*/}

            {/* overzicht met tv's uitgewerkt als component */}
              <section>
                  <ul>
                      {inventory.map((items) => {
                          return <Card item={items} key={items.type}></Card>
                      })}
                      </ul>

              </section>
          </main>
      </>
  )
}


export default App
