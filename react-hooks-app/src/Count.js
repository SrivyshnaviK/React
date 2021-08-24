import React,{useEffect} from 'react';
function Example() {
    const [count, setCount] = React.useState(5);

  useEffect(() => {
      console.log('hello');
    document.title = `You clicked ${count} times`;
    document.title = `You clicked ${dcount} times`;
  });  

  const [dcount, setDcount] = React.useState(50);

  useEffect(() => {
    document.title = `You clicked ${dcount} times`;
  });

    return (
        <div>
            <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>        Click me
            </button>  
            <p>You clicked {dcount} times</p>
                <button onClick={() => setDcount(dcount - 1)}>        Click For Component
            </button>    
        </div>);
}

export {Example}