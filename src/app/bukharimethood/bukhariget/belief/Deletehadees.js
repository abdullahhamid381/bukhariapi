export default function Deletehadeesfun(props){
const deletehadees = async()=>{
  let response = await fetch(`http://localhost:3000/api/bukhari/${props.id}`,{
    method:'delete'
  });
  response= await response.json()
  if(response.success){
    alert('hadees has benn deleted')
  }
}
return <button onClick={deletehadees}>Delete</button>
}