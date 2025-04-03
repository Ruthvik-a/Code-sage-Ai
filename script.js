async function runCode() {
    let code = document.getElementById("codeInput").value;
    let apiKey = "YOUR_OPENROUTER_API_KEY"; // Replace with your actual API key

    let response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "deepseek-coder-v3",  // Specify DeepSeek V3 model
            messages: [{ role: "user", content: `Run the following code:\n${code}` }],
            temperature: 0.7
        })
    });

    let result = await response.json();
    
    if (result.choices && result.choices.length > 0) {
        document.getElementById("output").innerText = result.choices[0].message.content;
    } else {
        document.getElementById("output").innerText = "Error running code.";
    }
}
