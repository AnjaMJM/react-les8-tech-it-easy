import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {totalSold} from "./helpers/total-sold.js";
import {totalBought} from "./helpers/total-bought.js";
import {totalStock} from "./helpers/total-stock.js";
import {tvPrice, tvSize, tvTitle} from "./helpers/product-basis-input.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"
import Button from "./components/Button/Button.jsx";
// import {tvSpecifications} from "./helpers/product-basis-input.js";


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
            <section>
                <h2>Alle tv's </h2>
                <Button handleClick={() =>buttonAction(button1)}>{button1}</Button>
                <Button handleClick={() =>buttonAction(button2)}>{button2}</Button>
                <Button handleClick={() =>buttonAction(button3)}>{button3}</Button>
            </section>

            <section>
                <ul>
                    {inventory.map((item) => {
                        return <li key={item.type}>{item.brand}</li>
                    })}
                </ul>
            </section>
              <section>
                  <ul>
                      {inventory.map((item) => {
                          return <li key={item.type}>
                              <h3>{tvTitle(item)}</h3>
                              <h2>{tvPrice(item)}</h2>
                              <p>{tvSize(item)}</p>
                          </li>
                      })}

                  </ul>
                  {/*<img>{tvSpecifications(inventory)}</img>*/}

              </section>
          </main>
      </>
  )
}


export default App
