const Notification = ({message}) => {
  const notificationStyle = {
  color: 'green',
  background: 'lightgrey',
  fontSize: '20',
  borderStyle: 'solid',
  borderRadius: '5',
  padding: '20',
  marginBottom: '20'
  }
  return (message === null)? null: <div style={notificationStyle}>{message}</div>
}

export default Notification