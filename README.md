# Mppt Controller

## How to install and run

1. Clone the repository
2. Install dependencies

    ```bash
    npm install
    ```

3. Update your path where this program cloned in services_install.js
4. Install Services

    ```bash
    node services_install.js
    ```

## API Endpoints

### Databases

- `GET /mppt` - List all MPPT
- `DELETE /mppt/:mppt_sn"` - Delete mppt by mppt_sn
- `POST /mppt` - Create a new mppt

    ```bash
    {
    "mppt_sn":"exampleMPPT001",
    "mppt_ip":"200.0.0.0"
    }
    ```

### Fetching

- `GET /get-system-data` - Get mppt system data by ip mppt
- `GET /get-user-network` - Get mppt user network by ip mppt

### Controller

- `POST /set-reboot` - set reboot mppt
- `POST /set-factory-reset` - set factory reset mppt
- `POST /set-all-module-on` - Buy a product
- `POST /set-all-module-off` - Buy a product
- `POST /set-sync-system` - Buy a product
- `POST /set-user-network` - Buy a product

    ```bash
    { 
    "default_ip": "192.168.0.0" ,
    "ssid" : "wifi",
    "pass" : "pass",
    "ip" : "200.10.2.10",
    "gateway" : "200.10.2.1",
    "subnet" : "255.255.255.0",
    "server" : 1,
    "mode" : 2
    }
    ```

## Postman Collection

Import the provided Postman Collection for testing the API endpoints.

### How to Import Postman Collection

1. Open Postman
2. Click on `Import` button
3. Select the file `Mppt control.postman_collection.json` from the `postman` directory
4. Start testing the endpoints

## Postman Collection File

The Postman Collection file is located in the `postman` directory and is named `Mppt control.postman_collection.json`.
