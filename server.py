from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

POCKET_CONSUMER_KEY = "112548-7dfe0d9264ea97497c38f24";
REDIRECT_URI = "https://f268-2600-6c50-5af0-97d0-00-149d.ngrok-free.app";

@app.route('/pocket/request_token', methods=['POST'])
def get_request_token():
    try:
        pocket_url = "https://getpocket.com/v3/oauth/request"
        payload = {
            'consumer_key': POCKET_CONSUMER_KEY,
            'redirect_uri': REDIRECT_URI
        }
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Accept': 'application/json'
        }
        response = requests.post(pocket_url, data=payload, headers=headers)
        response.raise_for_status()
        return jsonify(response.json())

    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/pocket/access_token', methods=['POST'])
def get_access_token():
    try:
        pocket_url = "https://getpocket.com/v3/oauth/authorize"
        payload = {
            'consumer_key': POCKET_CONSUMER_KEY,
            'code': request.json.get('request_token')
        }
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Accept': 'application/json'
        }
        response = requests.post(pocket_url, data=payload, headers=headers)
        response.raise_for_status()
        return jsonify(response.json())

    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
