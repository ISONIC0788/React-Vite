// import * as React from 'react';

// it show mew error by using s lint 

const welcome = {
    greeting:'Hey',
    title :'React'
};

function getTitle(title){
   return title;
}

// depend on javascript 

const list = [{
  title : 'React',
  url:'http://reactjs.org',
  author: 'jordan Walke',
  num_comments: 3 ,
  points:4,
  objectID:0
},{
   title:'Redux',
   url:'http://reduxjs.org',
   author: 'Dan Abramov ,Andrew clack',
   num_comments:2,
   points: 5 ,
   objectID:1
}];

function App() {
  
  return (
    <div>
      <h1>My Hacker story </h1>
      <h1>
         {welcome.greeting}  {welcome.title}
      </h1>
      <Search />
      <ul>
        {list.map(function (item){
          return <li key={item.objectID}>{item.title}</li> ;//you must use key props
        })}

        {
          list.map(function (item){
           return <li key={item.objectID}>{item.url}</li>
          })
        }
      </ul>

      <h2>List of links </h2>
      {
        list.map(function(item ){ // item
          return (
            <li key={item.objectID}>
              <span>
                 <a href={item.url}></a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>

            </li>
             
          );
        })
      }
      <h3>Second List</h3>
      {
        list.map((item)=>{
          return (<li key={item.objectID}>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>{item.url}</span>

          </li>);
        })
      }

      <List />
    </div>
  );
}

function List(){
  return (
    <ul>
      {
        list.map(function (item){
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>

            </li>
          );
        })
      }
    </ul>
  );
}

function Search(){
  return (
    <div>
      <h2>
         Hellow {getTitle('React')}
      </h2>
      <label htmlFor='search'>Search:</label>
      <input type="text" name="" id="search" />
    </div>

  );
}

export default App;