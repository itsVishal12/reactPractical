import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {add, sub, div} from './Main';
import Count from "./Count";
import Counter from "./Counter";
import Form from "./component/Form/Form";
import Formobj from "./component/Form/Formobj";
import Formspread from "./component/Form/Formspread";
import ToDolist from "./component/ToDolist/ToDolist";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
 <>
 <ToDolist />  
{/* <Header/> */}

{/* <Formspread/> */}
 {/* <Count />*/}
 {/*<Counter /> */}
 
 </>
);


