import './App.css';
import Image from './assets/profissao-programador.jpg';
import SendMessageIcon from './assets/send.png';

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
          
          <div className='chat-messages'>
            <div className='chat-options'>
              <div className='chat-item'>
                <img src={Image} className='image-profile' alt=''/>
                <div className='title-chat-container'>
                 <span className='title-message'>Profissão programador</span>
                 <span className='last-message'>David,Leticia,Lucineide</span>
               </div>
              </div>

            </div>
            <div className='chat-messages-area'>
            
            </div>
            <div className='chat-input-area'>
              <input className='chat-input' placeholder='Mensagem'/>
              <img src={SendMessageIcon} alt='' className='send-message-icon'/>
            </div>
          </div>

      </div>   
    </div>
  );
}

export default App;
