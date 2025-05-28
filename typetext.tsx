import { useEffect, useState } from "react";
export function useTypeNamesLikeAKeyboard(names:Array<String>,setName:Function, getinter:number){
    let interval = 0;
    
    if (getinter == undefined || getinter == null){
        interval = 100;
    }
    else{
        interval = getinter;
    }
    const [nameIndex, setNameIndex] = useState(0);
    useEffect(() => {
        if (!names || names.length === 0) return;
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
            },interval);
            return () => {
                clearInterval(timer);
            }
    }, [nameIndex])
}