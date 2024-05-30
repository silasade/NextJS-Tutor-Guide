import fs from "fs"
export default function ServerComponentOne(){
   fs.readFileSync("src/components/server-component-one")
    return <h1>Server Component One</h1>
}