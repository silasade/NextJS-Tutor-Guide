import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request:NextRequest){
    const requestHeaders=new Headers(request.headers)
    const headList=headers()
    console.log(requestHeaders.get("Authorization"))
    console.log(headList.get("Authorization"))
    //settiing a cookie
    cookies().set("resultsPerPage","20")
    //getting a cookie value
    const theme=request.cookies.get("theme")
    console.log(theme)
    console.log(cookies().get("resultsPerPage"))
    //setting an header
    return new Response("Profile world!",{
        "headers":{
            "Content-Type":"text/html",
            //setting cookie
            "Set-Cookie":"theme=dark"
        }
    })
}