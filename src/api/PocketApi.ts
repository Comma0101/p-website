import axios from "axios";

// Replace these with your actual Pocket consumer key and redirect URI
const REDIRECT_URI = "http://localhost:5173/";
export async function getAccessToken(): Promise<void> {
  try {
    // Step 1: Get Request Token from Flask Proxy
    const requestTokenResponse = await axios.post(
      "http://localhost:5000/pocket/request_token"
    );
    const requestToken = requestTokenResponse.data.code;
    console.log("Request Token:", requestToken);

    // Step 2: Direct User to Authorize

    // Wait for the user to authorize the application (manually handled)

    // Step 3: Convert Request Token to Access Token via Flask Proxy
    const accessTokenResponse = await axios.post(
      "http://localhost:5000/pocket/access_token",
      {
        request_token: requestToken,
      }
    );

    const accessToken = accessTokenResponse.data.access_token;
    console.log("Access Token:", accessToken);
  } catch (error) {
    console.error("Error during Pocket API flow:", error);
  }
}

getAccessToken();
