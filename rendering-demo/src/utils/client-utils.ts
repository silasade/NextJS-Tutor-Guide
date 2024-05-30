//npm i client-only to prevent certain functions to be assesible in a server side function
import "client-only"
export const clientSideFunction=()=>{
    console.log(
        `use window object,
        use localStorage,
        
        `
    )
    return "client result"
}