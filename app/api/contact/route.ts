import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Contact from '@/models/Contact'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Connect to MongoDB
    await connectDB()

    // Create and save contact
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    })

    await contact.save()

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully!',
        success: true 
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error saving contact:', error)
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Duplicate entry' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    )
  }
}

