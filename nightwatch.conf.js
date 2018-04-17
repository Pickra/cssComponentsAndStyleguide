const chromeDriver = require("chromedriver");
const seleniumServer = require("selenium-server");

const config = {
    src_folders: "./tests",
    output_folder: "./reports",
    custom_commands_path: "./commands",
    test_workers: false,

    selenium: {
      start_process: true,
      server_path: seleniumServer.path,
      log_path: "",
      host: "127.0.0.1",
      port: 4444,
      cli_args: { "webdriver.chrome.driver": chromeDriver.path }
    }, 

    test_settings: {
      default: {
        launch_url: "http://localhost:8000/styleguide/html/",
        skip_testcases_on_fail: false,
        end_session_on_fail: false,
        screenshots: { enabled: false },

        desiredCapabilities: { 
          browserName: "chrome",
          javascriptEnabled: true,
          chromeOptions: { args: [ "--headless" ]}
        }
      }
    }
}

module.exports = config;