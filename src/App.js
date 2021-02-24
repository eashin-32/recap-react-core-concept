import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friendId = [
    {name:'Abir Khan',age:17 , Nationality:'Bangladesh'},
    {name:'Kabir sheikh ',age:18 , Nationality:'Bangladesh'},
    {name:'Nahid Ahmed',age:17 , Nationality:'Bangladesh'},
    {name:'Rakib Sheikh',age:18 , Nationality:'Bangladesh'},
    {name:'Shamim Sheikh',age:18 , Nationality:'Bangladesh'}
  ]
  const list =['abir','rakib','shamim','nahid','tahmid']
  return (
    <div className="App">
      <header className="App-header">

        <h1>hello</h1>
        <Stater></Stater>
        <Dynamic></Dynamic>
        <Post></Post>
        {
          list.map(name => <li>{name}</li>)
        }
        {
          friendId.map(id => <Identity friend={id}></Identity>)
        }
        <Id name={friendId[0].name} age={friendId[0].age} Nationality={friendId[0].Nationality}></Id>
        <Id name='Badhon' age='16' Nationality='Bangladesh'></Id>
        <Id name='Tahmid' age='18' Nationality='Bangladesh'></Id>
      </header>
    </div>
  );
}

//dynamic data with api
function Dynamic(){
  const [users, setUser] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  console.log(users)
  return(
    <div>
      
      <h1>user:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>username: {user.username},address: {user.address.city}</li>)
        }
      </ul>
    </div>
  )
}

function Post(){
  const [posts,setPost] = useState([])
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  })
  
  return(
    <div>
      <div>
        {
          posts.map(post => <li>title:{post.title}</li>)
        }
      </div>
    </div>
  )
}


//event handler
function Stater(){
  const [count,setCount] = useState(0)
  const decrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={decrease}>Decrease</button>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}




//dynamic data with similar components
function Identity(props){
  const IdStyle ={
    border:'2px solid aqua',
    borderRadius:'5px',
    height:'300px',
    width:'450px',
    marginTop:'10px'
  }
  //console.log(props)
  const {name, age,Nationality} = props.friend
  return(
    <div style={IdStyle}>
      <h1>Name: {name}</h1>
      <h3>Nationality: {Nationality}</h3>
      <h3>Age: {age}</h3>
    </div>
  )
}

function Id(props){
  const IdStyle ={
    border:'2px solid aqua',
    borderRadius:'5px',
    height:'300px',
    width:'450px',
    marginTop:'10px'
  }
  return(
    <div style={IdStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Nationality: {props.Nationality}</h3>
      <h3>Age: {props.age}</h3>
    </div>
  )
}
export default App;
