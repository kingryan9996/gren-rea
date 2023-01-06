import { useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'

export const Main = () => {

    let num = 100;
    let [count, setCount] = useState(100);
    let numRef = useRef(10)

    function incre() {
        num++;
        numRef.current++;
        setCount(++count);

        console.log(num, count, numRef)
    }


    return (
        <>
            <section onClick={incre}>num = {num} / count = {count} / ref = {numRef.current}</section>

        </>

        // <>
        // <section>
        //     <h2 > {page} </h2>
        //     <div>
        //         {
        //           data[page].map((res,idx)=>{
        //             return <Item info={res} key={idx}/>;
        //           })
        //         }
        //     </div>
        // </section>
        // </>
    )
}

//rafc로 작성하면 함수컴포넌트를 생성과 함께 export를 하게되는데,
//import를 하는 컴포넌트에서 받아올때 {컴포넌트명}식으로 작성해야함
//ex) Main.js에서 10개의 함수를 export하고 App.js에서 임포트한다면
// import *all from './컴포넌트경로' : 전부 다 부를때, 객체형태로 보여줌
// import {Main, ~~~, ~~~~} from './컴포넌트경로' 이런식


// export default Main  <- 디폴트는 이 한개만 보낸다 같은 뜻