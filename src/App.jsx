import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {totalSold} from "./helpers/total-sold.js";
import {totalBought} from "./helpers/total-bought.js";
import {totalStock} from "./helpers/total-stock.js";
import {bestSellingTvPrice, bestSellingTvsize, bestSellingTvTitle} from "./helpers/product-basis-input.js";
import check from "./assets/check.png"
import minus from "./assets/minus.png"
import Card from "./components/Card/Card.jsx";
import Button from "./components/Button/Button.jsx";


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
                      <h3>{bestSellingTvTitle(bestSellingTv())}</h3>
                      <h2>{bestSellingTvPrice(bestSellingTv())}</h2>
                      <p>{bestSellingTvsize(bestSellingTv())}</p>
                        <p><img src={check} className="icon" alt="check"/> wifi <img src={minus} className="icon" alt="no-check"/> speech <img src={check} className="icon" alt="check" /> hdr <img src={check} className="icon" alt="check" /> bluetooth <img src={minus} className="icon" alt="no-check"/> ambilight</p>
                    </div>
                </article>
            </section>
            <section>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2>Alle tv's </h2>
                <Card fruit="banaan" geenIdee="Hier komt andere tekst" extraStyling="class-naam"/>
                <Card fruit="appel" geenIdee="Zet hier maar weer iets neer"/>
                <Card fruit="appel" geenIdee="Zet hier maar weer iets neer"/>
                <button type="button" className="button-sorting" onClick={() => buttonAction(button1)}>{button1}</button>
                <button type="button" className="button-sorting" onClick={() =>buttonAction(button2)}>{button2}</button>
                {/*<button type="button" className="button-sorting" onClick={() =>buttonAction(button3)}>{button3}</button>*/}
                <Button handleClick={() =>buttonAction(button3)}>Button</Button>
            </section>
          </main>
      </>
  )
}


export default App
