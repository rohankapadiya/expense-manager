function AddNewExpense(props){
    function submitHandler(e){
        e.preventDefault();
        props.editing(true);
    }
    return (
        <form onSubmit={submitHandler}>
          <button type='submit'>Add Expense</button>
      </form>
        );
}
export default AddNewExpense;