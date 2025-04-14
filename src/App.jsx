import './App.css'

let personagem = {
  nome: 'hello kitty',
  poder: 'fofa',
  altura: '60cm',
  peso: '6kg',
  salario: '10000'
};

function App() {
 
  return (
    <>
    <h1>nome: {personagem.nome}</h1>
    <h1>poder: {personagem.poder}</h1>
    <h1>altura: {personagem.altura}</h1>
    <h1>peso: {personagem.peso}</h1>
    <h1>salario: {personagem.salario}</h1>
     
    </>
  )
}

export default App
