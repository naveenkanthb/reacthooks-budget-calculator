import React,{useState} from 'react';
import './App.css';
import { v4 as uuid } from "uuid";
import { ExpenseForm } from './components/ExpenseForm';
import { ExpenseList } from './components/ExpenseList';
import { Alert } from './components/Alert';

const initialList = [
  {id:uuid(),charge:"rent",amount:1500},
  {id:uuid(),charge:"car payment",amount:500},
  {id:uuid(),charge:"credit card bill",amount:1000}
]

console.log(initialList);

function App() {
  const [ expenses,setExpenses] = useState(initialList);
  const [charge,setCharge] = useState('');
  const [amount,setAmount] = useState('');
  const [alert,setAlert] = useState({show:false});

  const handleCharge = e => {
    setCharge(e.target.value);
  }

  const handleAmount = e => {
    setAmount(e.target.value);
  }

  const handleAlert = ({type,text}) => {
    setAlert({show:true,type,text});
    setTimeout(() => setAlert({show:false}),3000);
  }

  const clearItems = () => {
    setExpenses([]);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(charge !== '' && amount >0){
      const newExpense = { id:uuid(),charge,amount};
      setExpenses([...expenses,newExpense]);
      handleAlert({type:'success',text:"item added successfully"});
      // setAlert({show:true,type:'success',text:"item added successfully"});
      // setTimeout(() => setAlert({show:false}),3000);
      setCharge('');
      setAmount('');
    }else{
      console.log('alert');
      handleAlert({type:'danger',text:'bugget with empty charge or amount less than zero cannot be added'});
      // setAlert({show:true,type:'danger',text:'bugget with empty charge or amount less than zero cannot be added'});
      // setTimeout(() => setAlert({show:false}),3000);
    }
  }

  return (
    <React.Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} 
        handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} clearItems={clearItems}/>
      </main>
      <h1>Total Spending : 
        <span className="total">
           $ {expenses.reduce((acc,curr) => {
            return(acc += parseInt(curr.amount));
          },0)}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default App;
