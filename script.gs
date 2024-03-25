function sendLineNotify(message) {
  var token = ''; // LINE_NOTIFY_TOKEN
  var url = 'https://notify-api.line.me/api/notify';
  
  if (typeof message !== 'string' || message.trim() === '') {
    Logger.log('Error: Message is empty.');
    return;
  }
  
  var payload = {
    'message': message
  };
  
  var options = {
    'method' : 'post',
    'headers': {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    'payload' : payload
  };
  
  var response = UrlFetchApp.fetch(url, options);
  Logger.log(response.getContentText());
}

function makeGetRequest() {
  var url = 'https://1cf7-2001-fb1-172-2202-b862-d844-ff5a-f31e.ngrok-free2.app'; // url server
  
  try {
    var response = UrlFetchApp.fetch(url);
    var content = response.getContentText();
    Logger.log(content);
  } catch (error) {
    var currentDate = new Date();
    var formattedDate = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), 'dd/MM/yyyy HH:mm:ss');
    var message = 'แจ้งเตือน: เซิร์ฟเวอร์ออฟไลน์\n' + 'ชื่อ: dev2077.dev\n' + 'เวลา: ' + formattedDate;

    sendLineNotify(message);
    Logger.log("Error making GET request: " + error.toString());
  }
}

function setupTrigger() {
 // สร้าง Trigger ที่จะทำงานทุกๆ 5 นาที
 ScriptApp.newTrigger('makeGetRequest')
    .timeBased()
    .everyMinutes(5) // ตั้งค่าเวลาที่ต้องการ
    .create();
}

function doGet() {
  setupTrigger();
  return ContentService.createTextOutput("Request is being processed...");
}
