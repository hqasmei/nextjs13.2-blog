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
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      // Fallback for localhost or non Vercel deployments
      "0.0.0.0"
    const count = 1
    const slug = params.slug

    const currentUserId = createHash("md5")
      .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
      .digest("hex")

    const sessionId = slug + "___" + currentUserId

    const [post, user] = await Promise.all([
      // get the number of likes this post has
      prisma.post.findUnique({
        where: { slug },
      }),
      // get the number of times the current user has liked this post
      prisma.session.findUnique({
        where: { id: sessionId },
      }),
    ])

    return NextResponse.json(
      { likes: post?.likes || 0, currentUserLikes: user?.likes || 0 },
      { status: 200 }
    )
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
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      // Fallback for localhost or non Vercel deployments
      "0.0.0.0"
    const count = 1
    const slug = params.slug

    const currentUserId = createHash("md5")
      .update(ipAddress + process.env.IP_ADDRESS_SALT!, "utf8")
      .digest("hex")

    const sessionId = slug + "___" + currentUserId

    const [post, user] = await Promise.all([
      // increment the number of times everyone has liked this post
      prisma.post.upsert({
        where: { slug },
        create: {
          slug,
          likes: count,
        },
        update: {
          likes: {
            increment: count,
          },
        },
      }),

      // increment the number of times this user has liked this post
      prisma.session.upsert({
        where: { id: sessionId },
        create: {
          id: sessionId,
          likes: count,
        },
        update: {
          likes: {
            increment: count,
          },
        },
      }),
    ])

    return NextResponse.json({ post, user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}
