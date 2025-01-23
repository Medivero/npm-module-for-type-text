import React, { useEffect, useState } from "react";
export function useTypeNamesLikeAKeyboard(names,setName){
    const [nameIndex, setNameIndex] = useState(0);
    useEffect(() => {
    let direction = 1;
    let index = 1;
        const timer = setInterval(() => {
            const name = names[nameIndex];
            const len = name.length;
            if (index === len+5 && direction === 1){
                direction= -1;
            }
            else if(index === 0 && direction === -1){
                direction = 1;
                const newNameIndex = (nameIndex + 1) % names.length;
                setNameIndex(newNameIndex);
            }
            setName(name.slice(0,index));
            index+=direction;
        },100);
        return () => {
            clearInterval(timer);
        }
    }, [nameIndex])
}