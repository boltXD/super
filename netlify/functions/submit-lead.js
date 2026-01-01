export async function handler(event) {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Empty request body" })
      };
    }

    const { name, email, company, message } = JSON.parse(event.body);

    await fetch("https://flow.zoho.in/60062621813/flow/webhook/incoming?zapikey=1001.3fd5f3a9b3d77d0c87d9309cf036f3c6.fc44ab04425ce2b4172332c7edb6bd6b&isdebug=false", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        company,
        message
      })
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Form submitted successfully"
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
}
