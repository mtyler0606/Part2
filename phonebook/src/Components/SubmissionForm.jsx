const SubmissionForm = ({submitHandler, newName, newNumber, setNewName, setNumber}) => {
  return(
    <form onSubmit={submitHandler}>
    <div>
      name: <input
              value={newName}
              onChange={(event)=>{setNewName(event.target.value)}}
            />
    </div>
    <div>
      number: <input
              value={newNumber}
              onChange={(event)=>{ setNumber(event.target.value)}}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default SubmissionForm