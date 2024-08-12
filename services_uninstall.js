import { Service } from "node-windows";

const svc = new Service({
  name: "Talis30 Mppt control",
  description: "This is program node.js for talis30 controlling mppt.",
  script:
    "C:\\Users\\H P\\Desktop\\talis30\\talis30client\\talis30-client-mppt\\index.js", //path program nodejs change \ to \\
});

svc.on("uninstall", () => {
  console.log("Uninstall complete");
});

svc.uninstall();
