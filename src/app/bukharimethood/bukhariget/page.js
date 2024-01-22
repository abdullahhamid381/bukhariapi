let bukhatialldataget = async()=>{
    let data = await fetch('http://localhost:3000/api/bukhari')
    data = await data.json();
    if(data.success){
        return data.result
    }
    else{
        return {success:false}
    }
}

const bukhariall = async () => {
    const hadith = await bukhatialldataget();
    console.log(hadith)
  return (
   <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'40px',width:'90%',margin:'20px auto'}}>
  {
    hadith.map((item)=>{
        return(
            <div style={{background:'whiteSmoke',padding:'30px'}}>
            <h2>Book Name : {item.Book}</h2>
            <h3>Chapter Name: {item.Chapter}</h3>
            <h3>Baab : {item.Baab}</h3>
            <h3>Hadith Num : {item.Hadithnum} </h3>
            <h3 style={{lineHeight:'35px'}}>Hadith : {item.Hadith}</h3>
            <h3>Status : {item.Status} </h3>
    
        </div>
        )
    })
  }
   </div>
  )
}

export default bukhariall