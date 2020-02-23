import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  '@global': {
    body: {
      fontFamily: 'Roboto, sans-serif'
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerChild: {
    marginTop: '50px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },  

  form: {
    display: 'flex',
    flexDirection: 'column'
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '3px'
  },
  socialMedia: {
    width: '100%',
    display: 'flex',
    position: 'relative',

    '& icon': {
      position: 'absolute',
      top: '4px',
      left: '6px',
      cursor: 'pointer',
    }
  },
  input: {
    border: '1px solid rgba(0,0,0,0.16)',
    borderRadius: '4px',
    padding: '6px',
    outline: 'none',
    marginBottom: '2px'
  },
  twitterInput: {
    border: '1px solid rgba(0,0,0,0.16)',
    borderRadius: '4px',
    padding: '6px',
    outline: 'none',
    paddingLeft: '22px',
  },
  cancelButton: {
    border: '1px solid rgba(0,0,0,0.16)',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    padding: '5px 17px',
    backgroundColor: 'red'
  },
  createButton: {
    cursor: 'pointer',
    border: '1px solid rgba(0,0,0,0.16)',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    padding: '5px 25px',
    backgroundColor: 'green'
  },

  badgeContainer: {
    width: '70%',
    borderRadius: '25px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B33636',
    '& p': {
      fontSize: '22px',
      color: '#fff'
    }
  },

  badgeAvatar: {
    
  },

  badgeInfo: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
    marginBottom: '30px',
    fontSize: '18px',
    '& label': {
      color: '#fff'
    }
  }
})

export default styles;
