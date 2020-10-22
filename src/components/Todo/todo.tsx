import React, { useEffect, useState} from 'react'

export  const Todo :React.FC=()=> {
    interface Ilist{
        item:string,
        date:Date|string
    }
     const[item,setItem]=useState('')
 
     const[list,addItem]=useState <Array<Ilist>>([])

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setItem(event.target.value)

    }
    // const list:Ilist[]=[]
   
    const AddItems=():void=>{
        let items={item:item,date:new Date}
     addItem([...list,items])
     console.log(list)
    

    }
    const handledelete=(id)=>{     
     let list1=list
    list1.splice(id,1) 
    list1.map(ele=>list.concat(ele))
    console.log(list)
    addItem([...list])


    }
   

     
        let log= JSON.parse(localStorage.getItem("login"))
        // console.log(log)
        return (
            <div>
                <div>
                <h1> {log.username}</h1>
        <input type="text" onChange={handleChange}/><br/>
        <button onClick={AddItems}>Add</button>
                </div>
                 <div>
                  
                     {
                        list.map((ele,i)=>{
                            return(
                            <li onClick={()=>handledelete(i)}>{ele.item}</li>
                            )
                        })
                     }
                 </div>
    
        
            
            </div>
           
        )
    
}
