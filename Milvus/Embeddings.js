
let openAIKey = ''
export const embeddingOpenAI = async function (data) {
    try {
        let headers = {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${openAIKey}`
        }
        const response = await fetch("https://api.openai.com/v1/embeddings", {
            method: "POST", // or 'PUT'
            headers: headers,
            body:JSON.stringify({
                'model':'text-embedding-ada-002',
                'input':data
            }),
        });

        const result = await response.json();

        //
        // console.log("Success:", result,result.data[0].embedding);
        // console.log("length:", result.data[0].embedding.length);
        if(result.data&&result.data.length>0){
            return result.data[0].embedding
        }
    } catch (error) {
        console.error("Error:", error);
    }
}