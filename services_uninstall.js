import { Service } from "node-windows";

const svc = new Service({
  name: "Talis30 Mppt control",
  description: "This is program node.js for talis30 controlling mppt.",
  script:
    "C:\\Users\\Desktop\\project\\backend-mppt-controller\\index.js", //path program nodejs change \ to \\
});

svc.on("uninstall", () => {
  console.log("Uninstall complete");
});

svc.uninstall();
