//caching in routes handler
export const dynamic= "force-dynamic"
export async function GET() {
    return Response.json({
        time :new Date().toLocaleTimeString()
    })
}