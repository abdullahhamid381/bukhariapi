'use client'
import { useEffect, useState } from "react";


const Bukharipost = (props) => {
  const [Chapter, setchapter] = useState("");
  const [Book, setbook] = useState("");
  const [Hadithnum, sethadithnum] = useState("");
  const [Baab, setbaab] = useState("");
  const [Status, setstatus] = useState("");
  const [Hadith, sethadith] = useState("");

  useEffect(() => {
    gethadithdetail();
  }, []);

  const gethadithdetail = async () => {
    try {
      let hadithid = props.params.editbukhari;
      let response = await fetch(`http://localhost:3000/bukharimethood/${hadithid}`);
      let data = await response.json();

      if (data.success) {
        let result = data.result;
        setbook(result.Book);
        console.log(Book);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <div>
      <h1>Bukhari Hadees Update here</h1>
      <h3>Chapter Name</h3>
      <input type="text" value={Chapter} onChange={(e) => setchapter(e.target.value)} placeholder="enter your book chapter" />
      <h3>Book Name</h3>
      <input type="text" value={Book} onChange={(e) => setbook(e.target.value)} placeholder="enter your book name" />
      <h3>Hadees No</h3>
      <input type="text" value={Hadithnum} onChange={(e) => sethadithnum(e.target.value)} placeholder="enter your hadees no" />
      <h3>Bab Name</h3>
      <input type="text" value={Baab} onChange={(e) => setbaab(e.target.value)} placeholder="enter your baab" />
      <h3>hadees status</h3>
      <input type="text" value={Status} onChange={(e) => setstatus(e.target.value)} placeholder="enter your hadees status" />
      <h3>Hadees text</h3>
      <input type="text" value={Hadith} onChange={(e) => sethadith(e.target.value)} placeholder="enter your hadees text" />
      <br />
      <br />
      <button>update</button>
    </div>
  );
};

export default Bukharipost;