import React, { useState } from 'react';

function App() {
  return <div>
    <Folder name='desktop'>
      <File name='dogs.jpeg'/>
      <File name='cats.png'/>
      <Folder name='Music'>
        <File name="all_star.mp3" />
      </Folder>
    </Folder> 
    <Folder name='Apps'/>
    
  </div>;
} // component!

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true); 
  const { name, children } = props;

  const direction = isOpen ? 'down' : 'right';
  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span>
      <i className="yellow folder icon"></i>
      <i className={`caret ${direction} icon`} onClick={handleClick}></i>
      {name}
      </span> 
    <div style={{marginLeft: '17px'}}>
      {isOpen ?  children : null}
    </div>
  </div>;
} 

const File = (props) => {
  const { name } = props;
  const fileExt = name.split('.')[1]; // extracting extension
  const fileIcons = { // matching sematic ui icon className
    mp3: 'headphones',
    jpeg: 'file image',
    png: 'file image outline',
  };

  return <h5>
    <i className={`${fileIcons[fileExt]} icon`}></i>
    {name}
  </h5>;
}

export default App;
