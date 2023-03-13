import { z } from "zod"
import { createHash } from "crypto"
import prisma from "../../../../lib/prisma"
import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string }
  }
) {
  try {
    const slug = params.slug

    const post = await prisma.post.findUnique({
      where: { slug },
    })

    return NextResponse.json({ views: post?.views || 1 }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: { slug: string }
  }
) {
  try {
    const slug = params.slug

    const post = await prisma.post.upsert({
      where: { slug },
      create: { slug, views: 1 },
      update: { views: { increment: 1 } },
    })

    return NextResponse.json({ views: post?.views || 1 }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
