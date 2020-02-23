import React, { useReducer, useState } from 'react';
import qrcode from 'qrcode-generator';
import QRCode from 'qrcode.react';
import Avatar from 'avataaars';

import styles from './styles';

const App = () => {
  const classes = styles();

  const [showQr, setShowQr] = useState(false);
  const [qrContent, setQrContent] = useState(false);
  const [input, setInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      email: '',
      twitter: '',
      github: ''
    }
  );

  const handleInput = e => {
    const { name, value } = e.target;

    setInput({ [name]: value });
  }

  const handleQrCode = () => {
    if(input.name === '' || input.email === '') {
      alert('Preencha todos os campos');
    } else {
      const qr = `Name: ${input.name} 
Email: ${input.email}
Twitter: @${input.twitter}
Github: ${input.github}`;
      setQrContent(qr);
      setShowQr(true);
    }
  }

  const handleClearInput = () => {
    setInput({ 
      name: '',
      email: '',
      twitter: '',
      github: '', 
    })
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerChild}>
        <form className={classes.form}>
          <input 
            type="text"
            name="name"
            value={input.name}
            placeholder="Name"
            className={classes.input}
            onChange={e => handleInput(e)} 
          />
          <input 
            type="email"
            name="email"
            value={input.email}
            placeholder="Email"
            className={classes.input}
            onChange={e => handleInput(e)} 
          />
          <div className={classes.socialMedia}>
            <div className={classes.twitterContainer}>
              <input 
                type="text"
                value={input.twitter}
                name="twitter"
                placeholder="Twitter"
                className={classes.twitterInput}
                onChange={e => handleInput(e)}
              />
              <icon>@</icon>
            </div>
            <input 
              type="text"
              name="github"
              value={input.github}
              placeholder="Github"
              className={classes.input}
              onChange={e => handleInput(e)}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button type="button" className={classes.cancelButton} onClick={() => handleClearInput()}>Cancelar</button>
            <button type="button" className={classes.createButton} onClick={() => handleQrCode()}>Criar</button>
          </div>
        </form>
        <div className={classes.badgeContainer}>
          <p>Preview</p>
          <div className={classes.badgeAvatar}>
            <img 
              style={{ borderRadius: '50%' }}
              src="https://api.adorable.io/avatars/115/abott@adorable.png"
              alt="Avatar"
            />
          </div>
          <div className={classes.badgeInfo}>
            {
              showQr ? <QRCode bgColor="#B33636" value={qrContent} /> : 
              <>
                <label>{input.name}</label>
                <label>{input.email}</label>
                <label>{input.twitter && `@${input.twitter}`}</label>
                <label>{input.github}</label>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
