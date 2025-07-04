export default defineEventHandler(async (event) => {
    try {
      const body = await readBody(event)
      const { name, email, message } = body
  
      // Validate input
      if (!name || !email || !message) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Name, email, and message are required'
        })
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Invalid email format'
        })
      }
  
      // Here you would integrate with your email service
      // Example: SendGrid, Nodemailer, etc.
      const config = useRuntimeConfig()
      
      // Mock email sending (replace with actual email service)
      console.log('Sending email:', { name, email, message })
      
      // You can integrate with services like:
      // - SendGrid
      // - Nodemailer
      // - Resend
      // - AWS SES
      
      return {
        success: true,
        message: 'Message sent successfully!'
      }
    } catch (error) {
      throw createError({
        statusCode: error.statusCode || 500,
        statusMessage: error.statusMessage || 'Internal server error'
      })
    }
  })
  