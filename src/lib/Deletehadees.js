"use client"
export default function Deletehadeesfun(props){
  const deletehadees = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hadees?");
    
    if (confirmDelete) {
      let response = await fetch(`http://localhost:3000/api/bukhari/${props.id}`, {
        method: 'delete'
      });
      response = await response.json()
      if (response.success) {
        alert('Hadees has been deleted');
      }
    } else {
      alert('Deletion canceled');
    }
  }

  return <button onClick={deletehadees}>Delete</button>
}
