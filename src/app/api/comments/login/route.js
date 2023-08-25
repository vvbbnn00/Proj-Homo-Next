import {NextResponse} from 'next/server'

export async function POST(request) {
    const res = await request.json()
    const {code} = res;

    if (!code || typeof code !== 'string') {
        return NextResponse.json({
            error: 'invalid code'
        })
    }

    const result = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            client_id: process.env.GITALK_CLIENT_ID,
            client_secret: process.env.GITALK_CLIENT_SECRET,
            code
        }),
        cache: 'no-store'
    })

    return NextResponse.json(await result.json())
}