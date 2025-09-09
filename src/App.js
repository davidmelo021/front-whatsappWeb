import './App.css';

function App() {
  return (
    <div className="container">
      <div className='back-ground'></div> 
      <div className='chat-container'>
        
        <div className='chat-contacts'>
          <div className='chat-options'></div>
          <div className='chat-item'>
            <img src={Image} className='image-profile' alt=''/>
            <div className='title-chat-container'>
              <span className='title-message'>Profissão programador</span>
              <span className='last-message'>David: Bom dia!</span>
            </div>
          </div>
        </div>
      
      </div>   
    </div>
  );
}

export default App;
