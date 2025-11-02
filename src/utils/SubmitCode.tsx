import axios from "axios";

export const checkStatus = async (token:any) => {
    


    const options = {
	method: 'GET',
	url: 'https://judge0-ce.p.rapidapi.com/submissions/' + token,
    params: { base64_encoded: "true", fields: "*" },
	headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'ec3d4cf0bbmsh0b29ab0cc5f0b10p10b8aejsnccea71904c42',
       
       // 'X-RapidAPI-Key': '0e4d351b5fmsh00e573bb7d391f2p1320e4jsn7576c18935df', sharifabee
       //ec3d4cf0bbmsh0b29ab0cc5f0b10p10b8aejsnccea71904c42 --- digital
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
};



    try {
        let response = await axios.request(options);
        let statusId = response.data.status?.id;

        if (statusId === 1 || statusId === 2) {
            // Still processing --> re-run the same token check after 2 seconds
            return new Promise((resolve) => {
                setTimeout(async () => {
                    const result = await checkStatus(token);
                    resolve(result);  // Pass the result up the chain
                }, 2000);
            });
        } else {
            const { data } = response;
            console.log("success ", data);
            console.log("ans---->"+data.status.description);
            return { success: true, data };  // Return success with data
        }
    } catch (err) {
        return { success: false, err };  // Return error object in case of failure
    }
};


export const submitCode = async (formData:any) => {
    

    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': 'ec3d4cf0bbmsh0b29ab0cc5f0b10p10b8aejsnccea71904c42',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
    data: formData,
    };

  

    

    try {
        const { data } = await axios.request(options);

        console.log(data)

        return { success: true, data };
    } catch (err) {
        return { success: false, err }
    }
}