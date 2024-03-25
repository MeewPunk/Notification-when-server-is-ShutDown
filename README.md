# LINE Notify Alert

## Description
This program is used to send notification messages via LINE Notify when the server is unreachable.

## Usage

### Setup
1. Open the `script.gs` file.
2. Replace `LINE_NOTIFY_TOKEN` with the token received from LINE Notify registration.
3. Open the `Code.gs` file.
4. Edit the URL of your website in the `makeGetRequest()` function by replacing `https://1cf7-2001-fb1-172-2202-b862-d844-ff5a-f31e.ngrok-free2.app` with your URL.

### Execution
1. When the program detects that the website is unreachable, it sends a notification message via LINE Notify to the recipient.
2. For added convenience, the program also sets up a trigger to run every 5 minutes to automatically check the website status.

## System Requirements
- Must run on Google Apps Script
- Requires a LINE Notify token

## Suggestions and Improvements
Feel free to report any suggestions or issues on the project's Issues page on GitHub.
