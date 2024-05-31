### Starting Memcached

Here's how you can start the Memcached server:

1. **Install Memcached**:
   - **Linux** (Debian-based systems like Ubuntu):
     ```sh
     sudo apt-get update
     sudo apt-get install memcached
     ```
   - **macOS** (using Homebrew):
     ```sh
     brew install memcached
     ```
   - **Windows**:
     - You can download a Memcached installer for Windows from [here](https://memcached.org/downloads).

2. **Start Memcached**:
   - **Linux** and **macOS**:
     ```sh
     memcached -vv
     ```
   - **Windows**:
     - Open a Command Prompt or PowerShell and navigate to the directory where Memcached is installed, then run:
       ```sh
       memcached.exe -vv
       ```

The `-vv` option runs Memcached in verbose mode, which is useful for development and debugging as it prints detailed information about its operations.

### Checking Memcached Status

To ensure that Memcached is running, you can use the following commands:

- **Linux**:
  ```sh
  ps aux | grep memcached
  ```
- **macOS**:
  ```sh
  ps aux | grep memcached
  ```
- **Windows**:
  - Open Task Manager and look for `memcached.exe` in the list of running processes.


### Running Node App

```
npm install
npm start
```

**cURL**

- set value to cache
```cURL
curl --location 'http://localhost:3000/cache' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'key=newKEY' \
--data-urlencode 'value=NEW DAATAAA'
```

- get value from cache
```cURL
curl --location 'http://localhost:3000/cache/newKEY?key=newKEY'
```
