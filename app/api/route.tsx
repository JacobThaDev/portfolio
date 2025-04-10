
export async function GET(request: Request) {
    return new Response(JSON.stringify({ message: "Welcome to my public API! Nothing interestig here yet tho..."}), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });

}
