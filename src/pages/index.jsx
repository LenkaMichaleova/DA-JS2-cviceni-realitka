import { render } from '@czechitas/render';
import { Header } from '../components/Header/Header';
import { Estate } from '../components/Estate/Estate';
import '../global.css';
import './index.css';
import "../components/Header/Header.css"
import "../components/Estate/Estate.css"

const cislo = window.location.pathname.slice(1, -5)
// console.log(cislo)
// console.log(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${cislo}`)

const response = await fetch(`https://apps.kodim.cz/daweb/trening-api/apis/realitka/${cislo}`)
const json = await response.json()
// console.log(json)

document.querySelector('#root').innerHTML = render(
  <>
    <Header />
    <Estate data={json}/>
  </>
);