import { Service } from "node-windows";

const svc = new Service({
  name: "Mppt control",
  description: "This is program node.js for controlling mppt.",
  script:
    "C:\\Users\\H P\\Desktop\\project\\backend-mppt-controller\\index.js", //path program nodejs change \ to \\
});

svc.on("install", () => {
  svc.start();
});

svc.install();
