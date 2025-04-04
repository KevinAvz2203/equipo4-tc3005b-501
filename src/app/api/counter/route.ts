import { NextResponse } from "next/server";

let count = 0;

export async function POST() {
    count += 1;
    return NextResponse.json({ count });
}