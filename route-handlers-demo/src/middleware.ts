import { NextRequest, NextResponse } from "next/server";
//middleware
export function middleware(request: NextRequest){//
    //cookies
    const response=NextResponse.next()
    const themePreference=request.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme","dark")
    }
    response.headers.set("custom-header","custom-value")
    return response
    /* 
    redirecting
    if (request.nextUrl.pathname==="/profile"){
        return NextResponse.redirect(new URL("/",request.url))
    } */
    //return NextResponse.redirect(new URL("/",request.url))
}
//export const config={
//    matcher:"/profile"
//}