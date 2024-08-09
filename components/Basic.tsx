"use client"

import { FC } from "react";

const staticNum:number = 5 ;

type gender = "Malle" | "Female" | "LGBT";

interface Props{
    initVal:number;
    gender:gender;
}

interface Person{
    fristName?:string;
    lastName:string;
    age?:number;
    single:boolean;

}

const person:Person={
    fristName:"mik",
    lastName:"XD",
    age: 20,
    single: false,
};

const Basic:FC <Props>= ({initVal,gender}) => {
   const verifyGender =(gender:gender)=>{
    if (gender === "Female") console.log();
    else console.log("Not Female");
   };
   
    return (
        <>
            <p>Basic</p>
            <div>{staticNum}</div>
            <div>{person.fristName}</div>
            <div>{initVal}</div>
            <div>{gender}</div>
            <button>Increase</button>
            <button onClick={() =>verifyGender(gender)}>Gender</button>
        </>
    );
};
Basic.defaultProps={
    initVal: 0,
    gender: "Female",
};


export default Basic;
