import Deletehadeesfun from "@/lib/Deletehadees";
import Link from "next/link";

const bukharidataget = async ()=>{
    let data = await fetch ('http://localhost:3000/api/bukhari')
    data = await data.json();
    if(data.success){
        return data.result;
    }
    else{
        return {success:false}
    }
}


export default async function page() {
    const bukharihadith = await bukharidataget();
    const firstSevenItems = bukharihadith.slice(602, 734); // Get the first 7 items
    console.log(firstSevenItems);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr ', gap: '40px', width: '90%', margin: '20px auto' }}>
            {
                firstSevenItems.map((item) => {
                    return (
                        <div style={{ background: 'whiteSmoke', padding: '30px' }} key={item._id}>
                            <h2>Book Name : {item.Book}</h2>
                            <h3>Chapter Name: {item.Chapter}</h3>
                            <h3>Baab : {item.Baab}</h3>
                            <h3>Hadith Num : {item.Hadithnum} </h3>
                            <h3 style={{ lineHeight: '35px' }}>Hadith : {item.Hadith}</h3>
                            <h3>Status : {item.Status} </h3>
                            <Link href={'/bukharimethood/'+item._id}>Update</Link>
                            <Deletehadeesfun id={item._id}/>
                        </div>
                    );
                })
            }
        </div>
    );
}
